
// routes/reviewRoutes.js
const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

//Create Review
router.post('/', reviewController.create);

//Delete Review by ID
router.delete('/:id', reviewController.delete);

module.exports = router;