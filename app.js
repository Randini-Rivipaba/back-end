const express = require('express');
const mongoose =require('mongoose');
const app = express();
const port = 8080;
const itemRoutes = require('./routes/itemRoutes');

const bodyParser= require('body-parser');
const cors= require('cors'); 
app.use(bodyParser.json());
app.use(cors());


const mongoURL='mongodb+srv://randiniweerakoon33:F7KOMNdsdCyakS2v@randini.yqzkdee.mongodb.net/shopping_list?retryWrites=true&w=majority'

mongoose.connect(mongoURL);
  const db =mongoose.connection;
  db.on('error',console.error.bind(console,"MongoDb connection error"));
  db.once('open',()=>{console.log('connected to MongoDB')

  })

  app.use('/item',itemRoutes);
// Define a route for GET requests to the root URL
app.get('/hello', (req, res) => {
  res.send('Hello World from Express!');
});

app.get('/helloworld', (req, res) => {
  res.send('Hello world abc!');
});

app.post('/abcd', (req, res) => {
  res.send('Hello!');
});

app.get('/koththu/:type/:size', (req, res) => {
  res.send(`koththu type ${req.params.type} size ${req.params.size}`);
});

app.get('/koththu', (req, res) => { 
  const {type,size}=req.query
  res.send(`koththu ${type} ${size}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});