import React, { useState, useEffect } from 'react';

/**
 * Counter Component
 * Demonstrates:
 * - useState Hook: Managing component state
 * - useEffect Hook: Side effects (logging)
 * - Event handling with buttons
 */
function Counter() {
  // useState Hook creates a state variable 'count' with initial value 0
  // setCount is the function to update the count
  const [count, setCount] = useState(0);

  /**
   * useEffect Hook - Runs after component renders
   * This logs the count value to the console whenever it changes
   * The dependency array [count] means this effect runs when 'count' changes
   */
  useEffect(() => {
    console.log(`Counter value changed to: ${count}`);
  }, [count]); // Dependency array: effect runs when count changes

  // Event handler for increment button
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Event handler for decrement button
  const handleDecrement = () => {
    setCount(count - 1);
  };

  // Event handler to reset counter
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="card counter-card">
      <h2>Counter Component</h2>
      <p className="card-description">
        Demonstrates useState and useEffect Hooks
      </p>

      {/* Display current count */}
      <div className="counter-display">
        <span className="counter-value">{count}</span>
      </div>

      {/* Button group */}
      <div className="button-group">
        <button
          className="btn btn-primary"
          onClick={handleDecrement}
          aria-label="Decrement counter"
        >
          ➖ Decrease
        </button>

        <button
          className="btn btn-secondary"
          onClick={handleReset}
          aria-label="Reset counter"
        >
          🔄 Reset
        </button>

        <button
          className="btn btn-success"
          onClick={handleIncrement}
          aria-label="Increment counter"
        >
          ➕ Increase
        </button>
      </div>

      {/* Console note */}
      <p className="console-note">
        📝 Open browser console (F12) to see count changes logged
      </p>
    </div>
  );
}

export default Counter;
