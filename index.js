const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = express()
const pinRoute = require('./routes/pins')
const userRoute = require('./routes/users')

dotenv.config()

app.use(express.json())

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('MongoDB is connected')
}).catch(err => console.log(err))

app.use('/map/pins', pinRoute)
app.use('/map/', userRoute)
app.get('/', (req,res) => {
    res.send('Check main website.')
})

app.listen(process.env.PORT || 8800, () => {
    console.log('backend server is running')
})