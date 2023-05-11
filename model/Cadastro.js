
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Definindo os campos
const Cadastro = new Schema ({
    nome:{
       type: String
    },
    email:{
        type: String
    },
    senha:{
        type: String
    },
    date:{

        type: Date,
        default: Date.now
    }
})


mongoose.model('Cadastro', Cadastro);