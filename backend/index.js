const express = require('express');
const router = express.Router();
const app = express();
const port = 5000;
const cors = require("cors");
const fs = require("fs");
const fsp = require("fs").promises;
const {json} =require("express");

  app.use(cors());
  app.use(express.json())
  
fs.readFile("data/chat.json", (err, data) => {
  cats = JSON.parse(data);
});

app.get("/api/chat", cors(), (req, res) => {
  res.json(cats);
});

let cats;

app.all('*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://localhost:3000");
  next();
});

//
 router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//

app.listen(port, () => {
  console.log(`My competition app is listening at http://localhost:${port}`);
});