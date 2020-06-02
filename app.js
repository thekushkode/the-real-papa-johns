const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const pgPromise = require('pg');
const sequelize = require('sequelize');
const session = require('express-session');
const bcrypt = require('bcrypt');
const logger = require('morgan');
const PORT = process.env.PORT || 3000;
const http = require('http');
const SequelizeStore =
    require('connect-session-sequelize')(session.Store);
const db = require('./models');



app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
const store = new SequelizeStore({ db: db.sequelize })
app.use(session({
    secret: 'supersecret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: true,
        maxAge: 15811200000,
    },
    store: store,
}));
store.sync();
// db.Appetizers.sync();

app.get('/', (req, res) => {
    res.render('index.ejs');
});


app.get('/appetizers', (req, res) => {
    res.render('appetizers.ejs');
});

app.get('/desserts', (req, res) => {
    res.render('desserts.ejs');
});

app.get('/pizzas', (req, res) => {
    res.render('pizzas.ejs');
});

app.post('/pizzas', (req, res) => {
    if (req.session.pizza) {
        req.session.pizza.push(req.body);
    } else {
        req.session.pizza = [req.body];
    }
    res.redirect('/pizza');
});

app.get('/login', (req, res) => {
    res.render('login_logout.ejs');
});

app.post('/signup', (req, res) => {
    db.Users.create({
        name: req.body.name,
        phone: req.body.phone
    }).then(user => {
        console.log(user);
    });
    // console.log(req.body);
    // res.send('signup');
});



app.listen(PORT, () => console.log(`Listening on: http://localhost:${PORT}`));
