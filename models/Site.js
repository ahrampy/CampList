const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SiteSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  description: {
    type: String,
    required: true
  },
  lat: {
    type: String,
    required: true
  },
  lng: {
    type: String,
    required: true
  },
  plat: {
    type: String,
    required: false
  },
  plng: {
    type: String,
    required: false,
  },
  tlat: {
    type: String,
    required: false,
  },
  tlng: {
    type: String,
    required: false,
  },
  // reviews: {
  //   author: {
  //     type: Schema.Types.ObjectId,
  //     ref: 'users'
  //   },
  //   body: {
  //     type: String,
  //     // required: true,
  //     default: '',
  //   },
  //   rating: {
  //     type: String,
  //     // required: true,
  //     default: '5',
  //   },
  // },
  siteFeatures: {
    parking: {
      type: Boolean,
      default: false,
    },
    fishing: {
      type: Boolean,
      default: false,
    },
    hiking: {
      type: Boolean,
      default: false,
    },
    firePit: {
      type: Boolean,
      default: false,
    }
  }
  
});

module.exports = Site = mongoose.model('site', SiteSchema);