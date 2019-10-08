import React, { useState } from 'react'

function CartButton({ articleId, handleAddToCart }) {

    const [quantity, setQuantity] = useState("")

    function handleSubmit(event) {    
        event.preventDefault()
        const { target: { quantity: { value: quantity } } } = event
        handleAddToCart(articleId, quantity)
        setQuantity("")
    }

    return <>
        <form onSubmit={handleSubmit}>
            <button className="cartButton">Add</button>
            <input className="cartButton__input" type="number" name="quantity" placeholder="quantity" value={quantity} onChange={event => setQuantity(event.target.value) } />
        </form>

        <section className="cartButton__feedback">
        </section>

    </>
}

export default CartButton