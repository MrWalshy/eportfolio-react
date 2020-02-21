const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let contactSchema = new Schema({
    email: {
        type: String
    },
    subject: {
        type: String
    },
    message: {
        type: String
    }
});

module.exports = mongoose.model('Contact', contactSchema);