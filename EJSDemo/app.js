var express = require('express');
var app = express();

app.use(express.static("public"));
app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("home")
})
app.get('/love/:name',function(req,res){
    var name = req.params.name;
    res.render("love",{nameVar:name});
})
app.get('/posts',function(req,res){
    var posts =[
        {title:"Holly", author:"Mary"},
         {title:"Sea", author:"Sarah"},
          {title:"Dream", author:"Tim"}
        ]
        res.render("post",{posts:posts})
})
app.listen(process.env.PORT, process.env.IP,function(){
    console.log("Server Listened!")
})