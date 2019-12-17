const express = require('express')
const app = express()
const volleyball = require('volleyball')
const path = require('path')
require('dotenv').config()
const viewpath = path.join(__dirname, 'views')
const mongoose = require('mongoose')
// cfg mongoose
mongoose.connect('mongodb://localhost/my_db', {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
console.log(`[MongoDB is running here 🎯 ]`);
});


const router = require('./routes/index')

const {DB_port} = process.env
app.use(volleyball)
app.set('view engine', 'pug')
app.set('views',viewpath )
app.use(express.static('public'))



app.use('/', router)

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use('/api/v1',router)
app.listen(DB_port, ()=>{
  console.log([`Mon app tourbe bien ----> sur : ${DB_port}`]);
  
})