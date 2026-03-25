const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Hello Server' });
});

app.get('/about', (req, res) => {
  res.json({ message: 'This is the About page' });
});

app.get('/contact', (req, res) => {
  res.json({ message: 'Contact us at hello@example.com' });
});

app.get('/services', (req, res) => {
  res.json({ message: 'Our services include web development' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
