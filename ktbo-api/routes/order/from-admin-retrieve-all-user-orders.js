const fromAdminRetrieveAllUserOrders = require('../../logic/order/from-admin-retrieve-all-user-orders')

module.exports = function(req, res) {
    const { userId, params:{ userIdOrders } } = req
        
    try {
        fromAdminRetrieveAllUserOrders(userId, userIdOrders)
            .then((orders) => res.status(201).json({ message: `Orders of user with id ${userIdOrders} retrieved successfully`, orders}))
            .catch(({ message }) => res.status(400).json({ error: message }))
    } catch({ message }) {
        res.status(400).json({ error: message })
    }
}