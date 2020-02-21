const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// Contact Model
const contactSchema = require('../models/Contact');

// GET messages
router.route('/').get((request, response) => {
    contactSchema.find((error, data) => {
        if (error) {
            console.log(error);
            return next(error);
        } else {
            response.json(data);
        }
    });
});

module.exports = router;