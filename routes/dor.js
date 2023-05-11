const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

require('/model');
const Categoria = mongoose.model('cadastro');

router.get('/',(req,res)=>{
  
});




module.exports = router;