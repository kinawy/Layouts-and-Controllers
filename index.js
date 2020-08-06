const express = require('express');
const app = express();
const ejsLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs')
app.use(ejsLayouts)

app.get('/', (req, res) => {
    res.render('home');
  });

app.use('/faves', require('./controllers/faves'));

app.use('/hates', require('./controllers/hates'));




app.listen(8000);