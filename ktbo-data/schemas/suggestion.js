const { Schema, ObjectId } = require('mongoose')

module.exports = new Schema({
    date: {
        type: Date,
        required: true
    },
    body:{
        type: String,
        required: true,
    },
    owner: {
        type: ObjectId,
        ref: 'User',
        required: true
    }
})