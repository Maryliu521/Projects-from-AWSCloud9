var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name:String,
    age:Number,
    color: String
});
var Cat = mongoose.model("Cat", catSchema);
// Cat.create({
//     name:"lingling",
//     age:5,
//     color: "white"
// }, function(err,cat){
//     if(err){
//         console.log("Something went wrong!!!")
//     }else{
//         console.log("You just Add a cat...")
//         console.log(cat);
//     }
// })
Cat.find({},function(err,cats){
    if(err){
        console.log("Error")
    }else{
        console.log("All the cats: "+ cats)
    }
})