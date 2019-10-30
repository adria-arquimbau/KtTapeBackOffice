const { models: { User } } = require('ktbo-data')
const { validate } = require('ktbo-utils')

/**
 *  This function removes an item with a quantity to the user's cart
 *
 * @param {String} userId - Identifier of the user.
 * 
 * @returns {Promise}
 */

module.exports = function(userId, clientId) {

    validate.string(userId, 'userId')
    validate.string(clientId, 'clientId')
   
    return (async () => {
        
        const adminUser = await User.findById(userId)
        if (!adminUser) throw Error(`User with id ${userId} does not exist`)

        const clientUser = await User.findById(clientId)
        if (!clientUser) throw Error(`User with id ${clientUser} does not exist`)

        if (adminUser.role === 'admin' && clientUser.cart.length != 0){
            clientUser.cart = []
            await clientUser.save() 
        } 
        if (adminUser.role === 'regular') throw Error('You need be an admin role to delete all cart')
    })()
}