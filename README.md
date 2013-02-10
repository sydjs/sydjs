Welcome!
======

SydJS has a site! And [this is it][sydjs]. Feel free to hack.

The site is a simple [Node.js][node] app running on [Heroku][heroku] using [Express][express] (and [Hogan.js][hogan] for templating).

If you don't have membership access to the [sydjs][sydjs-org] organisation on GitHub yet (or the Heroku app), contact [Lachlan Hardy][lachlanhardy] or [Craig Sharkie][twalve] to get the hook up.

Otherwise, just fork it and send us a pull request!

Setting up a development environment
=======

Once you've cloned (or forked) the repository, run `npm install` from the root of the repo to install the required Node modules.

If you're working with a direct clone of the `sydjs/sydjs` repo, and you've also been given access to the Heroku app, add the Heroku app push URL to your clone:

    git remote add heroku git@heroku.com:sydjs-cedar.git

Running the server
=======

Start the server with `node server.js`, then visit `localhost:8001` on your local dev box.

Alternatively, if you're making changes to the server code, it's easier to use [Nodemon][nodemon] to automatically reload the server when you save the file. Run `npm install -g nodemon` to install it, then `nodemon` to start the server.

Branching
=========

Please use feature branches if you're doing any new feature work. Bug fixes and simple data updates (like presenters and links) can be done on the master branch.

Deploying
=========

Deployments to the live site should only be done from the master branch of the `sydjs/sydjs` repo.

Once your changes have been committed to master (either directly or via merging), deployment is as simple as `git push heroku master` - just make sure you push up to Github as well.


[sydjs]: http://sydjs.com
[sydjs-org]: http://github.com/sydjs/
[node]: http://nodejs.org
[express]: http://expressjs.com/
[heroku]: http://heroku.com
[lachlanhardy]: http://github.com/lachlanhardy/
[twalve]: http://github.com/twalve/
[jade]: http://jade-lang.com/
[hogan]: http://twitter.github.com/hogan.js/
[nodemon]: https://github.com/remy/nodemon

