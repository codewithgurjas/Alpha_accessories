const Category = require('../models/Category');
const Item = require('../models/Item');

const async = require("async");

exports.index = (req, res) => {
    async.parallel(
      {
        category_count(callback) {
          Category.countDocuments({}, callback); // Pass an empty object as match condition to find all documents of this collection
        },
        item_count(callback) {
          Item.countDocuments({}, callback);
        },
       
      },
      (err, results) => {
        res.render("index", {
          title: "Alpha Car Accessories",
          error: err,
          category_data: results.category_count,
          item_data: results.item_count
        });
      }
    );
  };