const express = require('express');
const path = require('path');
const app = express();

const cors = require('cors');

const bodyParser = require('body-parser');

const products = require('./routes/products');
const users = require('./routes/users');
const carts = require('./routes/carts');
const orders = require('./routes/orders');

app.use(cors());

app.use(bodyParser.urlencoded({ extended:  false }));
app.use(bodyParser.json());
app.use(express.static(__dirname  +  '/public'));

app.use('/api/products', products);
app.use('/api/users', users);
app.use('/api/carts', carts);
app.use('/api/orders', orders);

app.set('port', process.env.PORT || 4000);
const server = app.listen(app.get('port'), () => {
    console.log('Server listening on port ' + server.address().port);
});