const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dbConfig = require('./database/db');
const passport = require('passport');

// Express Routes
const contactRoutes = require('../backend/routes/contact.route');
const adminRoutes = require('../backend/routes/admin.routes');

// Connect the db
const connectDb = async () => {
    try {
        await mongoose.connect(dbConfig.db, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.info(`Connected to database on Worker process: ${process.pid}`);
    } catch (error) {
        console.log(error);
        console.log('Database Connection: FAIL!')
        process.exit(1); // Exits process even if async ops pending
    }
}

connectDb();

// Initialise Express
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use('/contact', contactRoutes);
app.use('/admin', adminRoutes);

// Initialise Passport middleware
app.use(passport.initialize());
require('./database/passport')(passport);

// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log(`Connected to port ${port}`);
});

// 404 Error
app.use((request, response, next) => {
    // next is used for passing control
    next(createError(404));
});

app.use(function(error, request, response, next) {
    console.error(error.message);
    if (!error.statusCode) error.statusCode = 500;
    response.status(error.statusCode).send(error.message);
});