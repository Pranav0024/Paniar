// server.js (add these after connecting to MongoDB)
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/User');

// Session configuration
app.use(
    session({
        secret: 'your-secret-key',
        resave: false,
        saveUninitialized: false,
    })
);

// Passport setup
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Authentication middleware
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/login.html');
}

// Routes for login/signup
app.post('/api/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = new User({ username, email, password });
        await user.save();
        res.json({ success: true });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
});

app.post('/api/login', passport.authenticate('local'), (req, res) => {
    res.json({ success: true });
});

// Cart routes
app.get('/api/cart', isLoggedIn, async (req, res) => {
    try {
        const user = await User.findById(req.user._id).populate('cart.product');
        res.json(user.cart);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/api/cart/:productId', isLoggedIn, async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        const productId = req.params.productId;

        // Check if product already exists in cart
        const existingItem = user.cart.find(item => item.product.toString() === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            user.cart.push({ product: productId });
        }

        await user.save();
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});