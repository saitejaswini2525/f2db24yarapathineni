const dog = require('../models/dog');
var Dog = require('../models/dog'); 
 
// List of all Costumes 
exports.dog_list = async function(req, res) { 
    try{ 
        theDog = await Dog.find(); 
        res.send(theDog); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// for a specific Costume. 
exports.dog_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Dog detail: ' + req.params.id); 
}; 
 
// Handle Costume create on POST. 
exports.dog_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Dog(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"dog_type":"puppy","dog_breed":"hound" "dog_cost":6000, "size":"large"} 
    document.dog_name = req.body.dog_name; 
    document.dog_breed = req.body.dog_breed; 
    document.dog_cost = req.body.dog_cost;
    document.dog_color = req.body.dog_color; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle Costume delete form on DELETE. 
exports.dog_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: DOg delete DELETE ' + req.params.id); 
}; 
 
// Handle Costume update form on PUT. 
exports.dog_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: DOg update PUT' + req.params.id); 
}; 
// VIEWS 
// Handle a show all view 
exports.dog_view_all_Page = async function(req, res) { 
    try{ 
        theDog = await Dog.find(); 
        res.render('dog', { title: 'Dog Search Results', results: theDog }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// for a specific Costume. 
exports.dog_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await dog.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 

// Handle Costume update form on PUT. 
exports.dog_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await dog.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.dog_name)  
               toUpdate.dog_name = req.body.dog_name; 
        if(req.body.dog_breed) toUpdate.cost = req.body.dog_breed; 
        if(req.body.dog_cost) toUpdate.dog_cost = req.body.dog_cost; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 