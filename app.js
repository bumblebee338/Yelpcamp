var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended : true }));
app.set("view engine","ejs");

var campgrounds = [
    {name:" Camp Exotica", image:"https://www.holidify.com/images/cmsuploads/compressed/tent-1208201_1920_20190212172038.jpg"},
    {name:"West Ladakh Camp", image:"https://www.holidify.com/images/cmsuploads/compressed/24366507140_38f32204a4_z_20190212174301.jpg"},
    {name:"Taj Banjar Tola", image:"https://www.holidify.com/images/cmsuploads/compressed/banjar-tola_20190213130539.jpg"},
    {name:"Camp Exotica", image:"https://www.holidify.com/images/cmsuploads/compressed/tent-1208201_1920_20190212172038.jpg"},
    {name:"West Ladakh Camp", image:"https://www.holidify.com/images/cmsuploads/compressed/24366507140_38f32204a4_z_20190212174301.jpg"},
    {name:"Taj Banjar Tola", image:"https://www.holidify.com/images/cmsuploads/compressed/banjar-tola_20190213130539.jpg"},
    {name:"Camp Exotica", image:"https://www.holidify.com/images/cmsuploads/compressed/tent-1208201_1920_20190212172038.jpg"},
    {name:"West Ladakh Camp", image:"https://www.holidify.com/images/cmsuploads/compressed/24366507140_38f32204a4_z_20190212174301.jpg"},
    {name:"Taj Banjar Tola", image:"https://www.holidify.com/images/cmsuploads/compressed/banjar-tola_20190213130539.jpg"}
]

app.get("/", function(req, res){
    res.render("home");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var newCamp = {name : name , image: image};
    campgrounds.push(newCamp);
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
    res.render("new");
})

app.listen(3000, function(){
    console.log("server started at http://localhost:3000");
});