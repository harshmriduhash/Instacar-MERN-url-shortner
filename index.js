const express = require('express')
const path = require('path')
const connectDB = require('./db')

require('dotenv').config()
const app = express()

// connect to database
connectDB()

app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

// Define Routes
app.use('/', require('./route'))
app.use('/api/v1/url', require('./route/url'))

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Running on port ${PORT}`))