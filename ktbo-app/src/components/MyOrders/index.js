/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect, useContext} from 'react'
import { withRouter } from 'react-router-dom'
import logic from '../../logic'
import Context from '../Context'

import ResultOrders from '../../components/MyOrders/Result-orders'

function MyOrders() {

  const {setCat} = useContext(Context)
  const {orders} = useContext(Context)

  //const [error, setError] = useState(null)

  useEffect(() => {
    setCat()
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