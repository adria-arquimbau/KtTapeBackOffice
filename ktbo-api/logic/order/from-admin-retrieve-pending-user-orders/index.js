const { models: { User, Order } } = require('ktbo-data')
const { validate } = require('ktbo-utils')

/**
 *  Retrieve all orders of a user.
 * 
 * @param {String} userId - Identifier of the user.
 * 
 * @returns {Promise} - Returns a Promise with all orders of the user.
 */

module.exports = function(userId, userIdPendingOrders) {

    validate.string(userId, 'userId')
    validate.string(userIdPendingOrders, 'userIdPendingOrders')
    
    return (async () => {

        
        const user = await User.findById(userId)
        if (!user) throw Error(`User with id ${userId} does not exist`)

        const userAdmin = await User.findById(userIdPendingOrders)
        if (!userAdmin) throw Error(`User with id ${userIdPendingOrders} does not exist`)

        const orders = await Order.find({ state: 'pending', owner: userIdPendingOrders }, { __v: 0 }).sort({ _id: -1 }).populate("items.article").lean()

        orders.forEach(async order => {
            if(order.owner != userId) throw Error('User id does not match with user/order/id')
            order.id = order._id.toString()
            delete order._id      
        })
        
        if(orders.length === 0) throw new Error(`This User don\'t have any pending orders`)
        
        owner = orders[0].owner
        if(owner.toString() === userIdPendingOrders)  {
            
            return orders
            
        } else {
            throw new Error(`Order owner do not corresponds with user id ${userIdPendingOrders}`)
        }
    })()
}


