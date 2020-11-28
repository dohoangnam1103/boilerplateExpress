var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');


const Cat = mongoose.model('Cat', { name: String });


/* GET users listing. */
router.get('/', function(req, res, next) {
  
  const kitty = new Cat({ name: 'Zildjian' });
  kitty.save().then(() => console.log('meow'));
  res.send({"name": "nam.d"});
});

module.exports = router;
