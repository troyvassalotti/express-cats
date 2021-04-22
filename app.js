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

app.listen(5000, () => {
    console.log('server is listening on port 5000...')
});