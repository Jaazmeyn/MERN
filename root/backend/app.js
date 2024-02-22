const express = require('express');
const bodyParser = require('body-parser');
const mongoStore = require('./mongo');

const app = express();

app.use(bodyParser.json());

app.post('/products', mongoStore.createProduct);

app.get('/products');

app.listen(3000);