var express = require('express');
var router = express.Router();
const dog_controlers= require('../controllers/dog');

// GET request for one costume. 
router.get('/dog/:id', dog_controlers.dog_detail); 

/* GET home page. */
router.get('/', dog_controlers.dog_view_all_Page ); 

module.exports = router;
