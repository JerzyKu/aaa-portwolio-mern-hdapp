const mongoose = require('mongoose')

const statsSchema = new mongoose.Schema({
    oopen:{
        type: Number,
        default: 56
    },
    cclose: {
        type: Number,
        default: 78
    }
})

module.exports = mongoose.model("stats", statsSchema)