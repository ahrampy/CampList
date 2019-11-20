const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Review = require('../../models/Review');
const validateReviewInput = require('../../validation/review.js');

router.post('/new', 
  passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const { errors, isValid } = validateReviewInput(req.body);

      if (!isValid) {
        return res.status(400).json(errors);
      }

      const newReview = new Review({
        author: req.user.id,
        body: req.body.body,
        rating: req.body.rating,
      });

      newReview.save().then(review => res.json(review));
    }
)

module.exports = router;