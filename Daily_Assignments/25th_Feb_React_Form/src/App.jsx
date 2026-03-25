import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'error' or 'success'

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email
    if (email === '' || !email.includes('@')) {
      setMessage('Please enter a valid email address');
      setMessageType('error');
      return;
    }

    // Validate age
    if (age === '') {
      setMessage('Please enter your age');
      setMessageType('error');
      return;
    }

    const ageNum = parseInt(age, 10);

    // Check if age is at least 18
    if (ageNum < 18) {
      setMessage('You must be at least 18 years old');
      setMessageType('error');
    } else {
      setMessage('Form submitted successfully');
      setMessageType('success');
      // Clear form after successful submission
      setEmail('');
      setAge('');
    }
  };

  const handleChange = () => {
    // Clear message when user starts typing
    setMessage('');
    setMessageType('');
  };

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <h1>User Registration Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                handleChange();
              }}
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
                handleChange();
              }}
              placeholder="Enter your age"
              min="0"
            />
          </div>

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>

        {message && (
          <div className={`message ${messageType}`}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
