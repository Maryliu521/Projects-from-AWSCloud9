var mongoose = require("mongoose");
mongoose.connect("mongodb://pikuaudio.us:8085/rest/api/latest/result/TP1-PLAN1.json");

var planSchema = new mongoose.Schema({
    name: String,
    buildStartTime: Date,
    buildState: String
})
var Plan = mongoose.model("Plan",planSchema);
Plan.find({},function(err,plans){
    if(err){
        console.log("Error " +err)
    }
    else{
        console.log("All plans: " + plans)
    }
})