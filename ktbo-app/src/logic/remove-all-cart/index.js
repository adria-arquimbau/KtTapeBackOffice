const { validate } = require('ktbo-utils')
const REACT_APP_API_URL = process.env.REACT_APP_API_URL

export default function (userId)  {
     
    validate.string(userId, 'userId')

    return(async () => {

        const { token } = sessionStorage
       
        await fetch(`${REACT_APP_API_URL}/user/remove-cart`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json', 'authorization': `bearer ${token}`},
            body: JSON.stringify({userId})
        })

    })()
}