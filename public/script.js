let cart = [];
const products = [
    { id: 1, name: 'Garden Sprayer Pressure Bottle' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
    { id: 4, name: 'Product 4' },
    // Add other products here as needed
];

function addToCart(productId) {
    cart.push(productId);
    alert('Product added to cart!');
    console.log(cart);

    // Update cart counter
    const cartCounter = document.querySelector('.cart-counter');
    cartCounter.textContent = cart.length;
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

// Carousel functionality
const carouselImages = [
    '/assets/spray/image1.jpg',
    '/assets/spray/image2.jpg',
    '/assets/spray/image3.jpg',
    '/assets/spray/image4.jpg',
    '/assets/spray/image5.jpg',
    // Add more image paths as needed
];

let currentImageIndex = 0;
const carouselElement = document.querySelector('.carousel-image');

function rotateImages() {
    currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
    carouselElement.src = carouselImages[currentImageIndex];
}

setInterval(rotateImages, 3000); // Rotate images every 3 seconds
