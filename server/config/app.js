const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

require('dotenv').config();

const middlewares = require('./../middlewares/common');

const productRoute = require('./../routes/product.route');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/api/items', productRoute);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;