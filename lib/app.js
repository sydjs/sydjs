configure(function() {
  set("root", __dirname)

  use(Logger)
  use(Static, { path: require("path").join(__dirname, "..", "public") })
  enable("show exceptions")
  set('view engine', 'jade');
})

get("/", function() {
  this.render('index.html.jade');
})


