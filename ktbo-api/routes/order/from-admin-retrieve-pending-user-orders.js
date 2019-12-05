const fromAdminRetrievePendingUserOrders = require('../../logic/order/from-admin-retrieve-pending-user-orders')

module.exports = function(req, res) {
    const { userId, params:{ userIdPendingOrders } } = req
        
    try {
        fromAdminRetrievePendingUserOrders(userId, userIdPendingOrders)
            .then((orders) => res.status(201).json({ message: `Pending orders of user with id ${userIdPendingOrders} retrieved successfully`, orders}))
            .catch(({ message }) => res.status(400).json({ error: message }))
    } catch({ message }) {
        res.status(400).json({ error: message })
    }
}