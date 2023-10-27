const Review = require('../models/Review');

// Create a Review
exports.create = async (req, res) => {
  try {
    const review = new Review(req.body);
    await review.save();
    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ error: 'Unable to create a review.' });
  }
};

// Delete a Review
exports.delete = async (req, res) => {
  try {
    const review = await Review.findByIdAndRemove(req.params.id);
    if (!review) {
      return res.status(404).json({ error: 'Review not found.' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Unable to delete the review.' });
  }
};
