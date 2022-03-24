const router = require('express').Router();
const userRoutes = require('./userRoutes');
const profileRoutes = require('./profileRoutes')
const addToCartRoute = require('./addToCartRoute')

router.use('/users', userRoutes);
router.use('/profile', profileRoutes);

router.use('/addToCart', addToCartRoute);


module.exports = router;