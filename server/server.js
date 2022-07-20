require('dotenv').config()

const express = require('express')
const { default: mongoose } = require('mongoose')
const cors = require('cors')

require( './cron')

const app = express() 

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) => {console.log(error)})
db.once('open', () => console.log('connectet to db'))

app.use(express.json())
app.use(cors())

app.use('/ticket', require('./routes/ticket'))

app.listen(3030, () => console.log('app listen on port 3030'))



