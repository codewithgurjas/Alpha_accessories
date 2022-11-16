#! /usr/bin/env node

console.log('This script populates some test books, authors, genres and bookinstances to your database. Specified database as argument - e.g.: populatedb mongodb+srv://cooluser:coolpassword@cluster0.a9azn.mongodb.net/local_library?retryWrites=true');

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
/*
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}
*/
var async = require('async')
let Category = require('./models/Category')
var Item= require('./models/Item')

var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var items = []
var categories = []

function itemCreate(itemName,description,Category,price,itemsAvailable,img,cb) {
    itemdetail = { itemName:itemName,description:description,Category:Category,price:price,itemsAvailable:itemsAvailable,img:img}
  
    var item = new Item(itemdetail);
         
    item.save(function (err) {
      if (err) {
        cb(err, null)
        return
      }
      console.log('New item: ' + item);
      items.push(item)
      cb(null, item)
    }  );
  }

function categoryCreate(name,description, cb) {
  categorydetail = {name:name , description: description }

  
  let category = new Category(categorydetail);
       
  category.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New category: ' + category);
    categories.push(category)
    cb(null, category)
  }  );
}    


function createCategory(cb) {
    async.series([
        function(callback) {
            categoryCreate('Armrests',"Premium quality armrests", callback);
        },
        function(callback) {
            categoryCreate('Covers', "Premium quality armrests Covers", callback);
        },
        function(callback) {
            categoryCreate('Gearknobs', "Premium quality Gearknobs", callback);
        },
        function(callback) {
            categoryCreate('Interior screens', "Premium quality Interior screens", callback);
        },
        function(callback) {
            categoryCreate('Jumper cable', "Premium quality Jumper cable", callback);
        },
        function(callback) {
            categoryCreate('Lights', "Premium quality Lights", callback);
        },
        function(callback) {
            categoryCreate('Mirrors', "Premium quality Mirrors", callback);
        },
        function(callback) {
            categoryCreate('Parking sensor', "Premium quality Parking sensor", callback);
        },
        function(callback) {
            categoryCreate('Perfumes', "Premium quality Perfumes", callback);
        },  
        function(callback) {
            categoryCreate('Racing Pedals', "Premium quality Racing pedals", callback);
        },
        function(callback) {
            categoryCreate('Seat covers', "Premium quality Seat covers", callback);
        },
        function(callback) {
            categoryCreate('Steering wheels', "Premium quality Steering wheels", callback);
        },
        function(callback) {
            categoryCreate('Tyre inflator', "Premium quality Tyre Inflator", callback);
        },

        ],
        // optional callback
        cb);
}
//itemName,description,Category,price,noInStock

