const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers')

const sequelize = require('./config/connection');

//use connect session to store our session in the sequelize database
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

// Sets the settings for the session, saves it to browser history
const sess = {
  secret: 'Super secret secret',
  cookie: { //sets the time of the cookie, expires after 5mins, automatically clears
    maxAge:300000
  },
  rolling:true, //automatic log out if left idle for 5mins
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

// uses the session
app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening on http://localhost:3001'));
})