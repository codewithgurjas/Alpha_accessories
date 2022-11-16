const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
     name:{
        type:String,
        required:true,
        // minLength: 3,
        // maxLength: 100,
    },
    description:{
        type:String,
        required:true,
        // minLength: 3,
        // maxLength: 100,
    },
    // createdAt: {
    //     type: Date,
    //     immutable: true,
    //     default: () => Date.now(),
    // },
    // updatedAt: {
    //     type: Date,
    //     default: () => Date.now(),
    // }
});

// Virtual for book's URL
CategorySchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `${this._id}`;
});

// Export model
module.exports = mongoose.model("Categories", CategorySchema);