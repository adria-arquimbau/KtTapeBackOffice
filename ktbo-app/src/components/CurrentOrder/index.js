/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useContext } from 'react'
import logic from '../../logic'
import ResultsCart from './ResultsCart'
import { withRouter } from 'react-router-dom'
import Context from '../Context'

function CurrentOrder({history}) {

  //const [error, setError] = useState(null)
  const {items, setItems} = useContext(Context)
  const {user, goHome} = useContext(Context)
  const {setCat} = useContext(Context)
 
  useEffect(() => {
    handleCart()
    setCat()
  },[user, items, goHome])

  async function handleCart() {
    try {
      (async () => {
        const { cart } = await logic.retrieveUser()
        try{
          if(cart) {
            let items = await Promise.all(cart.map(item => logic.retrieveArticle(item.article)))
            items = items.map( (item,index) => {
            return { item, quantity: cart[index].quantity}
          })
          setItems(items)
          } /* if(cart.length === 0) history.push('/home') */
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