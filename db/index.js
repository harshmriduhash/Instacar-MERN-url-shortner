const mongoose = require('mongoose')
require('dotenv').config()

// local db
// const mongoUrl = "mongodb://localhost:27017/shorten-url"

const mongoUrl = process.env.mongoURI

const connectDB = async () => {
    try {
        await mongoose.connect(mongoUrl, {
            useNewUrlParser: true
        })
        console.log('Connected to DB')
    } catch (err) {
        console.error(err.message)
        process.exit(1);
    }
}

module.exports = connectDB