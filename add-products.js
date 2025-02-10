// add-products.js
const mongoose = require('mongoose');
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Connection error:', err));

// Product model
const Product = require('./models/Product');

const sampleProducts = [
    {
        name: "Wireless Headphones",
        price: 149.99,
        description: "Noise-cancelling wireless headphones with 30h battery life",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Smartwatch Pro",
        price: 299.99,
        description: "Fitness tracking, heart rate monitor, and OLED display",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "4K Camera Drone",
        price: 599.99,
        description: "GPS-enabled drone with 4K camera and 3-axis gimbal",
        image: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
];

async function addProducts() {
    try {
        await Product.deleteMany(); // Clear existing products
        await Product.insertMany(sampleProducts);
        console.log('Products added successfully!');
        process.exit();
    } catch (err) {
        console.error('Error adding products:', err);
        process.exit(1);
    }
}

addProducts();