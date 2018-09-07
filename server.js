const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended:true }));//making the application only parse UTF-8 encoding
app.use(bodyParser.json());//making the application only parse json


app.listen(3001, ()=>{console.log("hi there")});