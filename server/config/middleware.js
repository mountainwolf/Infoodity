var morgan = require('morgan'),
    bodyParser = require('body-parser'),
    helpers = require('./helpers');

module.exports = function(app, express) {

  var apiRouter = express.Router();

  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  console.log(__dirname);
  app.use(express.static(__dirname + '/../../client' ));


  app.use('/api', apiRouter);
  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);


  require('../api/apiRoutes.js')(apiRouter);

}