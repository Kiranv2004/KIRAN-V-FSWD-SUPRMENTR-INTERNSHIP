const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 2499,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Running Shoes",
    price: 3299,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 4599,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Coffee Mug",
    price: 499,
    category: "Home",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    name: "Backpack",
    price: 1899,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    name: "Desk Lamp",
    price: 999,
    category: "Home",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    name: "Gaming Mouse",
    price: 1499,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1613141411244-0e4ac259d217?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    name: "Sunglasses",
    price: 799,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 9,
    name: "Indoor Plant",
    price: 699,
    category: "Home",
    image: "https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=800&q=80"
  }
];

app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
