import React, { useEffect } from 'react';
import Counter from './components/Counter';
import ItemList from './components/ItemList';
import './styles/App.css';

/**
 * Main App Component
 * Demonstrates:
 * - Component lifecycle with useEffect
 * - Basic React functional components
 */
function App() {
  // useEffect Hook - Runs after component renders
  // This simulates component mounting and unmounting
  useEffect(() => {
    console.log('Component Mounted');
    // Optional: Display mount message in the UI
    alert('✓ Component Mounted');

    // Cleanup function - runs when component unmounts
    return () => {
      console.log('Component Unmounted');
      // This will run when the component is removed from DOM
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>React Functional Components Demo</h1>
        <p className="subtitle">Learn React Hooks & Best Practices</p>
      </header>

      <main className="app-main">
        {/* Counter Component - Demonstrates useState & useEffect */}
        <Counter />

        {/* ItemList Component - Demonstrates Lists, Keys & State Management */}
        <ItemList />
      </main>

      <footer className="app-footer">
        <p>Built with React Functional Components & Hooks 🚀</p>
      </footer>
    </div>
  );
}

export default App;
