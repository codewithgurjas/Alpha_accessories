const Category = require('../models/Category')


exports.index = (req, res) => {
    res.send("NOT IMPLEMENTED: Site Home Page");
  };

  
// Display list of all Categories.
exports.author_list = function (req, res, next) {
    Author.find()
      .sort([["family_name", "ascending"]])
      .exec(function (err, list_authors) {
        if (err) {
          return next(err);
        }
        //Successful, so render
        res.render("category_list", {
          title: "Category List",
          author_list: list_authors,
        });
      });
  };