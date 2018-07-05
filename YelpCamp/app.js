var express = require("express");
var app = express();
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/camp_app");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static("public"));

var campgroundsSchema = mongoose.Schema({
	name:String,
	image:String,
	description: String
});
var campgrounds = mongoose.model("Campground",campgroundsSchema);
// campgrounds.create({
// 	name:"Peace Shore",
// 	image:"https://pixabay.com/get/ea36b70928f21c22d2524518b7444795ea76e5d004b014439cf3c47da5efb0_340.jpg",
// 	description:"This is a peaceful camp place, if you are the one who is seeking for peace, you should try here."
//       },function(err,campground){
// 		if(err){
// 			console.log("Error")
// 		}else{
// 			console.log(campground)
// 		}
// 		})

app.get("/",function(req,res){
	res.render("landingPage");
})

app.get("/campgrounds",function(req,res){
	campgrounds.find({},function(err,campgrounds){
		if(err){
			console.log(err);
		}else{
				res.render("campgrounds",{campgrounds:campgrounds});
		}
	})
	})
app.post("/campgrounds",function(req,res){
	var name = req.body.name;
	var image = req.body.image;
	var description = req.body.description;
	var newCampground = {name:name , image:image, description:description}
	campgrounds.create({name:name,image:image,description:description},function(err,campground){
		if(err){
			console.log(err)
		}else{
			res.redirect("/campgrounds");
		}
	});
	
})
app.get("/campgrounds/new",function(req,res){
	res.render("new");
})
app.get("/campgrounds/:id",function(req,res){
	campgrounds.findById(req.params.id, function(err, foundCampground){
		if(err){
			console.log(err);
		}else{
			res.render("show",{campgrounds:foundCampground})
		}
	})
})
app.listen(process.env.PORT,process.env.IP,function(){
	console.log("Launching Yelp!!!")
})