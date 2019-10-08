/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect, useContext} from 'react'
import { withRouter } from 'react-router-dom'
import logic from '../../logic'
import Context from '../Context'
import Modal from '../Modal'

import ResultOrders from '../../components/MyOrders/Result-orders'

function MyOrders({history}) {

  const {setCat} = useContext(Context)

  const [message, setMessage] = useState(null)
  const [orders, setOrders] = useState(null)

  useEffect(() => {
    setCat()
    handleOrders()
  },[])

  async function handleOrders() {
    try {
      const { orders } = await logic.retrieveAllUserOrders()  
      setOrders(orders)  
    } catch ({message}) {
      setMessage(message)
    }
  }

  function handleModal() {
    setMessage(null) 
    history.push('/home')
  }

  return <>
    <main className="myOrdersMain">
      <section className="myOrders">
        <h1 className="myOrders__title">My Orders</h1>
        {orders && orders.map(element => {
          return <ResultOrders key={element.id} element={element} />
        })}
      </section>
      {message && <Modal  message={message} showModal={handleModal}/>}
    </main>
  </>
}

export default withRouter(MyOrders)