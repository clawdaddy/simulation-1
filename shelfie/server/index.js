const bodyParser = require('body-parser');
const express = require('express');
const ctrl = require('./controller');
const massive = require('massive');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = 3005;

app.use(bodyParser.json())
app.use(cors());

massive(process.env.CONNECTION).then( (db) =>{
    app.set('db',db);
    
})

app.get('/api/inventory',ctrl.getInventory)
app.post('/api/product', ctrl.createProduct)


app.listen(port, ()=>console.log(`You are docked at port ${port}`));