// public/js/script.js
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/api/products');
        const products = await response.json();
        const productsGrid = document.getElementById('products');

        // Render products
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button onclick="addToCart('${product._id}')">Add to Cart</button>
      `;
            productsGrid.appendChild(productCard);
        });
    } catch (err) {
        console.error('Error fetching products:', err);
    }
});

// script.js (update addToCart)
async function addToCart(productId) {
    try {
        const response = await fetch(`/api/cart/${productId}`, {
            method: 'POST',
            credentials: 'include', // Include cookies for session
        });

        if (response.ok) {
            alert('Added to cart!');
        } else {
            window.location.href = '/login.html';
        }
    } catch (err) {
        console.error('Error:', err);
    }
}