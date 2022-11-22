const Item = require('../models/Item')


exports.itemList = async (req, res) => {
  try {
    const respone = await Item.find({}, { itemName: 1, price: 1, _id: 0 })
    res.send(respone);
  }
  catch (err) {
    res.send(err);
  }
}
exports.getform = (req, res) => {
  res.render("getform");
}

exports.post = async (req, res) => {
  try {
    let itemData = req.body
    let itemName = itemData.itemName;
    let description = itemData.description;
    let Category = itemData.Category//mongoose.Types.ObjectId(itemData.Category);
    let price = itemData.price;
    let itemsAvailable = itemData.itemsAvailable;
    // let file = req.file
    // console.log(file);
    let data = await Item.create({
      itemName: itemName, description: description, Category: Category, price: price, itemsAvailable: itemsAvailable
      // image: file.filename
      // file.path
    });
    
    res.render("itemPost", {data : data});
  }
  catch (err) {
    res.send(err)
  }
}

exports.itemGetById = async (req, res) => {
  try {
    let id = req.params.id;
    const result = await Item.where({ "_id": id });
    res.status(200).send(result);
  } catch (e) {
    res.status(404).send(e.massage);
  }
}

exports.getItemsByCategory = async (req, res) => {
  try {
    let id = req.params.id;
    const result = await Item.where({ "Category": id });
    res.status(200).send(result);

  }
  catch (e) {
    res.status(404).send(e.massage);
  }
}