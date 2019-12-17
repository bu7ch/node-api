const mongoose = require('mongoose')
const Schema = mongoose.Schema

const foodtruckSchema = new Schema({
  name: { type: String , required: true },
  foodtype: {type: String , required: true }
})
const Foodtruck = mongoose.model('Foodtruck', foodtruckSchema);

module.exports = Foodtruck;