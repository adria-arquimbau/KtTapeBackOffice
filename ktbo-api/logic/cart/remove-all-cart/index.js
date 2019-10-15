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
        
        const user = await User.findById(userId)
        if (!user) throw Error(`User with id ${userId} does not exist`)

        if (user.role === 'admin'){
            if (user.cart.length === 0) throw Error(`User with id ${userId} does not have any article in his cart`)

            user.cart = []
            
            await user.save()

        } else {
            throw Error('You need be an admin role to deleta all cart')
        }
        
    })()
}