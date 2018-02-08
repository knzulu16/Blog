"use strict";
const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const http = require('http');
const session = require("express-session");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const Models = require('./models');
const personalBlog = require('./blog');
const blogWriter = Models(process.env.MONGO_DB_URL || "mongodb://localhost/Blog");
console.log(blogWriter);
const blogPage = personalBlog(blogWriter);

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', '"Origin, X-Requested-With, Content-Type, Accept"');
  next();
})

app.use(session({
  secret: 'keyboard cat',
  cookie: {
    maxAge: 60000 * 30
  }
}));
app.use(session({
  secret: 'nzulu',
  resave: false,
  saveUninitialized: true
}))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));

// app.get("/",blogPage.index);
app.post("/api/blog", blogPage.post);
app.get("/api/blog", blogPage.getAllComments);
// app.get("/api/comment",blogPage.);




app.use(function(err, req, res, next) {
  console.error(err.stack)
  res.status(500).send(err.stack)
});
const port = process.env.PORT || 5002;
app.listen(port, function() {
  console.log('API started on port:' + port);
});
