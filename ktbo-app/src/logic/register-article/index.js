const { validate } = require('ktbo-utils')
const REACT_APP_API_URL = process.env.REACT_APP_API_URL

export default function (ref, title, description, img, quantity, price, category) {

    validate.number(ref, 'ref')
    validate.string(title, 'title')
    if(description)
        validate.string(description, 'description')
    validate.string(img, 'img')
    validate.number(quantity, 'quantity')
    validate.number(price, 'price')
    validate.string(category, 'category')


    return (async () => {

        const { token } = sessionStorage
        
        const response = await fetch(`${REACT_APP_API_URL}/user/article`, {
            method: 'POST',
            headers: {'content-type': 'application/json', 'authorization': `bearer ${token}` },
            body: JSON.stringify({ref, title, description, img, quantity, price, category})
        })
        
        if (response.status !== 201) {
            const { error } = await response.json()
            throw Error(error)
        } else {
            return await response.json()
        }

    })()
}