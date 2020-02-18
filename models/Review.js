const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  site: {
    type: Schema.Types.ObjectId,
    ref: "sites"
  },
  body: {
    type: String,
    required: true
  },
  rating: {
    type: String,
    default: "5"
  },
  upvotes: {
    type: Array
  },
  downvotes: {
    type: Array
  }
});

module.exports = Site = mongoose.model("review", ReviewSchema);
