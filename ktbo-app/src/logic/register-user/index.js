const { validate } = require('ktbo-utils')
const REACT_APP_API_URL = process.env.REACT_APP_API_URL

export default function (company, country, email, password, role) {

    validate.string(company, 'company')
    validate.string(country, 'country')
    validate.string(email, 'email')
    validate.email(email, 'email')
    validate.string(password, 'password')
    validate.string(role, 'role')

    return (async () => {

        const { token } = sessionStorage
        
        const response = await fetch(`${REACT_APP_API_URL}/user`, {
            method: 'POST',
            headers: {'content-type': 'application/json', 'authorization': `bearer ${token}` },
            body: JSON.stringify({company, country, email, password, role})
        })
        
        if (response.status !== 201) {
            const { error } = await response.json()
            throw Error(error)
        } else {
            return await response.json()
        }

    })()
}