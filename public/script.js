let cart = [];
const products = [
    { id: 1, name: 'Garden Sprayer Pressure Bottle' },
    { id: 2, name: 'Product 2'},
    { id: 3, name: 'Product 3' },
    // Add other products here as needed
];

function addToCart(productId) {
    cart.push(productId);
    alert('Product added to cart!');
    console.log(cart);
}

function viewCart() {
    const cartSection = document.getElementById('cart');
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = ''; // Clear previous cart items

    cart.forEach(productId => {
        const product = products.find(p => p.id === productId);
        const li = document.createElement('li');
        li.textContent = product.name;
        cartItems.appendChild(li);
    });

    cartSection.style.display = 'block'; // Show the cart section
}
