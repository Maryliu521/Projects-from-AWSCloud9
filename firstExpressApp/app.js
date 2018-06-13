var express = require("express");
var app = express();
app.get("/",function(req,res){
    res.send("Hello There!")
});
app.get("/bye",function(req,res){
    res.send("Good Bye!")
});
app.get("/dog",function(req,res){
    //console.log("some made request")
    res.send("I don't have dogs!")
});
app.get("/r/:subredditName",function(req,res){
    var subName = req.params.subredditName;
    res.send("Welcome to "+ subName.toUpperCase()+" subreddit!")
});
app.get("/r/:subredditName/comments/:id/:title/",function(req,res){
   var subName =req.params.subredditName;
   var title = req.params.title;
    res.send("Welcome to " + subName +" comments, title is "+title +" !")
    });
    
app.get("*",function(req,res){
    res.send("You are a star!")
});

app.listen(process.env.PORT, process.env.IP,function(){
    console.log("Server reached");
})