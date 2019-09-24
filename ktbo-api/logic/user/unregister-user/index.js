const { models: { User } } = require('ktbo-data')
const { validate } = require('ktbo-utils')
const bcrypt = require('bcryptjs')

/**
 * Unregisters a user.
 * Function only for admins.
 * 
 * @param {string} userId - Identifier of the user you want to remove.
 * @param {string} adminId - Identifier of the admin.
 * @param {string} password - Password of the admin.
 * 
 */

module.exports = function (userId, adminId, password) {

    validate.string(userId, 'userId')
    validate.string(adminId, 'adminId')
    validate.string(password, 'password')

    return (async () => {

        const res = await User.findById({ _id: adminId})
        if(!res) throw Error (`Admin with id ${adminId} doesn\'t exist`)

        if(res.role === 'admin'){

            const match = await bcrypt.compare(password, res.password)
            if (!match) throw new Error('wrong credentials')
    
            const user = await User.findById({ _id: userId })
            if(!user) throw Error (`User with id ${userId} doesn\'t exist`)

            const deletedUser = await User.deleteOne({ _id: userId })
            if (!deletedUser.deletedCount) throw new Error(`wrong credentials`)

        } else {
            throw new Error(`User with id ${adminId} is not an admin`)
        }

    })()
}