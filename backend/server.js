
const express = require('express')
// const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const personRoutes = require('./routes/personRoutes')

const app = express();
const port = 3000;

app.use(bodyParser.json())


app.use('/person',personRoutes);



app.listen(port, function(){
    console.log(`Port running on ${port}`);
})








