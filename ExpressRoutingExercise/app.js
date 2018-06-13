var express = require('express');
var app = express();
var math = require('mathjs');
app.get("/",function(req,res){
    res.send("Hi there, welcome to my assignment!")
});
app.get("/speak/:subredditName/:sound",function(req,res){
    var subName = req.params.subredditName;
    var sound = req.params.sound
    res.send("The " + subName +" says " + "'" +sound +"'")
});
app.get("/repeat/:subredditName/:times",function(req,res){
    var subName = req.params.subredditName;
    var times = req.params.times;
    var result = "";
       for(var i =0; i <times; i++){
            result += " "+subName;
       }
       res.send(result);
        });

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Server has started!")
})