const express = require('express');

const router = express.Router();


router.get('/contactform', (req,res) => {
    res.render('contactform');
});

router.get('/login', (req,res) => {
    res.render('login');
});


module.exports = router;