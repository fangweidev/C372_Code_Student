const express = require('express');
const pageController = require('../controllers/pageController');
const { isAdmin } = require('../middleware/auth');

const router = express.Router();

router.get('/', pageController.index);
router.get('/admin/dashboard', isAdmin, pageController.adminDashboard);

module.exports = router;
