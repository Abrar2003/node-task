const Product = require('../models/Product.js');
const Review = require('../models/Review');

// Create a Product
exports.create = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Unable to create a product.' });
  }
};

// Get All Products
exports.getAll = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: 'Unable to retrieve products.' });
  }
};

// Get Product by ID
exports.getById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found.' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Unable to retrieve the product.' });
  }
};

// Update a Product
exports.update = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!product) {
      return res.status(404).json({ error: 'Product not found.' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Unable to update the product.' });
  }
};

// Delete a Product
exports.delete = async (req, res) => {
  try {
    const product = await Product.findByIdAndRemove(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found.' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Unable to delete the product.' });
  }
};

// Add a Review to a Product
exports.addReview = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found.' });
    }

    const review = new Review(req.body);
    await review.save();

    product.reviews.push(review);
    await product.save();

    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ error: 'Unable to add a review.' });
  }
};

// Get Reviews for a Product
exports.getReviews = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId)
    ;
    if (!product) {
      return res.status(404).json({ error: 'Product not found.' });
    }
    res.status(200).json(product.reviews);
  } catch (error) {
    res.status(500).json({ error: 'Unable to retrieve reviews for the product.' });
  }
};

// Delete a Review
exports.deleteReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndRemove(req.params.reviewId);
    if (!review) {
      return res.status(404).json({ error: 'Review not found.' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Unable to delete the review.' });
  }
};
