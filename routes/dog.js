var express = require('express');
var router = express.Router();
const dog_controlers= require('../controllers/dog');

/* GET home page. */
router.get('/', dog_controlers.dog_view_all_Page ); 

module.exports = router;
