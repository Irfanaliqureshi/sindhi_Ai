const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Middleware to authenticate JWT token
const auth = async (req, res, next) => {
  // Get token from header
  const token = req.header('x-auth-token');

  // Check if no token
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'sindhiai_jwt_secret');
    
    // Add user from payload to request
    req.user = decoded;
    
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

// Middleware to check if user is admin
const admin = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    
    if (user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied: Admin privileges required' });
    }
    
    next();
  } catch (error) {
    console.error('Error in admin middleware:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { auth, admin };
