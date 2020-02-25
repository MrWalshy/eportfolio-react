const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../database/db');

// Load Validation
const validateRegister = require('../validation/register');
const validateLogin = require('../validation/login');

// Models
const Contact = require('../models/Contact');
const User = require('../models/User');

// GET messages
router.get('/', (request, response) => {
    Contact.find((error, data) => {
        if (error) {
            console.log(error);
            return next(error);
        } else {
            response.json(data);
        }
    });
});

// POST Admin Registration
router.post('/register', (request, response, next) => {
    // Validate form, check for errors
    const { errors, isValid } = validateRegister(request.body);
    
    if (!isValid) {
        return response.status(400).json(errors);
    }
    

    // Check if email exists in db
    User.findOne({ email: request.body.email })
    .then(user => {
        if (user) {
            return res.status(400).json({ email: "Email already exists" });
        } else {
            const newUser = new User({
                name: request.body.name,
                email: request.body.email,
                password: request.body.password
            });
        
            // Hash the password
            bcrypt.genSalt(10, (error, salt) => {
                bcrypt.hash(newUser.password, salt, (error, hashedPassword) => {
                    if (error) throw error;
                    console.log(newUser);
                    newUser.password = hashedPassword;
                    newUser.save()
                        .then(user => response.json(user))
                        .catch(error => console.log(error));
                });
            });
        }
    });
});

// POST - Login Route
router.post('/login', (request, response) => {
    // Validate form, check for errors
    const { errors, isValid } = validateLogin(request.body);
    
    if (!isValid) {
        return response.status(400).json(errors);
    }

    const email = request.body.email;
    const password = request.body.password;

    // Find user by email
    User.findOne({ email }).then(user => {
        // Check if user exists
        if (!user) {
            return response.status(404).json({ emailnotfound: "Email not found" });
        }

        // Check password
        bcrypt.compare(password, user.password).then(isAMatch => {
            if (isAMatch) {
                // User password authenticated, create JWT Payload
                const payload = {
                    id: user.id,
                    name: user.name
                };

                // Sign the token
                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    {
                        expiresIn: 31556926 // 1 Year in seconds
                    },
                    (error, token) => {
                        response.json({
                            success: true,
                            token: 'Bearer ' + token
                        });
                    }
                );
            } else {
                return response.status(400).json({ passwordIncorrect: "Password Incorrect" });
            }
        });
    });
});

module.exports = router;