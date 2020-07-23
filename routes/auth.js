const express = require('express');
const authController = require('../controllers/auth');
const router = express.Router();

router.post('/contactform', authController.contactform);
router.post('/login', authController.login);
module.exports = router;