function createItem(cb) {
    async.parallel([
        function(callback) {
            itemCreate('Allure Auto Car Armrest','Premium quality armrests',categories[0],12000,100,'https://m.media-amazon.com/images/I/419XoiingTL._SX355_.jpg', callback);
        },
        function(callback) {
            itemCreate('AUTO CAR WINNER Stylish Car Armrest with Glass Holder','Premium quality armrests',categories[0],12000,100,'https://ss-pics.s3.eu-west-1.amazonaws.com/ci/917961/large-2008_bracciolo_bicolore_peugeot.jpg?1635805568',callback);
        },
        function(callback) {
            itemCreate('Car Body Cover (Matte)','Premium quality covers',categories[1],12000,100,'https://cdn.shopify.com/s/files/1/0651/7715/7847/products/51IMrsroX0L._SL1000_0a693f57-2ba6-4e13-b885-b818504f1a1b.jpg?v=1664008839&width=533', callback);
        },
        function(callback) {
            itemCreate('Neodrift - Car Cover for SUV Range Rover','Premium quality covers',categories[1],12000,100, 'https://5.imimg.com/data5/RF/XE/XK/SELLER-1255082/waterproof-car-covers-500x500.jpg',callback);
        },
        function(callback) {
            itemCreate('WAKLANE Car Cover with Triple Stitched Ultra Surface Body Protection','Premium quality covers',categories[1],12000,100,'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1634677236-coverado-all-weather-1634677224.jpg', callback);
        },
        function(callback) {
            itemCreate('Dice gearknob','Premium quality gear knobs',categories[2],12000,100,'https://img.myipadbox.com/upload/store/product_l/CMS2893.jpg', callback);
        },
        function(callback) {
            itemCreate('Led light gearknob','Premium quality gear knobs',categories[2],12000,100,'https://images-cdn.ubuy.co.in/6XYVT05K-crystal-shift-knob-touch-activated-ultra.jpg',callback);
        },
        function(callback) {
            itemCreate('Skull gear knob','Premium quality gear knobs',categories[2],12000,100,'https://m.media-amazon.com/images/I/31GaiAFNAVL.jpg' ,callback);
        },
        function(callback) {
            itemCreate('Sword Gearknob','Premium quality gear knobs',categories[2],12000,100,'https://images-eu.ssl-images-amazon.com/images/I/51ZIm2m1FVL._AC_UL160_SR160,160_.jpg',callback);
        },
        function(callback) {
            itemCreate('Godryft 7 Inch Full HD 1080P Touch Screen Android 9.1, Ultra IPS Display','Premium quality interior screens',categories[3],12000,100,'https://m.media-amazon.com/images/I/61RhLX7EQdL._SX679_.jpg',callback);
        },
        function(callback) {
            itemCreate('Woodman Neo5 - 7 inch Android Car Stereo ','Premium quality interior screens',categories[3],12000,100,'https://www.financialexpress.com/wp-content/uploads/2022/07/carplay-e1659081278327.jpg?w=900',callback);
        },
        function(callback) {
            itemCreate('Jumper Lead Ring Terminal ','Premium quality jumper cable',categories[4],12000,100,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwBt8804ScZTVbhKFllhz3bTIFaI737fse4A&usqp=CAU',callback);
        },
        function(callback) {
            itemCreate('Dasboard light ','Premium quality lights',categories[5],12000,100,'https://rukminim1.flixcart.com/image/612/612/ky90scw0/car-fancy-light/d/n/7/12-new-el-wire-ice-blue-car-dashboard-universal-for-cars-with-original-imagagzxmffg98m8.jpeg?q=70' ,callback);
        },
        function(callback) {
            itemCreate('Foot light','Premium quality lights',categories[5],12000,100,'https://rukminim1.flixcart.com/image/416/416/ked56kw0/sill-plate/z/w/k/car-door-foot-step-led-sill-plate-with-mirror-finish-premium-original-imafv2kvzy5jgysv.jpeg?q=70' ,callback);
        },
        function(callback) {
            itemCreate('Hood light ','Premium quality lights',categories[5],12000,100,'https://i5.walmartimages.com/asr/60d26ac2-38b2-4b58-a24f-9fa8a0dbd23f.064e65d769b60cae7f7e7e3d662ba342.jpeg?odnHeight=580&odnWidth=580&odnBg=FFFFFF',callback);
        },
        function(callback) {
            itemCreate('Rear view','Premium quality mirrors',categories[6],12000,100,"https://m.media-amazon.com/images/I/61mRtDr9wCL._SL1500_.jpg",callback);
        },
        function(callback) {
            itemCreate('Side view','Premium quality mirrors',categories[6],12000,100,'https://5.imimg.com/data5/BJ/ZX/TW/SELLER-12251084/car-side-rear-view-mirror-500x500.jpg',callback);
        },
        function(callback) {
            itemCreate('A2D Led Car Parking Sensor Black Night Vision Reverse Parking Camera ','Premium quality parking sensor',categories[7],12000,100,'https://m.media-amazon.com/images/I/41d5o5NyjhL.jpg',callback);
        },
        function(callback) {
            itemCreate('Kozdiko Black Parking Reverse Sensors for All Cars','Premium quality parking sensor',categories[7],12000,100,'https://image.made-in-china.com/2f0j00afEYWzyBmgkt/LED-Buzzer-Parking-Sensor-Four-Points-Car-Reversing-Assistant-System.jpg',callback);
        },
        function(callback) {
            itemCreate('Godrej aer twist car air Freshener','Premium quality perfumes',categories[8],12000,100,'https://m.media-amazon.com/images/I/61OQQtOH8qL._SL1500_.jpg',callback);
        },
        function(callback) {
            itemCreate('Involeve One Musk Car Perfume','Premium quality perfumes',categories[8],12000,100,'https://m.media-amazon.com/images/I/51vw-wdV-eL._SL1051_.jpg',callback);
        },
        function(callback) {
            itemCreate('Chrome with rubber grip','Premium quality racing pedals',categories[9],12000,100,'https://m.media-amazon.com/images/I/51F8RpTN%2BjL._SX300_SY300_QL70_ML2_.jpg',callback);
        },
        function(callback) {
            itemCreate('Cubre Glossy','Premium quality racing pedals',categories[9],12000,100,'https://traxion.gg/wp-content/uploads/2022/05/MOZA-Racing-SRP-Pedals-2.jpg',callback);
        },
        function(callback) {
            itemCreate('Sparco metal','Premium quality racing pedals',categories[9],12000,100,'https://rukminim1.flixcart.com/image/416/416/jhf5pjk0/car-pedal/g/b/v/non-slip-racing-sport-manual-car-truck-pedals-pad-cover-autofy-original-imaf5gf5zzqvz399.jpeg?q=70',callback);
        },
        function(callback) {
            itemCreate('Mahindra Thar 2020 BS6 Seat Cover Set','Premium quality seat covers',categories[10],12000,100,'https://5.imimg.com/data5/WJ/II/RF/SELLER-57132678/pu-leather-car-seat-cover-500x500.jpg',callback);
        },
        function(callback) {
            itemCreate('XUV700 Black Deco Stitch Seat Cover ','Premium quality seat covers',categories[10],12000,100,'https://i.pinimg.com/736x/8e/af/17/8eaf17afdc6c9bfc7b64eef2b0828f82.jpg', callback);
        },
        function(callback) {
            itemCreate('D3','Premium quality steering wheels',categories[11],120,100,'https://momo.com/wp-content/uploads/2017/07/momo-heritage-indy-wood-steering-wheel-a.png',callback);
        },
        function(callback) {
            itemCreate('D4','Premium quality steering wheels',categories[11],120,100,'http://cdn.shopify.com/s/files/1/0056/6014/7827/collections/SWEELS_1200x1200.png?v=1602056339',callback);
        },
        function(callback) {
            itemCreate('Electric Air Compressor Inflator Pump ','Premium quality tyre inflator',categories[12],120,100,'https://tyres.cardekho.com/news/wp-content/uploads/2015/02/Tyre-Pressure-Checking-1.png',callback);
        },
        function(callback) {
            itemCreate('IBELL Heavy Duty Tyre Inflator CA12-97','Premium quality tyre inflator',categories[12],120,100,'https://www.caraccessory.in/wp-content/uploads/2020/08/typhoon-digital-cover.jpg',callback);
        },
        
        ],
        // optional callback
        cb);
}

async.series([
    createCategory,
    createItem
],
// Optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    else {
        console.log('items array: '+items);
    
    }
    // All done, disconnect from database
    mongoose.connection.close();
});

