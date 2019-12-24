const { validate } = require('ktbo-utils')
const REACT_APP_API_URL = process.env.REACT_APP_API_URL

export default function (articleId, body) {

    const { ref, title, description, img, quantity, category, price  } = body

    validate.string(articleId, 'articleId')
    validate.number(ref, 'ref')
    validate.string(title, 'title')
    if(description) validate.string(description, 'description')
    validate.string(img, 'img')
    validate.number(quantity, 'quantity')
    validate.string(category, 'category')    
    validate.number(price, 'price')

    return (async () => {

        const { token } = sessionStorage
        
        const response = await fetch(`${REACT_APP_API_URL}/user/article/${articleId}`, {
            method: 'PATCH',
            headers: {'content-type': 'application/json', 'authorization': `bearer ${token}` },
            body: JSON.stringify({  "ref": ref,
                                    "title": title,
                                    "description": description,
                                    "img": img,
                                    "quantity": quantity,
                                    "category": category,
                                    "price": price
                                })
        })
        
        if (response.status !== 200) {
            const { error } = await response.json()
            throw Error(error)
        } else {
            return await response.json()
        }

    })()
}