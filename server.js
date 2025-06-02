const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');
const { check, validationResult } = require('express-validator');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

// Database connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/sindhiai', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};

// Import routes
const userRoutes = require('./routes/users');
const tutorialRoutes = require('./routes/tutorials');
const messageRoutes = require('./routes/messages');

// Define routes
app.use('/api/users', userRoutes);
app.use('/api/tutorials', tutorialRoutes);
app.use('/api/messages', messageRoutes);

// Default route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Sindhi AI API' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});

// Connect to database
connectDB();

module.exports = app;
