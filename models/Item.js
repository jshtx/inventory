// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
var ItemSchema = new Schema({
  // title is a required string
  barcode: {
    type: String,
    required: true
  },
  // link is a required string
  quantity: {
    type: Number,
    required: true
  },
  // This only saves one note's ObjectId, ref refers to the Note model
  item: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

// Create the Article model with the ArticleSchema
var Item = mongoose.model("Item", ItemSchema);

// Export the model
module.exports = Item;