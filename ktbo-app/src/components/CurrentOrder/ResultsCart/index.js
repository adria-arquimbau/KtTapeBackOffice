import React, {useState, useContext, useEffect} from 'react'
import logic from '../../../logic'
import CartArticle from './CartArticle'
import { withRouter } from 'react-router-dom'
import Modal from '../../Modal'
import Context from '../../Context'

function ResultsCart({ history }) {

    const [message, setMessage] = useState(null)
    const [error, setError] = useState(null)
    const {items} = useContext(Context)
    const {interruptorItems, setInterruptorItems} = useContext(Context)

    useEffect(() => {
        emptyCart()
    },[items])

    let totalPrice = 0

    function emptyCart() {
        if(items.length === 0) history.push('/home/my-orders')
    }
    
    async function handleSubmit(articleId, quantity) {
        try {
            await logic.addToCart(articleId, quantity)
            setInterruptorItems(!interruptorItems)
        } catch ({message}) {
            setError(message)
        }
    }

    async function handleRemove(event) {
        event.preventDefault()
        const { target: { articleId: { value: articleId }  } } = event
        try {
            await logic.removeToCart(articleId)
            setInterruptorItems(!interruptorItems)
        } catch (error) {
            
        }
    }

    async function handlePlaceOrder() {
        try {
            const { message } = await logic.placeOrder()
            const messageOk = message
            setMessage(messageOk)
            setInterruptorItems(!interruptorItems)
        } catch ({message}) {
            setError(message)
        }
    }
    
    function handleModal() { 
       setMessage(null) 
       history.push('/home/my-orders')
    }

    function handleModalError() {
        setError(null) 
     }

    return <>

        <section className="currentOrder__articles">
            {items.map(element => {
                const { item : { article: { price, id }} , quantity : articleQuantity } = element
                totalPrice += price * articleQuantity
                return <CartArticle key={id} element={element} onSubmit={handleSubmit} onRemove={handleRemove}/>
            })}  
        </section>
        {message && <Modal message={message} showModal={handleModal}/>}
        {error && <Modal message={error} showModal={handleModalError}/>}
        <div className="currentOrder__placeOrder">
            <button onClick={handlePlaceOrder} className="currentOrder__button--placeOrder">PLACE ORDER</button>
            <h3 className="currentOrder__totalPrice">TOTAL PRICE: {totalPrice.toFixed(2)} €</h3>     
        </div>
    </>
}

export default withRouter(ResultsCart)