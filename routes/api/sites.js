const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
mongoose.set("useFindAndModify", false);

const Site = require("../../models/Site");
const validateSiteInput = require("../../validation/sites.js");

router.get("/", (req, res) => {
  Site.find()
    .sort({ date: -1 })
    .then(sites => res.json(sites))
    .catch(err => res.status(404).json({ nositesfound: "No sites found" }));
});

router.get("user/:user_id", (req, res) => {
  Site.find({ user: req.params.user_id })
    .then(sites => res.json(sites))
    .catch(err =>
      res.status(404).json({ nositesfound: "No sites found from that user" })
    );
});

router.get("/:id", (req, res) => {
  Site.findById(req.params.id)
    .then(site => res.json(site))
    .catch(err =>
      res.status(404).json({ nositefound: "No Site found with that ID" })
    );
});

router.post(
  "/new",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateSiteInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newSite = new Site({
      author: req.user.id,
      name: req.body.name,
      date: req.body.date,
      photoUrl: [], //temporary fix, photos should be added after a sites creation
      description: req.body.description,
      lat: req.body.lat,
      lng: req.body.lng,
      plat: req.body.plat,
      plng: req.body.plng,
      tlat: req.body.tlat,
      tlng: req.body.tlng,
      siteFeatures: req.body.siteFeatures
    });

    newSite.save().then(site => res.json(site));
  }
);

router.put("/edit/:id", (req, res) => {
  Site.findById(req.params.id, (err, site) => {
    (site.id = req.body.id), (site.name = req.body.name);
    site.date = req.body.date;
    site.description = req.body.description;
    site.lat = req.body.lat;
    site.lng = req.body.lng;
    (site.tlat = req.body.tlat),
      (site.tlng = req.body.tlng),
      (site.plat = req.body.plat),
      (site.plng = req.body.plng),
      (site.photoUrl = site.photoUrl), //temporary fix, photo's shouldn't be added during the edit phase
      (site.siteFeatures = req.body.siteFeatures);
    site.save();
    res.json(site);
  });
});

router.put("/addPhoto/:id", (req, res) => {
  Site.findByIdAndUpdate(
    req.params.id,
    { $push: { photoUrl: req.body.photo } },
    { new: true }
  ).then(site => res.json(site));
});

router.delete("/:id", (req, res) => {
  Site.findByIdAndDelete(req.params.id)
    .then(() => res.json({ siteGone: "The site was removed" }))
    .catch(err => res.status(404).json({ noReviewForYou: "Nope" }));
});

module.exports = router;
