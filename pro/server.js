const express=require('express');
const bodyParser=require('body-parser');
const path=require('path');//alternative for string concatination while cjoining paths

const api=require('./server/routes/api');

const port=3000;

const app=express(); //app - instance of express

app.use(express.static(path.join(__dirname,'dist/pro')));//joining current directory to dist folder

app.use(bodyParser.urlencoded({extended:true}));//parses the text as url encoded data
app.use(bodyParser.json());

app.use('/api',api);//for any other route other than /api we hv to render it frm index.html page in dist folder

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/pro/index.html'));
    //when we browse localhost:3000 express knows it has to serve index.html
    
});

app.listen(port,function()
{
    console.log("server running on localhost:"+port);
});
