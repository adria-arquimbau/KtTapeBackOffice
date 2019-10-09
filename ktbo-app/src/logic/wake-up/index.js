const REACT_APP_API_URL = process.env.REACT_APP_API_URL

export default function () {

    return (async () => {
        const response = await fetch(`${REACT_APP_API_URL}/wake-up-api`, {
            method: 'GET',
            headers: {'content-type': 'application/json'},
        })
        
        if (response.status !== 200) {
            const { error } = await response.json()
            throw Error(error)
        } else {
            return await response.json()
        }

    })()
}