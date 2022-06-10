var express = require('express');
//const { route } = require('express/lib/application');
var router = express.Router();
var Movie = require('./Model/Movie');
//var route = require('./route');
//fetching data

router.get('/movies',async(req,res)=>{
    const iMovie = await Movie.find();
    res.send(iMovie);
})

//posting (insert) data

router.post('/movies',async(req,res)=>{
    const imovie=new Movie({
        name:req.body.name,
        rating:req.body.rating
    })

    console.log(imovie);

    await imovie.save((err,msg)=>
    {
        if(err){
            res.send(err);
        }
        else
        {
            res.send(msg);
        }
    });
})
module.exports = router;