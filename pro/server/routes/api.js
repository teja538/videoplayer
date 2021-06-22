const express=require('express');
const router=express.Router();

var assert=require('assert');

//connecting mongodb with server using api
const mongoose=require('mongodb').MongoClient;
var dbo
const url="mongodb://localhost:27017"

var murl=mongoose.connect(url)

mongoose.Promise=global.Promise;
mongoose.connect(url,function(err,db)
{
    if(err){
        console.error("error!"+err);
    }
    dbo=db.db("mydb");
});

var res1
router.get('/showvideos',function(req,res)
{
    console.log('get req for all videos');
    dbo.collection("videonew").find({}).toArray(function(err,result)
    {
        res1=result
    });
    res.send(res1)
});

//var res2
router.post('/showvideo',function(req,res)
   {
    //    var newvideo=newvideo();
    //    newvideo.title=req.body.title;
    //    newvideo.url=req.body.url;
    //    newvideo.description=req.body.description;
    //    newvideo.save(function(err,insertedvideo){
    //        if(err){
    //            console.log("error saving video");
    //        }else{
    //            res.json(insertedvideo)
    //        }
    //    });
    murl.then(function(db){

        dbo.collection('videonew').insertOne(req.body);

    });
    res.send('json.stringify(req.body)');

    });
    // mongoose.connect(url,function(err,db){
    // assert.equal(null,err);
    // dbo=db.db("mydb");

    // dbo.collection('videonew').insertOne(resnewvideo,function(err,db){
    // assert.equal(null,error);
    // console.log('adding new video');
    // db.close();
    // });

    // });   
    // dbo.collection("videonew").find({}).toArray(function(err,result)
    // {
    //     res2=result
    //  });
    // res.send(res2)
// });
//

router.get('/',function(req,res){
    res.send('i am in api.js default');
});

router.get('/api',function(req,res){
    res.send('api works');
});

router.get('/jgd',function(req,res){
    res.send('jai guru dev works');
});

module.exports=router;
