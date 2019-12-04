const { models: { User, Order } } = require('ktbo-data')
const { validate } = require('ktbo-utils')

/**
 *  Retrieve all orders of a user.
 * 
 * @param {String} userId - Identifier of the user.
 * 
 * @returns {Promise} - Returns a Promise with all orders of the user.
 */

module.exports = function(userId, userIdOrders) {

    validate.string(userId, 'userId')
    validate.string(userIdOrders, 'userIdOrders')
    
    return (async () => {

        
        const user = await User.findById(userId)
        if (!user) throw Error(`User with id ${userId} does not exist`)

        const userAdmin = await User.findById(userIdOrders)
        if (!userAdmin) throw Error(`User with id ${userIdOrders} does not exist`)

        const orders = await Order.find({ owner: userIdOrders }, { __v: 0 }).sort({ _id: -1 }).populate("items.article").lean()

        orders.forEach(async order => {
            if(order.owner != userId) throw Error('User id does not match with user/order/id')
            order.id = order._id.toString()
            delete order._id      
        })
        
        if(orders.length === 0) throw new Error(`This User don\'t have any orders`)
        
        owner = orders[0].owner
        if(owner.toString() === userIdOrders)  {
            
            return orders
            
        } else {
            throw new Error(`Order owner do not corresponds with user id ${userIdOrders}`)
        }
    })()
}


