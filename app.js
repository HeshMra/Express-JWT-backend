const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const authController = require('./controllers/authController');
const productController = require('./controllers/productController');


const app = express();
connectDB();

app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/auth', authController);
app.use('/products', productController);

module.exports = app;
