var express=require('express')
var app=express();
var bodi=require('body-parser');
app.use('/assets',express.static('assets'))



app.get('/',(req,res)=>{
res.render("home.ejs");
});




app.listen(3000);