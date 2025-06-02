const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const userController = require('../controllers/userController');
const { auth } = require('../middleware/auth');

// @route   POST api/users/register
// @desc    Register a user
// @access  Public
router.post(
  '/register',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password must be at least 6 characters').isLength({ min: 6 })
  ],
  userController.registerUser
);

// @route   POST api/users/login
// @desc    Authenticate user & get token
// @access  Public
router.post(
  '/login',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists()
  ],
  userController.loginUser
);

// @route   GET api/users/me
// @desc    Get current user profile
// @access  Private
router.get('/me', auth, userController.getCurrentUser);

// @route   PUT api/users/language
// @desc    Update user language preference
// @access  Private
router.put('/language', auth, userController.updateLanguage);

module.exports = router;
