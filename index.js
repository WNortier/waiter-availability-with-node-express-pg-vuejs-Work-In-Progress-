//Express
const express = require('express');
const app = express();
//Bodyparser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())
//Vue
//Flashmessaging
const flash = require('express-flash');
const session = require('express-session');
app.use(flash());
app.use(session({
  secret: "<add a secret string here>",
  resave: false,
  saveUninitialized: true
}));
//Handlebars
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
//Styling
app.use(express.static('public'))
//Postgresql
const pg = require("pg");
const connectionString = process.env.DATABASE_URL || 'postgresql://warwick:pg123@localhost:5432/waiteravailability';

let useSSL = false;
let local = process.env.LOCAL || false;
if (process.env.DATABASE_URL && !local) {
  useSSL = true;
}
const Pool = pg.Pool;
const pool = new Pool({
  connectionString,
  ssl: useSSL
});

//Factories
const WaiterAvailabilityService = require('./services/waiter-availability-service')
const WaiterAvailabilityRoutes = require('./routes/waiter-availability-routes')
const waiterAvailabilityService = WaiterAvailabilityService(pool)
const waiterAvailabilityRoutes = WaiterAvailabilityRoutes(waiterAvailabilityService)

//Routes
//app.get("/", waiterAvailabilityRoutes.sendRoute);
app.get('/', waiterAvailabilityRoutes.home);
app.post('/waiterOrManagerView', waiterAvailabilityRoutes.waiterOrManagerView);
app.post('/getWorkdays', waiterAvailabilityRoutes.getWorkdays)

let PORT = process.env.PORT || 4007;

app.listen(PORT, function () {
  console.log('App starting on port', PORT);
});