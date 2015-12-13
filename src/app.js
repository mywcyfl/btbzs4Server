var express         = require('express');
var path            = require('path');
var favicon         = require('serve-favicon');
var logger          = require('morgan');
var bodyParser      = require('body-parser');
var mysql           = require('./lib/dao/mysql/mysql');
var cookieParser    = require('cookie-parser');

var MarketService   = require('./services/marketService')
var routes          = require('./routes/index');
var newRoute        = require('./routes/new');
var marketRoute     = require('./routes/market');


var app = express();

/*
 * view engine setup
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/*
 * other express setup
 */
// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*
 * route config(route match sequencially)
 */
app.use('/', routes);
app.use('/new', newRoute);
app.use('/market', marketRoute);

/*
 * route not found(error route must in the buttom)
 * when route not found, then it will catch by this block
 */
app.use(function(req, res, next) {
    // catch 404 and forward to error handler
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/*
 * error handlers
 */
if (app.get('env') === 'development') {
    // development error handler will print stacktrace
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

app.use(function(err, req, res, next) {
    // production error handler no stacktraces leaked to user
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

/*
 * Now init other components
 */
// [step 1] mysql init
mysql.init();

// [step 2] market service start
MarketService.start();


/*
 * Done
 */
module.exports = app;
