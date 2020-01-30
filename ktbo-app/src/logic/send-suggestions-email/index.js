const REACT_APP_API_URL = process.env.REACT_APP_API_URL
const { validate } = require('ktbo-utils')

export default function (subject) {

    validate.string(subject, 'subject')

    return (async () => {

        const { token } = sessionStorage
        debugger
        const response = await fetch(`${REACT_APP_API_URL}/user/suggestions-email`, {
            method: 'POST',
            headers: {'content-type': 'application/json', 'authorization': `bearer ${token}` },
            body: JSON.stringify({subject})
        })
        
        if (response.status !== 201) {
            const { error } = await response.json()
            throw Error(error)
        } else {
            return await response.json()
        }

    })()
}