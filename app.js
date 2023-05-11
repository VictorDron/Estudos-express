//Express
const express = require('express');
const app = express();
//HANDLEBARS
const handlebars = require('express-handlebars');
//BODY-PARSER
const bodyParser = require('body-parser');
//MONGGOSE
const mongoose = require('mongoose');
//PATH
const path = require('path');
//ROUTES
const dor = require('./routes/dor');

//Setups

 //HandleBars
    app.engine('handlebars', handlebars.engine({defaultLayout:'main'}));
    app.set('view engine','handlebars'); 
 //Body Paser
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());
//Public
    app.use(express.static(path.join(__dirname,'public')));


//Mongoose 
    mongoose.Promise = global.Promise;
    mongoose.connect(('mongodb://localhost/thevictor')).then(()=>{
    console.log('MONGO CONECTADO');
    }).catch(()=>{
    console.log('MONGO NÃO CONECTADO');
    });




app.use('/dor', dor);

//BUILD FOR FIRST ROUTE
app.get('/', (req,res)=>{
    res.render('index');
});



//SET PORT AND SERVER
const PORT = 8081;
app.listen(PORT,()=>{
   console.log('SERVER ON');
});