const bodyParser = require('body-parser');
const express = require('express');
const ctrl = require('./controller');
const massive = require('massive');
require('dotenv').config();
const app = express();
const port = 3005;

app.use(bodyParser.json())


massive(process.env.CONNECTION).then((dbVar)=>{
    app.set('db',dbVar);
    
})

app.get('/api/inventory',(req, res, next) =>{
    res.status(200).send('WORKING AW YEAH')
})

app.get('/', ()=>{
    console.log("hello world");
})

app.listen(port, ()=>console.log(`You are docked at port ${port}`));