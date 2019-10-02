const wakeUpApi = require('../../logic/wake-up-api')

module.exports = (req, res) => {
    try {
        wakeUpApi()
            .then(() => res.json({ message: 'Wake Up Api done!' }))
            .catch(({ message }) => res.status(401).json({ error: message }))
    } catch ({ message }) {
        res.status(401).json({ error: message })
    }
}