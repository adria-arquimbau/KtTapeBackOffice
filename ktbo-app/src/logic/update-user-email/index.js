const { validate } = require('ktbo-utils')
const REACT_APP_API_URL = process.env.REACT_APP_API_URL

export default function (updateEmail, userToUpdateId) {

    validate.string(updateEmail, 'updateEmail')
    validate.string(userToUpdateId, 'userToUpdateId')

    return (async () => {

        const { token } = sessionStorage
        const response = await fetch(`${REACT_APP_API_URL}/user-update-email`, {
            method: 'PATCH',
            headers: {'content-type': 'application/json', 'authorization': `bearer ${token}` },
            body: JSON.stringify({updateEmail, userToUpdateId})
        })
        
        if (response.status !== 200) {
            const { error } = await response.json()
            throw Error(error)
        } else {
            return await response.json()
        }

    })()
}