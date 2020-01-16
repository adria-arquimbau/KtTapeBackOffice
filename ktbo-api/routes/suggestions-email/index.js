const suggestionsEmail = require('../../logic/suggestions-email')

module.exports = function (req, res) {
    const { userId, body: { subject } } = req 

    try {
        suggestionsEmail(subject, userId)
            .then(res.status(201).json({ message: 'E-mail send'}))
            .catch(({ message }) => res.status(400).json({ error: message }))
    } catch ({ message }) {
        res.status(400).json({ error: message })
    }
}