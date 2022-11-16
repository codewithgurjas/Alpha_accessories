const express = require("express");
const router = express.Router();

// Require controller modules.
const category_controller = require('../controllers/categoryController');
const item_controller = require('../controllers/itemController');


router.get("/", category_controller.index);

router.get("/category/create", book_controller.category_create_get);


router.post("/category/create", book_controller.category_create_post);