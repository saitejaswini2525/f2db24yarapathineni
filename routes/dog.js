var express = require('express');
//const dog_controlers= require('../controllers/dog');
var router = express.Router();
// A little function to check if we have an authorized user and continue on 
//or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

const dog_controlers= require('../controllers/dog');

// GET request for one costume. 
router.get('/dog/:id', dog_controlers.dog_detail); 

/* GET home page. */
router.get('/', dog_controlers.dog_view_all_Page ); 
/* GET detail dog page */ 
router.get('/detail', dog_controlers.dog_view_one_Page);
/* GET create costume page */ 
router.get('/create',secured, dog_controlers.dog_create_Page); 
/* GET create update page */ 
router.get('/update',secured, dog_controlers.dog_update_Page);
/* GET delete dog page */ 
router.get('/delete',secured, dog_controlers.dog_delete_Page);  
/* GET update dog page */ 
router.get('/update',secured, dog_controlers.dog_update_Page);
  

module.exports = router;
