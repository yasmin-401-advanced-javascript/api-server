'use strict';

const express = require('express');
const app = express();
const timestamp = require('../middleware/timestamp');
const logger = require('../middleware/logger');
const notFoundHandler = require('../middleware/404');
const errorHandler = require('../middleware/500');

// body-parser to add body to the req
app.use(express.json());
//ROUTS
// middelware
app.use(timestamp);
app.use(logger);
// categories
app.get('/api/v1/categories', getData);
app.get('/api/v1/categories/:id' , getById);
app.post('/api/v1/categories' , addNew);
app.put('/api/v1/categories/:id' , update);
app.delete('/api/v1/categories/:id' , deleteById);
// product
app.get('/api/v1/products', getProducts);
app.get('/api/v1/products/:id' , getProductsById);
app.post('/api/v1/products' , addNewProducts);
app.put('/api/v1/products/:id' , updateProducts);
app.delete('/api/v1/products/:id' , deleteProductsById);

app.use('*' , notFoundHandler);
app.use(errorHandler);
//FUNCTIONS for categories
let category = [];
function getData(req, res) {
  const count = category.length;
  const result = category;

  res.status(200).json({count , result});
}

function getById(req,res){
  let data;
  let id = req.params.id;
  category.forEach(val => {
    if(val.id == id){
      data = val;
    }  });
  res.status(200).json(data);
}

function addNew(req ,res){
  let {name,display_name,description} = req.body;
  let catItem = {name,display_name,description};
  catItem.id = category.length + 1 ;
  category.push(catItem);
  res.status(200).json(catItem);
}

function update(req,res){
  let id = req.params.id;
  let {name,display_name,description} = req.body;
  let catItem = {name,display_name,description};
  category.forEach( (val,idx) => {
    if( val.id == id){
      catItem.id = id;
      category[idx] = catItem;
    }
  }); 
  res.status(200).json(catItem);
}

function deleteById(req,res){
  let id = req.params.id;
  let modifiedCategory = [];
  category.forEach(val => {
    if(val.id != id){
      modifiedCategory.push(val);
    }
    category = modifiedCategory;
  });
  res.status(200).json({});
}

//FUNCTIONS for products
let products = [];
function getProducts(req, res) {
  const count = products.length;
  const result = products;

  res.status(200).json({count , result});
}

function getProductsById(req,res){
  let data;
  let id = req.params.id;
  products.forEach(val => {
    if(val.id == id){
      data = val;
    }  });
  res.status(200).json(data);
}

function addNewProducts(req ,res){
  let {name,display_name,description} = req.body;
  let proItem = {name,display_name,description};
  proItem.id = products.length + 1 ;
  products.push(proItem);
  res.status(200).json(proItem);
}

function updateProducts(req,res){
  let id = req.params.id;
  let {name,display_name,description} = req.body;
  let proItem = {name,display_name,description};
  products.forEach( (val,idx) => {
    if( val.id == id){
      proItem.id = id;
      products[idx] = proItem;
    }
  }); 
  res.status(200).json(proItem);
}

function deleteProductsById(req,res){
  let id = req.params.id;
  let modifiedProducts = [];
  products.forEach(val => {
    if(val.id != id){
      modifiedProducts.push(val);
    }
    products = modifiedProducts;
  });
  res.status(200).json({});
}

module.exports = {
  server: app,
  start: (port) => {
    const PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () =>{
      console.log(`Listening on ${PORT}`);
    });
  },
};

