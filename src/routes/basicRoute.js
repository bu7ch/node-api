const basicRouter = require('express').Router()

basicRouter.get('/', (req, res) => {
  res.render('home',{title: 'Mon super site!', 
  message:" il est pas trop cool mon site ?", content:"lorem ipsum"})
})



module.exports = basicRouter;