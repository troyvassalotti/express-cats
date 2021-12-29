const express = require('express');
const app = express();
const routes = require('./routes/site');
const compression = require('compression');

// set pug engine
app.set('view engine', 'pug');

// set compression
app.use(compression());

// set static assets
app.use(express.static('./public'));

app.use('/', routes);

app.listen(process.env.PORT || 3000, () => {
    console.log('Listening on port ' + (process.env.PORT || 3000));
});