const express = require('express');
const dotenv = require('dotenv');
const db = require('./db');
const { exceptionHandling } = require('./middleware/exceptionalHandling');


// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
require('./routes/order-route')(app);

// Error handling @info: send apropriat error or display error page

// @info: Error middleware 
app.use(exceptionHandling);

// Start Server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});