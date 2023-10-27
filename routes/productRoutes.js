const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

//Create New Product
router.post('/', productController.create);

//Get All Products
router.get('/', productController.getAll);

//Get One product by ID
router.get('/:id', productController.getById);

//Update Product by ID
router.put('/:id', productController.update);

//Delete Product by ID
router.delete('/:id', productController.delete);

//Add Review by Product ID
router.post('/:productId/reviews', productController.addReview);

//Delete Review by Product and Review ID
router.delete('/:productId/reviews/:reviewId', productController.deleteReview);

//Get all Reviews for a Product
router.get('/:productId/reviews', productController.getReviews);

module.exports = router;