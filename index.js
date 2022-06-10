var mongoose = require('mongoose');
var express = require('express');
var bodyparser = require('body-parser');
//const { route } = require('express/lib/application');
var route = require('./route');

mongoose.connect("mongodb+srv://JinalRajpara:jinu3011@cluster0.hf8ji.mongodb.net/Movies?retryWrites=true&w=majority").then(()=>{

    console.log("DB Connect");

    app = express();
    app.use(express.json());
    app.use(bodyparser.urlencoded({extended:false}));
    app.use('/api',route);

    
    app.listen(3000,()=>{
        console.log("Server started at 3000");
    })

}).catch((err)=>{
    console.log(err);
})

