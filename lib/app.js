// Example Express App on Heroku - Copyright Corey Donohoe <atmos@atmos.org> (MIT Licensed)
configure(function() {
  set("root", __dirname)

  use(Logger)
  use(Static, { path: require("path").join(__dirname, "..", "public") })
  enable("show exceptions")
})

get("/", function() {
  this.render("index.html.haml", {
    locals: {
      remoteIp: this.connection.remoteAddress
    }
  })
})

run(parseInt(process.env.PORT || 8000), null)
