const mongoose = require('mongoose')

const ticketSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        require: true,
        default: Date.now
    },
    state : {
        type: String, 
        default: 'Open',
        require: true
    }
})

module.exports = mongoose.model("tickets", ticketSchema)