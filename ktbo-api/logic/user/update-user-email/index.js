const { models: { User } } = require('ktbo-data')
const { validate } = require('ktbo-utils')
const bcrypt = require('bcryptjs')

/**
 * Updates a user.
 * 
 * @param {string} id - Identifier of the user.
 * @param {Object} data - Object with the update data.
 * 
 */

module.exports = function (id, data) {
    
    validate.string(id, 'id')
    validate.object(data, 'data')
    
    return (async () => {

        const { updateEmail, userToUpdateId} = data

        const user = await User.findById( id )
        if(!user) throw Error(`user with id ${id} does not exist`)

        let dataToUpdate = {
            email: updateEmail
        }

        if(user.role === 'admin'){
            await User.findByIdAndUpdate(userToUpdateId, { $set: dataToUpdate })
        }
        if(user.role != 'admin')
            throw new Error('You are not an admin')
    })()
}