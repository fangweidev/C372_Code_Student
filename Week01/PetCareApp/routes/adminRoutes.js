const express = require('express');
const adminController = require('../controllers/adminController');
const { isAdmin } = require('../middleware/auth');

const router = express.Router();

router.get('/admin/users', isAdmin, adminController.listUsers);
router.get('/admin/users/:id', isAdmin, adminController.userDetails);
router.get('/admin/users/delete/:id', isAdmin, adminController.deleteUser);

module.exports = router;
