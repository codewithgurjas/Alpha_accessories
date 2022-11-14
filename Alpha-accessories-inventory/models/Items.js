const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: { type: String, required: true },
  desciption: { type: String, required: true },
  price: { type : Number, required: true},
  instock_count : { type : Number, required : true}

});

// Virtual for Item's URL
ItemSchema .virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `${this._id}`;
 
});

// Export model
module.exports = mongoose.model("Items", ItemSchema );