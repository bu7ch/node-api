const express = require('express')
const Foodtruck = require('../models/foodtruck')

const ftRouter = express.Router()


ftRouter.get('/all', (req, res) => {
  Foodtruck.find({}, (err, foodtrucks) => {
    if (err) console.error(err)
    res.render('foodtruck', {foodtrucks: foodtrucks})
  })
})
ftRouter.get('/add', (req,res) => {
  res.render('new')
})
ftRouter.post('/add', (req, res) => {
  const newFoodtruck = new Foodtruck(req.body)
  newFoodtruck.save((err, foodtruck) => {
    if (err) console.error(err)
    res.json(foodtruck)
  })
})
ftRouter.route('/:id')
  .get((req,res) => {
    Foodtruck.findById(req.params.id, (err, foodtruck) => {
      if (err) console.error(err)
      res.json(foodtruck)
    })
  })
  .put((req, res)=>{
    Foodtruck.findById({_id: req.params.id}, (err, foodtruck)=> {
      if (err) console.error(err)
      Object.assign(foodtruck, req.body).save((err, foodtruck) => {
        if (err) console.error(err)
        res.json({ message:"foodtruck MaJ", foodtruck})
      })
    })
  })
  .delete((req, res)=> {
    Foodtruck.remove({_id: req.params.id}, (err, result) => {
      res.json({ message: 'foodtruck successfully deleted!!', result})
    })
  })

module.exports = ftRouter;