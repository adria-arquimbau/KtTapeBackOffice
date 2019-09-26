/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import logic from '../../logic'
import ResultsCart from './ResultsCart'
import { withRouter } from 'react-router-dom'

function CurrentOrder({history}) {

  //const [error, setError] = useState(null)
  const [items, setItems] = useState(null)
  const [cartNumber, setCartNumber] = useState()
 
  useEffect(() => {
    handleCart()
  },[cartNumber])

  async function handleCart() {
    try {
      (async () => {
        const response = await logic.retrieveUser()
        if(response.cart.length > 0){
          setCartNumber(response.cart)
        } else {
          history.push('/home')
        }
        try{
          const { cart } = response
          if(cart) {
            let items = await Promise.all(cart.map(item => logic.retrieveArticle(item.article)))
            items = items.map( (item,index) => {
            return { item, quantity: cart[index].quantity}
          })
          setItems(items)
          }
        }catch(error){
          //TODO
        }
      })()
    } catch (error) {
      //TODO SetError(error)
    }
  }

    return <>
        <section className="currentOrder">
          {items && <ResultsCart cart={items} retrieverCart={handleCart}/>} 
          <h4 className="currentOrder__title">Current Order</h4>    
        </section>
    </>
}

export default withRouter(CurrentOrder)