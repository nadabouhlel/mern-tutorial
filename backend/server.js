const express = require('express')
const dotenv = require ('dotenv').config()
const {errorHandler} = require('./middleware/errormiddleware')
const port= process.env.PORT || 5000  //allows me to acces the port in .env


const app = express ()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', require('./routes/goalRoutes'))  //it will reffer to the goalRoutes file 
//app.get('/api/goals', (req, res) => {
  // res.status(200).json({message : 'Get goals' })   // res.send('Get goals')  ; it returns json 
//})   //get request we want to listen to ; 


app.use(errorHandler)

app.listen(port, () => console.log(` Server started on port ${port}`)) 
