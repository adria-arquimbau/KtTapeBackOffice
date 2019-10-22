import React, { useState } from 'react'

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
        <button className="cartbutton-form__button">Add</button>
    </form>
}

export default CartButton