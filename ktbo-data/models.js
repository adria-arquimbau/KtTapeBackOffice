const mongoose = require('mongoose')
const { user, article, item, order, suggestion } = require('./schemas')

module.exports = {
    User: mongoose.model('User', user),
    Article: mongoose.model('Article', article),
    Item: mongoose.model('Item', item),
    Order: mongoose.model('Order', order),
    Suggestion: mongoose.model('Suggestion', suggestion)
}