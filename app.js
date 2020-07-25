require('dotenv').config();

const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// 
var search = require('./search.js');
app.use('/', search.router);

app.listen(PORT, () => console.log(`Server listening at ${PORT}`));