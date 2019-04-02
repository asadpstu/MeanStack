const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Videos = require('../model/video');


const database = "mongodb://root:12345@cluster0-shard-00-00-ecaim.mongodb.net:27017,cluster0-shard-00-01-ecaim.mongodb.net:27017,cluster0-shard-00-02-ecaim.mongodb.net:27017/Laravel-vue-song?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";

//It is not necessary to give
mongoose.Promise = global.Promise;
mongoose.connect(database, {
    useMongoClient: true
    },
    function(err){
    if(err){
        console.error("Error! "+err);
    }
    else
    {
        console.log("Db Connected");
    }
});

router.get('/',function(req,res){
    res.send("Api Works");
});

//Get reruest for all videos
router.get('/video',function(req,res){
    console.log("All videos");
    Videos.find({})
    .exec(function(err,Videos){
        if(err){
            console.log(err);
        }
        else
        {
            res.json(Videos);
        }
    });

});

//post data
router.post('/video',function(req,res){
    console.log("Post data");
    var newData = new Videos();
    newData.title = req.body.title;
    newData.url = req.body.url;
    newData.description = req.body.description;
    newData.save(function(err,insertData){
        if(err)
        {
            console.log("Not inserted");
        }
        else
        {
            res.json(insertData);
        }
    })

});

// Search Data
router.get('/video/:id',function(req,res){
    //console.log("All videos");
    var objectid = req.params.id;
    //console.log(objectid);
    Videos.find({'_id':objectid})
    .exec(function(err,Videos){
        if(err){
            console.log(err);
        }
        else
        {
            res.json(Videos);
        }
    });

});


// Search Data and Update
router.put('/video/:id',function(req,res){
    var objectid = req.params.id;
    // Find and update has four parameter inside the function
    Videos.findByIdAndUpdate(
        objectid,
        {
            $set : { title : req.body.title, url : req.body.url, description : req.body.description}
        },
        {
            new : true
        },
        function(err,updateValue){
            if(err){
                console.log(err);
            }
            else
            {
                res.json(updateValue);
            }

        }
    );

});

// Delete Document
//Get reruest for all videos
router.delete('/video/:id',function(req,res){
    var objectid = req.params.id;
    // Find and update has four parameter inside the function
    Videos.findByIdAndRemove(objectid, function(err,DeletedData){
        if(err)
        {
          console.log(err);
        }
        else
        {
           res.json(DeletedData);
        }
    });

});

module.exports = router;