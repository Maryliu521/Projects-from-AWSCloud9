var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");
var postSchema = new mongoose.Schema({
    title:String,
    Content: String
})
var Post = mongoose.model("Post",postSchema);

var userSchema = new mongoose.Schema({
    name: String,
    email: String
});
var User = mongoose.model("User", userSchema);

var newUser = new User({
    name:"Bob",
    email:"bob@gmail.com"
});
newUser.save(function(err,user){
    if(err){
        console.log("err");
    }else{
        console.log(user);
    }
})