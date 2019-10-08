/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect, useContext} from 'react'
import { withRouter } from 'react-router-dom'
import logic from '../../logic'
import Context from '../Context'

import ResultOrders from '../../components/MyOrders/Result-orders'

function MyOrders() {

  const {cat, setCat} = useContext(Context)

  //const [error, setError] = useState(null)
  const [orders, setOrders] = useState(null)

  useEffect(() => {
    setCat()
  },[])

  async function handleOrders() {
    try {
      const { orders } = await logic.retrieveAllUserOrders()  
      setOrders(orders)  
    } catch (error) {
      //setError(error)
      //TODO MODAL
    }
  }

  useEffect(() => {
    handleOrders()
  },[])

  return <>
    <main className="myOrdersMain">
      <section className="myOrders">
        <h1 className="myOrders__title">My Orders</h1>
        {orders && orders.map(element => {
          return <ResultOrders key={element.id} element={element} />
        })}
      </section>
    </main>
  </>
}

export default withRouter(MyOrders)