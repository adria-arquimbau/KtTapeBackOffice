/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState, useContext } from 'react'
import logic from '../../logic'
import ResultsCart from './ResultsCart'
import { withRouter } from 'react-router-dom'
import Context from '../Context'

function CurrentOrder({history}) {

  //const [error, setError] = useState(null)
  const [items, setItems] = useState()
  const {user, goHome} = useContext(Context)
  const {setCat} = useContext(Context)
 
  useEffect(() => {
    handleCart()
    setCat()
  },[user, items, goHome])

  async function handleCart() {
    try {
   
      const { cart } = await logic.retrieveUser()
        if(cart) {
          let res = await Promise.all(cart.map(item => logic.retrieveArticle(item.article)))
          res = res.map( (item,index) => {
          return { item, quantity: cart[index].quantity}
        })
        setItems(res)
        } /* if(cart.length === 0) history.push('/home') */
   
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