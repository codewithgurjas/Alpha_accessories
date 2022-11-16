const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  itemName: { type: String, required: true },
  description: { type: String, required: true },
  Category:{ type: Schema.Types.ObjectId, ref: 'Category', require:true },
  price: { type : Number, required: true},
  itemsAvailable : { type : Number, required : true},
  img:{ type: String}

});

// Virtual for Item's URL
ItemSchema .virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `${this._id}`;
 
});

// Export model
module.exports = mongoose.model("Items", ItemSchema );