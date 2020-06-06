'use strict';

const express = require('express');
const products = require('../models/products/products.collection.js');
const router = express.Router();

router.get('/products', getProducts);
router.get('/products/:id' , getProductsById);
router.post('/products' , addNewProducts);
router.put('/products/:id' , updateProducts);
router.delete('/products/:id' , deleteProductsById);



async function getProducts(req, res , next) {
  try{ let data = await products.get();  
    const count = data.length;
    const result = data;
    res.status(200).json({count , result});
  }catch(error){
    next(error.message);
  }
}
  
async function getProductsById(req,res,next){
  let id = req.params.id;
  try{
    let data = await products.get(id);  

    res.status(200).json(data);
  }catch(error){
    next(error.message);
  }
  
}
  
async function addNewProducts(req ,res,next){
  try{
    let data = await products.create(req.body);
    res.status(200).json(data);
  }catch(error){
    next(error.message);
  }
    
}
  
async function updateProducts(req,res,next){
  let id = req.params.id;
  try{
    let data = await products.update(id,req.body);
    res.status(200).json(data);
  }catch(error){
    next(error.message);
  }
  
}
  
async function deleteProductsById(req,res,next){
  let id = req.params.id;
  try{
    await products.delete(id);
    let data =  {
      status: 'item deleted',
    };
    res.status(200).json(data);
  }catch(error){
    next(error.message);
  }
}

module.exports = router;