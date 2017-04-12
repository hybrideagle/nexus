'use strict';

const path = require('path');
const serveStatic = require('feathers').static;
const favicon = require('serve-favicon');
const compress = require('compression');
const cors = require('cors');
const feathers = require('feathers');
const rest = require('feathers-rest');
const bodyParser = require('body-parser');
const configuration = require('feathers-configuration');
const hooks = require('feathers-hooks');
const middleware = require('./middleware');
const services = require('./services');

const app = feathers();

app.configure(configuration(path.join(__dirname, '..')));
app.configure(rest()).use(bodyParser.json()).use(bodyParser.urlencoded({ extended: true }));
app.use(compress())
  .options('*', cors())
  .use(cors())
  .use(favicon( path.join(app.get('public'), 'favicon.ico') ))
  .use('/', serveStatic( app.get('public') ))
  .configure(hooks())
  .configure(services)
  .configure(middleware);

app.listen(3010);

module.exports = app;
