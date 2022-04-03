const router = require('express').Router();

// const apiRoutes = require('./api');
const userRoutes = require('./user-route.js');
const postRoutes = require('./post-route.js');
const commentRoutes = require('./comments-route.js');
const homeRoutes = require('./home-route.js');
const dashboardRoutes = require('./dashboard-route.js');

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/user', userRoutes);
router.use('/post', postRoutes);
router.use('/comment', commentRoutes);

// router.use('/api', apiRoutes);


module.exports = router;