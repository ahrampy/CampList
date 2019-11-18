const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Site = require('../../models/Site');
const validateSiteInput = require('../../validation/sites');

router.get('user/:user_id', (req, res) => {
  Site.find({ user: req.params.user_id })
    .then(sites => res.json(sites))
    .catch(err => 
      res.status(404).json({ nositesfound: 'No sites found from that user' })
    );  
});

router.get('/:id', (req, res) => {
  Site.findById(req.params.id)
    .then(site => res.json(site))
    .catch(err => 
      res.status(404).json({ nositefound: 'No Site found with that ID' })
    );
});

router.post('/new',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateSiteInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newSite = new Site({
      author: req.user.id,
      name: req.body.name,
      description: req.body.description,
    });
  }
)

