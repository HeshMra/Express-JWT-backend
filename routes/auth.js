// const express = require('express');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');
// const dotenv = require('dotenv');

// dotenv.config();

// const router = express.Router();

// // Register route
// router.post('/register', async (req, res) => {
//     const { username, password, role } = req.body;

//     // Check if user already exists
//     const existingUser = await User.findOne({ username });
//     if (existingUser) {
//         return res.status(400).json({ message: 'User already exists' });
//     }

//     // Hash password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     try {
//         // Create new user
//         const user = new User({
//             username,
//             password: hashedPassword,
//             role
//         });

//         await user.save();

//         res.status(201).json({ message: 'User registered successfully' });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: 'Error registering user' });
//     }
// });

// // Login route
// router.post('/login', async (req, res) => {
//     const { username, password } = req.body;

//     // Check if user exists
//     const user = await User.findOne({ username });
//     if (!user) {
//         return res.status(400).json({ message: 'User not found' });
//     }

//     // Compare password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//         return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     // Create JWT token
//     const token = jwt.sign(
//         { userId: user._id, role: user.role },
//         process.env.JWT_SECRET, 
//         { expiresIn: '1h' }
//     );

//     res.json({ token });
// });

// // Protect route (for role-based authorization)
// router.get('/dashboard', verifyToken, (req, res) => {
//     // Verify the token and send response based on user role
//     if (req.user.role === 'admin') {
//         res.json({ message: 'Admin Dashboard' });
//     } else {
//         res.json({ message: 'User Dashboard' });
//     }
// });

// // Token verification middlewarea
// function verifyToken(req, res, next) {
//     const token = req.header('Authorization');
//     if (!token) {
//         return res.status(401).json({ message: 'Access Denied' });
//     }

//  // Check if token starts with 'Bearer' and remove the 'Bearer ' part
//     const tokenWithoutBearer = token.startsWith('Bearer ') ? token.slice(7) : token;

//     try {
//         const decoded = jwt.verify(tokenWithoutBearer, process.env.JWT_SECRET);
//         req.user = decoded;
//         next();
//     } catch (err) {
//         res.status(400).json({ message: 'Invalid token' });
//     }
// }

// module.exports = router;
