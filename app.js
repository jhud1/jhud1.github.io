var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", function(req,res){
    res.render("home.ejs");
})

app.get("/about", function(req,res){
    res.render("about.ejs");
})

app.get("/media", function(req,res){
    res.render("media.ejs");
})

app.get("/contact", function(req,res){
    res.render("contact.ejs");
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server is on")
});