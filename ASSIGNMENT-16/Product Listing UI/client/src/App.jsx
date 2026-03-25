import { useEffect, useMemo, useState } from 'react'
import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [searchText, setSearchText] = useState('')
  const [cart, setCart] = useState([])

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setIsLoading(true)
        const response = await fetch('http://localhost:5000/products')

        if (!response.ok) {
          throw new Error('Could not fetch products. Please try again.')
        }

        const data = await response.json()
        setProducts(data)
      } catch (fetchError) {
        setError(fetchError.message)
      } finally {
        setIsLoading(false)
      }
    }

    loadProducts()
  }, [])

  const categories = useMemo(() => {
    const uniqueCategories = new Set(products.map((product) => product.category))
    return ['All', ...uniqueCategories]
  }, [products])

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch =
        selectedCategory === 'All' || product.category === selectedCategory
      const minPriceValue = minPrice === '' ? 0 : Number(minPrice)
      const maxPriceValue = maxPrice === '' ? Number.POSITIVE_INFINITY : Number(maxPrice)
      const priceMatch = product.price >= minPriceValue && product.price <= maxPriceValue
      const searchMatch = product.name
        .toLowerCase()
        .includes(searchText.trim().toLowerCase())

      return categoryMatch && priceMatch && searchMatch
    })
  }, [products, selectedCategory, minPrice, maxPrice, searchText])

  const addToCart = (product) => {
    setCart((previousCart) => [...previousCart, product])
  }

  const totalCartPrice = cart.reduce((total, item) => total + item.price, 0)

  return (
    <main className="page">
      <header className="page-header">
        <div>
          <h1>Mini E-Commerce Store</h1>
          <p>Browse products, apply filters, and add items to cart.</p>
        </div>
        <div className="cart-summary">
          <p>Cart Items: {cart.length}</p>
          <p>Total: ₹{totalCartPrice}</p>
        </div>
      </header>

      <section className="filters">
        <div className="filter-group">
          <label htmlFor="search">Search</label>
          <input
            id="search"
            type="text"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            placeholder="Search by product name"
          />
        </div>

        <div className="filter-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="min-price">Min Price</label>
          <input
            id="min-price"
            type="number"
            min="0"
            value={minPrice}
            onChange={(event) => setMinPrice(event.target.value)}
            placeholder="0"
          />
        </div>

        <div className="filter-group">
          <label htmlFor="max-price">Max Price</label>
          <input
            id="max-price"
            type="number"
            min="0"
            value={maxPrice}
            onChange={(event) => setMaxPrice(event.target.value)}
            placeholder="5000"
          />
        </div>
      </section>

      {isLoading ? (
        <div className="status-box">
          <div className="spinner" />
          <p>Loading products...</p>
        </div>
      ) : error ? (
        <p className="status-text error">{error}</p>
      ) : filteredProducts.length === 0 ? (
        <p className="status-text">No products found</p>
      ) : (
        <section className="product-grid">
          {filteredProducts.map((product) => (
            <article className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="category">{product.category}</p>
              <p className="price">₹{product.price}</p>
              <button type="button" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </article>
          ))}
        </section>
      )}
    </main>
  )
}

export default App
