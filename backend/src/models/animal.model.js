const mongoose = require('mongoose')

const animalSchema = new mongoose.Schema({
            name:String,
            type:String,
            age:Number,
            milkProduction:Number
},{
    timestamps:true
})

module.exports = mongoose.model('animals', animalSchema)


