let express = require("express"),
  ejs = require("ejs"),
  bodyParser = require("body-parser");

let app = express();
let language = "english";

app.set("view engine", "ejs");

express.static(__dirname);
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
  res.locals.currentRoute = req.path;
  next();
});

app.get("/", function(req, res) {
  res.render(`${language}/index`);
});

app.post("/", function(req, res) {
  language = req.body.language;
  res.redirect("/");
});

app.get("/crwn-clothing", function(req, res) {
  res.render(`${language}/projects/crwn-clothing`);
});

app.get("/yelpcamp", function(req, res) {
  res.render(`${language}/projects/yelpcamp`);
});

app.get("/omnifood", function(req, res) {
  res.render(`${language}/projects/omnifood`);
});

app.get("/weatherapp", function(req, res) {
  res.render(`${language}/projects/weatherapp`);
});

app.get("/colorgame", function(req, res) {
  res.render(`${language}/projects/colorgame`);
});

app.get("/todolist", function(req, res) {
  res.render(`${language}/projects/todolist`);
});

app.get("/fitnessapp", function(req, res) {
  res.render(`${language}/projects/fitnessapp`);
});

app.post("/:project", function(req, res) {
  language = req.body.language;
  res.redirect(`${req.params.project}`);
});

let port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("server started!");
});
