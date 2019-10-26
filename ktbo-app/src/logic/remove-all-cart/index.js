const { validate } = require('ktbo-utils')
const REACT_APP_API_URL = process.env.REACT_APP_API_URL

export default function (clientId)  {
     
    validate.string(clientId, 'clientId')

    return(async () => {

        const { token } = sessionStorage
       
        const response = await fetch(`${REACT_APP_API_URL}/user/remove-cart`, {
            method: 'DELETE',
            headers: { 'content-type': 'application/json', 'authorization': `bearer ${token}`},
            body: JSON.stringify({clientId})
        })

        if (response.status !== 200) {
            const { error } = await response.json()
            throw Error(error)

        } else {
            return await response.json()
        }        

    })()
}