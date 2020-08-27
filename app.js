require('dotenv').config();

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// setting up public folder
app.use(express.static(path.join(__dirname, 'public')));

// config
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// search
var search = require('./search.js');
app.use('/', search.router);

// listen
app.listen(PORT, () => console.log(`Server listening at ${PORT}`));