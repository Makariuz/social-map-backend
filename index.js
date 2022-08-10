const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = express()


var cors = require('cors')

dotenv.config()



app.use(express.json())
app.use(
    cors({
      origin: process.env.FRONTEND_URL,
      credentials: true
    })
  );

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('MongoDB is connected')
}).catch(err => console.log(err))

const pinRoute = require('./routes/pins')
app.use('/map/pins', pinRoute)
const userRoute = require('./routes/users')
app.use('/map', userRoute)
app.get('/', (req,res) => {
    res.send('Check main website! || socialmaps.netflify.com ||')
})

app.listen(process.env.PORT || 5000, () => {
    console.log('backend server is running')
})