const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

let cart = [];

// Serve the home page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// API to add products to the cart
app.post('/add-to-cart', (req, res) => {
    const { productId } = req.body;
    cart.push(productId);
    res.json({ message: 'Product added to cart!', cart });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
