const User = require('../models/User');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

// @route   POST api/users/register
// @desc    Register a user
// @access  Public
exports.registerUser = async (req, res) => {
  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password, preferredLanguage } = req.body;

  try {
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user
    user = new User({
      name,
      email,
      password,
      preferredLanguage: preferredLanguage || 'sindhi'
    });

    // Save user to database
    await user.save();

    // Generate JWT token
    const token = user.generateAuthToken();

    // Return token
    res.status(201).json({ token });
  } catch (error) {
    console.error('Error in registerUser:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
};

// @route   POST api/users/login
// @desc    Authenticate user & get token
// @access  Public
exports.loginUser = async (req, res) => {
  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = user.generateAuthToken();

    // Return token
    res.json({ token });
  } catch (error) {
    console.error('Error in loginUser:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
};

// @route   GET api/users/me
// @desc    Get current user profile
// @access  Private
exports.getCurrentUser = async (req, res) => {
  try {
    // Get user from database (exclude password)
    const user = await User.findById(req.user.id).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.json(user);
  } catch (error) {
    console.error('Error in getCurrentUser:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
};

// @route   PUT api/users/language
// @desc    Update user language preference
// @access  Private
exports.updateLanguage = async (req, res) => {
  const { preferredLanguage } = req.body;
  
  // Validate language
  if (!['sindhi', 'english'].includes(preferredLanguage)) {
    return res.status(400).json({ message: 'Invalid language preference' });
  }
  
  try {
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { preferredLanguage },
      { new: true }
    ).select('-password');
    
    res.json(user);
  } catch (error) {
    console.error('Error in updateLanguage:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
};
