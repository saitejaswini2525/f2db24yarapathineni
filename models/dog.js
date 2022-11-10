const mongoose = require("mongoose") 
const dogSchema = mongoose.Schema({ 
 dog_name: String, 
 dog_breed: String, 
 dog_cost: Number,
 dog_color: String 
}) 
 
module.exports = mongoose.model("Dog", 
dogSchema)