'use strict';

const express = require('express');
const category = require('../models/categories/categories.collection.js');
const router = express.Router();

// categories
router.get('/categories', getData);
router.get('/categories/:id' , getById);
router.post('/categories' , addNew);
router.put('/categories/:id' , update);
router.delete('/categories/:id' , deleteById);



//FUNCTIONS for categories

async function getData(req, res , next) {
  try{ let data = await category.get();  
    const count = data.length;
    const result = data;
    res.status(200).json({count , result});
  }catch(error){
    next(error.message);
  }
}

async function getById(req,res,next){
  let id = req.params.id;
  try{
    let data = await category.get(id);  
    res.status(200).json(data);
  }catch(error){
    next(error.message);
  }

}

async function addNew(req ,res,next){
  try{
    let data = await category.create(req.body);
    res.status(200).json(data);
  }catch(error){
    next(error.message);
  }
  
}

async function update(req,res,next){
  let id = req.params.id;
  try{
    let data = await category.update(id,req.body);
    res.status(200).json(data);
  }catch(error){
    next(error.message);
  }

}

async function deleteById(req,res,next){
  let id = req.params.id;
  try{
    await category.delete(id);
    let data =  {
      status: 'item deleted',
    };
    res.status(200).json(data);
  }catch(error){
    next(error.message);
  }
}

module.exports = router;