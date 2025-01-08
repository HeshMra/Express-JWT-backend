const express = require('express');
const Product = require('../models/Product');


const router = express.Router();

//save products
router.post('/add_product', async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })

    }
}
)

//getall products
router.get('/all_product', async (req, res) => {
    try {
        const product = await Product.find({});
        res.status(200).json(product);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
})

//getByid products
router.get('/single_product/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
})

//update product
router.put('/update_product/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        //we cannot find any prodcut in database
        if (!product) {
            return res.status(404).json({ message: 'cannot find any product with ID ${id}' })
        }
        const updatedProduct = await Product.findById(id); //display updated data in the postman
        res.status(200).json(updatedProduct);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
})

//Delete product
router.delete('/delete_product/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ message: 'cannot find any product with ID ${id}' })
        }
        res.status(200).json(product);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
})


module.exports = router;