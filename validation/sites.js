const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateSiteInput(data) {
  let errors = {};

  data.name = validText(data.name) ? data.name : '';
  data.description = validText(data.description) ? data.description : '';
  data.lat = validText(data.lat) ? data.lat : '';
  data.lng = validText(data.lng) ? data.lng : '';
  // data.reviews.body = validText(data.reviews.body) ? data.reviews.body : '';
  // data.reviews.rating = validText(data.reviews.rating) ? data.reviews.rating : '';

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = 'Name must be between 2 and 30 characters';
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }

  if (!Validator.isLength(data.description, { min: 5, max: 400 })) {
    errors.description = 'Description must be between 5 and 400 characters';
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = 'Description field is required';
  }

  if (Validator.isEmpty(data.lat)) {
    errors.lat = 'Latitude field is required';
  }

  if (Validator.isEmpty(data.lng)) {
    errors.lng = 'Longitude field is required';
  }

  // if (!Validator.isLength(data.reviews.body, { min: 5, max: 140 })) {
  //   errors.reviews.body = 'Body must be between 5 and 140 characters';
  // }

  // if (Validator.isEmpty(data.reviews.body)) {
  //   errors.reviews.body = 'Body field is required';
  // }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};