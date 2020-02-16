import React, { useState } from 'react'
import {ToastsContainer, ToastsStore, ToastsContainerPosition, ToastContainer} from 'react-toasts';

function CartButton({ articleId, handleAddToCart }) {

    const [quantity, setQuantity] = useState("")

    async function handleSubmit(event) {    
        event.preventDefault()
        const { target: { quantity: { value: quantity } } } = event
        await handleAddToCart(articleId, quantity)
        
        setQuantity("")
    }

    return <form className="cartbutton-form" onSubmit={handleSubmit}>
        <input className="cartbutton-form__input" type="number" name="quantity" placeholder="1" value={quantity} onChange={event => setQuantity(event.target.value) } />
        <button className="cartbutton-form__button" onClick={() => ToastsStore.success("Article added")}>Add</button>
        <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT}/>
    </form>
}

export default CartButton