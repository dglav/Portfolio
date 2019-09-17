let express = require('express'),
    ejs     = require('ejs');
    
let app = express();

app.set('view engine', 'ejs');

express.static(__dirname);
app.use(express.static('public'));

app.get("/", function(req, res){
    res.render("index");
});

app.get("/yelpcamp", function(req, res){
    res.render("projects/yelpcamp");
});

app.get("/omnifood", function(req, res){
    res.render("projects/omnifood");
});

app.get("/weatherapp", function(req, res){
    res.render("projects/weatherapp");
});

app.get("/colorgame", function(req, res){
    res.render("projects/colorgame");
});

app.get("/todolist", function(req, res){
    res.render("projects/todolist");
});

app.get("/fitnessapp", function(req, res){
    res.render("projects/fitnessapp");
});

app.listen(3000, function(){
    console.log('server started!');
});