const mongoose = require("mongoose") 
const dogSchema = mongoose.Schema({ 
 dog_name: {
    type: String,
    required:true,
    minLength:2,
    maxLength:25
 },
 dog_breed: String, 
 dog_cost: {
    type: Number,
    required:true,
    min:5,
    max:10000
 },
 dog_color: String 
}) 
 
module.exports = mongoose.model("Dog", 
dogSchema)