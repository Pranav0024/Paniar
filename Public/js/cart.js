// cart.js
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/api/cart');
        if (!response.ok) {
            window.location.href = '/login.html';
            return;
        }

        const cartItems = await response.json();
        const cartDiv = document.getElementById('cartItems');

        cartItems.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'cart-item';
            itemDiv.innerHTML = `
        <h3>${item.product.name}</h3>
        <p>Price: $${item.product.price}</p>
        <p>Quantity: ${item.quantity}</p>
      `;
            cartDiv.appendChild(itemDiv);
        });
    } catch (err) {
        console.error('Error:', err);
    }
});

async function checkout() {
    alert('Checkout functionality coming soon!');
}