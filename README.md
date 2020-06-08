**The Real Bubba Johns**\
Taking over the delivery pizza market share one day at a time!

Pizza Delivery Website featuring 5 databases, MDB design on front end, and node.js/ express.js backend. This site is still under construction.

**Contributors:**\
Robert Kushner IV\
Tracey Sykes Jr

**Featuring:**
- Responsive Design
- Sequelize
- Sessions
- DataBases
- BCRYPT
- EJS
- Body & Cookie Parsers
- and more!

![The Real Papa Johns](papajohnsREADME.gif)

# Code Sample

```javascript
//sign-up post route
app.post('/signup', (req, res) => {
    const { name, email, address, phone, ccNum, ccCode, password } = req.body;
    bcrypt.hash(password, 10, (err, hash) => {
        db.Users.create({
            name: req.body.name,
            email: req.body.email,
            address: req.body.address,
            phone: req.body.phone,
            ccNum: req.body.ccNum,
            ccExp: req.body.ccExp,
            ccCode: req.body.ccCode,
            password: hash,
        })
            .then((result) => {
                res.redirect('/');
            });
    });
});
```

