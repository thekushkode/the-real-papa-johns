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
const store = new SequelizeStore({ db: db.sequelize });
app.use(session({
    secret: 'supersecret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 15811200000,
    },
    store: store,
}));
store.sync();


app.get('/', (req, res) => {
    res.render('index.ejs');
});


app.get('/appetizers', (req, res) => {
    res.render('appetizers.ejs');
});

app.post('/appetizers', (req, res) => {
    console.log(req.session);
    const appetizers = req.session.appetizers || [];
    appetizers.push(req.body);
    req.session.appetizers = appetizers;
    res.redirect('/appetizers');
    console.log(req.session);
});

app.get('/desserts', (req, res) => {
    res.render('desserts.ejs');
});

app.post('/desserts', (req, res) => {
    console.log(req.session);
    const desserts = req.session.desserts || [];
    desserts.push(req.body);
    req.session.desserts = desserts;
    res.redirect('/desserts');
    console.log(req.session);
});

app.get('/pizzas', (req, res) => {
    res.render('pizzas.ejs');
});

app.post('/pizzas', (req, res) => {
    console.log(req.session);
    const pizzas = req.session.pizzas || [];
    pizzas.push(req.body);
    req.session.pizzas = pizzas;
    res.redirect('/pizzas');
    console.log(req.session);
});

app.get('/login', (req, res) => {
    res.render('login_logout.ejs');
});

app.get('/summary', (req, res) => {
    res.render('order_summary.ejs', {
        pizzas: req.session.pizzas,
        desserts: req.session.desserts,
        appetizers: req.session.appetizers,
    });
});

app.post('/signup', (req, res) => {
    db.Users.create({
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        phone: req.body.phone,
        ccNum: req.body.ccNum,
        ccExp: req.body.ccExp,
        ccCode: req.body.ccCode,
        password: req.body.password
    }).then(user => {
        console.log(user);
    });
});

app.post('/summary', (req, res) => {
    console.log(req.session);
    res.send(req.session);
})

app.listen(PORT, () => console.log(`Listening on: http://localhost:${PORT}`));
