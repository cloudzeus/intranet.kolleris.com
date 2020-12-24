var createError = require('http-errors');
var express = require('express');
var path = require('path');
const http = require('http');
const cors = require('cors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var auth = require('./routes/auth');
var products = require('./routes/products');
const db = require('./startup/db');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Routes
// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'build/')));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/users/auth', auth);
app.use('/products', products);
// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

var server = http.createServer(app);

if (process.env.NODE_ENV == 'test') {
    const port = process.env.PORT || 3000;

    server = app.listen(port, () => {
        db();
        console.log(
            `Application running in ${process.env.NODE_ENV} mode on ${port}`
        );
    });
    // console.log("Server",server)
    module.exports = server;
} else {
    db();
    module.exports = { app, server };
}
