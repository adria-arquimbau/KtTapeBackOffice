const { Schema, ObjectId } = require('mongoose')
const itemSchema = require('./item')

module.exports = new Schema({
    date: {
        type: Date,
        required: true
    },
    state: {
        type: String,
        default: 'pending'
    },
    owner: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    items: [itemSchema]
})