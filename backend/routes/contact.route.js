const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// Contact Model
const contactSchema = require('../models/Contact');

// Create Route
router.route('/send-message').post((request, response, next) => {
    contactSchema.create(request.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            console.log(data);
            response.json(data);
        }
    });
});

module.exports = router;