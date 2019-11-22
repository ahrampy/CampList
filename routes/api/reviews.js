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
        author: req.body.author,
        site: req.body.site,
        body: req.body.body,
        rating: req.body.rating,
      });

      newReview.save().then(review => res.json(review));
    }
)

router.get('/', (req, res) => {
  Review.find()
    .then(reviews => res.json(reviews))
    .catch(err => res.status(404).json({ nositesfound: 'No users found' }));
})

router.get('/site/:siteId', (req, res) => {
  Review.find({site: req.params.siteId})
    .then(reviews => res.json(reviews))
    .catch(err => 
      res.status(404).json({noreviewsfound: 'No reviews exist for this campsite'}
    )
  )
})

router.delete('/:id', (req, res) => {

  Review.findByIdAndDelete(req.params.id)
    .then(() => res.json({reviewGone: 'The review was removed'}))
    .catch(err => 
      res.status(404).json({noReviewForYou: "Nope"})  
    )
})

router.put('/:id', (req, res) => {
  Review.findByIdAndUpdate(req.params.id)
    .then((review) => res.json(review))
})



module.exports = router;