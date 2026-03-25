import React, { useState } from 'react';

/**
 * ItemList Component
 * Demonstrates:
 * - Rendering lists with map()
 * - Using unique keys for list items
 * - Dynamic state updates
 * - Adding new items to the list
 */
function ItemList() {
  // Initial list of fruits
  const initialItems = [
    { id: 1, name: '🍎 Apple', completed: false },
    { id: 2, name: '🍌 Banana', completed: false },
    { id: 3, name: '🍊 Orange', completed: false },
    { id: 4, name: '🍓 Strawberry', completed: false },
  ];

  // useState Hook to manage the list of items
  const [items, setItems] = useState(initialItems);
  const [inputValue, setInputValue] = useState('');

  // Function to add a new item to the list
  const addItem = () => {
    // Validate input
    if (inputValue.trim() === '') {
      alert('Please enter a fruit name');
      return;
    }

    // Create new item with unique id
    const newItem = {
      id: items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1,
      name: inputValue,
      completed: false,
    };

    // Add new item to the list using spread operator
    setItems([...items, newItem]);
    setInputValue(''); // Clear input field
  };

  // Function to toggle item completion status
  const toggleItem = (id) => {
    setItems(
      items.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  // Function to remove an item from the list
  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  // Handle Enter key press in input
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      addItem();
    }
  };

  return (
    <div className="card item-list-card">
      <h2>Item List Component</h2>
      <p className="card-description">
        Demonstrates Lists, Keys, and Dynamic State Updates
      </p>

      {/* Input section */}
      <div className="input-group">
        <input
          type="text"
          className="input-field"
          placeholder="Enter a fruit name..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          aria-label="Add new fruit"
        />
        <button className="btn btn-primary" onClick={addItem}>
          ➕ Add Item
        </button>
      </div>

      {/* List section */}
      <div className="list-container">
        <h3>Items ({items.length})</h3>

        {items.length === 0 ? (
          <p className="empty-message">No items added yet. Add one above!</p>
        ) : (
          <ul className="item-list">
            {/* Map through items and render each one */}
            {items.map((item) => (
              // IMPORTANT: Each item needs a unique key prop for React to track changes
              // Using 'item.id' ensures unique identification
              <li key={item.id} className="list-item">
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => toggleItem(item.id)}
                  className="checkbox"
                  aria-label={`Toggle ${item.name}`}
                />
                <span
                  className={`item-name ${
                    item.completed ? 'completed' : ''
                  }`}
                >
                  {item.name}
                </span>
                <button
                  className="btn btn-danger btn-small"
                  onClick={() => removeItem(item.id)}
                  aria-label={`Delete ${item.name}`}
                >
                  🗑️
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Info section */}
      <div className="info-box">
        <p>
          <strong>💡 Key Concepts:</strong>
        </p>
        <ul className="info-list">
          <li>Each list item has a unique <code>key</code> prop</li>
          <li>The <code>key</code> helps React identify which items have changed</li>
          <li>Always use unique identifiers for keys (never use array index)</li>
          <li>State updates trigger re-renders and update the UI</li>
        </ul>
      </div>
    </div>
  );
}

export default ItemList;
