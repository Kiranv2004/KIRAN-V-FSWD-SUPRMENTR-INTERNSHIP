import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const API_BASE_URL = 'http://localhost:5000';

  // Function to handle API calls
  const handleNavigation = async (endpoint) => {
    setLoading(true);
    setError('');
    setResponse('');

    try {
      const result = await axios.get(`${API_BASE_URL}${endpoint}`);
      setResponse(result.data.message);
    } catch (err) {
      setError(
        err.message === 'Network Error'
          ? 'Error: Backend server is not running. Please start the backend on port 5000.'
          : `Error: ${err.message}`
      );
      setResponse('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Welcome to Hello Server</h1>
        <p>A Beginner-Friendly Full Stack Project</p>
      </div>

      {/* Navigation Buttons */}
      <div className="button-group">
        <button
          className="nav-button"
          onClick={() => handleNavigation('/')}
          disabled={loading}
        >
          Home
        </button>
        <button
          className="nav-button"
          onClick={() => handleNavigation('/about')}
          disabled={loading}
        >
          About
        </button>
        <button
          className="nav-button"
          onClick={() => handleNavigation('/contact')}
          disabled={loading}
        >
          Contact
        </button>
        <button
          className="nav-button"
          onClick={() => handleNavigation('/services')}
          disabled={loading}
        >
          Services
        </button>
      </div>

      {/* Loading State */}
      {loading && <div className="loading">Loading...</div>}

      {/* Response Display */}
      {response && !loading && (
        <div className="response-card">
          <h2>Response:</h2>
          <p>{response}</p>
        </div>
      )}

      {/* Error Display */}
      {error && !loading && (
        <div className="error-card">
          <h2>Error:</h2>
          <p>{error}</p>
        </div>
      )}

      {/* Instructions */}
      {!response && !error && !loading && (
        <div className="info-card">
          <h3>📌 Instructions:</h3>
          <p>Click any button above to fetch data from the backend server.</p>
        </div>
      )}
    </div>
  );
}

export default App;
