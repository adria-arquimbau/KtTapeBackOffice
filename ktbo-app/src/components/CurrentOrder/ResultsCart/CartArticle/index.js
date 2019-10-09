import React, { useState } from 'react'

function CartArticle({ element, onSubmit, onRemove }) {

    const [quantity, setQuantity] = useState("")

    const { item : { article: { ref, id, title, quantity: stockQuantity, price }} , quantity : articleQuantity } = element
    let result = price * articleQuantity

    function handleArticle(event){
        event.preventDefault()
        let { target: { number: { value: quantity }, articleId: { value: articleId }  } } = event
        onSubmit(articleId, quantity)
        setQuantity("")
    }
           
    return <>
        
        <ul key={id} className="currentOrder__article">
            
            <li className="currentOrder__article--param">Ref: {ref}</li>
            <li className="currentOrder__article--param">{title}</li>
            <li className="currentOrder__article--param">Stock: {stockQuantity}</li>
            <li className="currentOrder__article--param">Price: {price} € x pack</li>
            <li className="currentOrder__article--param">Total: {result.toFixed(2)} €</li>
            <li className="currentOrder__article--param">
                <form onSubmit={handleArticle}>
                    <input type="number" name="number" placeholder="quantity" value={quantity} onChange={event => setQuantity(event.target.value) }></input>
                    <input type="text" hidden name="articleId" defaultValue={id}></input>
                    <button>Submit</button>
                </form>
            </li>
            <li className="currentOrder__article--param">Your quantity: {articleQuantity}</li>
            <li>
                <form onSubmit={onRemove}>
                    <input type="text" hidden name="articleId" defaultValue={id}></input>
                    <button>Remove</button>
                </form>
            </li>
        </ul>     
    </>
}

export default CartArticle