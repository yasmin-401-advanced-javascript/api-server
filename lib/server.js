'use strict';

const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
// const timestamp = require('../middleware/timestamp');
// const logger = require('../middleware/logger');
const notFoundHandler = require('../middleware/404');
const errorHandler = require('../middleware/500');
const routesForCategory = require('./routes/categories.js');
const routesForProducts = require('./routes/product.js');


// body-parser to add body to the req
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

//ROUTS

// middelware
// app.use(timestamp);
// app.use(logger);

app.use('/api/v1' , routesForCategory);
app.use('/api/v1' , routesForProducts);
// errors for all routs
app.use('*' , notFoundHandler);
app.use(errorHandler);



module.exports = {
  server: app,
  start: (port) => {
    const PORT = port || process.env.PORT || 4000;
    app.listen(PORT, () =>{
      console.log(`Listening on ${PORT}`);
    });
  },
};

