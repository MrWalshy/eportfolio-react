const Validator = require('validator');
const isEmpty = require('is-empty');

// Export validation function
module.exports = function validateRegister(data) {
    let errors = {};

    // Convert empty fields to empty string
    data.name = !isEmpty(data.name) ? data.name : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.password2 = !isEmpty(data.password2) ? data.password2 : '';

    // Name
    if (Validator.isEmpty(data.name)) {
        errors.name = 'Name field empty';
    }

    // Email
    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email field is required';
    } else if (!Validator.isEmail(data.email)) {
        errors.email = 'Invalid email';
    }

    // Password
    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password field is required';
    } else if (!Validator.isLength(data.password, {min: 8, max: 24})) {
        errors.password = 'Password is too short, atleast 8 characters are required';
    }

    if (Validator.isEmpty(data.password2)) {
        errors.password2 = "Confirmation password field is required";
    }

    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = "Passwords must match";
    }

    // Return object
    return {
        errors,
        isValid: isEmpty(errors) // Checks to see if we have any errors
    };
};