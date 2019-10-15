const removeAllCart = require('../../logic/cart/remove-all-cart')

module.exports = function(req, res) {

    const { userId, body: { clientId } } = req
        
    try {
        removeAllCart(userId, clientId)
            .then((() => res.status(200).json({ message: `All cart of user ${clientId} deleted sucsessfully`})))
            .catch(({ message }) => res.status(400).json({ error: message }))
    } catch({ message }) {
        res.status(400).json({ error: message })
    }
}