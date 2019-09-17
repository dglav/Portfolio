let express = require('express'),
    ejs     = require('ejs'),
    bodyParser = require('body-parser');
    
let app = express();
let language = 'english';

app.set('view engine', 'ejs');

express.static(__dirname);
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/", function(req, res){
    if (language === 'english') {
        res.render("index");
    } else if (language == 'japanese') {
        res.render("index_jp");
    }
});

app.post("/", function(req, res){
    language = req.body.language;
    res.redirect("/");
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