/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect, useContext} from 'react'
import { withRouter } from 'react-router-dom'
import logic from '../../logic'
import Context from '../Context'
import { ToastContainer, toast } from 'react-toastify'

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
      toast.error(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
        })
      setMessage(message)
    }
  }

  return <>
   <div class="card text-center card-body-changelog">
    <div class="card-header">
      My Orders
    </div>
   {message &&  <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnVisibilityChange
                    draggable
                    pauseOnHover
                    />}
  <main className="myOrdersMain">
    <section className="myOrders">
      
      {orders && orders.map(element => {
        return <ResultOrders key={element.id} element={element} />
      })}
    </section>
   
  </main>
  </div>
  </>
}

export default withRouter(MyOrders)