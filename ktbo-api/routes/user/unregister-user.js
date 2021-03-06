const logic = require('../../logic')

module.exports = function (req, res) {
    
    const { userId , body: { userToDelete, password } } = req
    
    try {
        
        logic.unregisterUser(userToDelete, userId, password)
            .then(() => res.json({ message: 'user correctly unregistered' }))
            .catch(({ message }) => res.status(404).json({ error: message }))
    } catch ({ message }) {
        res.status(404).json({ error: message })
    }
}