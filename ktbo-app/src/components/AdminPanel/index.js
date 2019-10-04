/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useContext, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import logic from '../../logic'
import AllPendingOrders from './AllPendingOrders'
import AllOrders from './AllOrders'
import AllUsers from './AllUsers'
import './index.sass'
import Modal from '../Modal'
import Context from '../Context'

function AdminPanel({history}) {

  const {cat, setCat} = useContext(Context)

  const [error, setError] = useState()
  const [message, setMessage] = useState()
  const [orders, setOrders] = useState()
  const [allOrders, setAllOrders] = useState()
  const [retrieveUsers, setRetrieveUsers] = useState()

  useEffect(() => {
    setCat()
  },[])

  async function handlePendingOrders() {
    
      try {
        setAllOrders()
        setRetrieveUsers()
        const {orders} = await logic.retrievePendingOrders()
        setOrders(orders)
      } catch ({message}) {
        setOrders()
        setError(message)
      }
  }

  async function handleAllOrders() {
      try {
        setOrders()
        setRetrieveUsers()
        const orders = await logic.retrieveAllOrders()
        setAllOrders(orders)
      } catch ({message}) {
        setError(message)
      }
  }

  function handleRegisterNewUser () {
    history.push('/home/admin-panel/new-user')
  }

  async function handleRetrieveAllUsers () {
      try {
        setAllOrders()
        setOrders()
        const users = await logic.retrieveAllUsers()
        setRetrieveUsers(users)
      } catch ({message}) {
        setError(message)
      }
  }

  function handleModal() {
    setMessage(null) 
    setError(null)
  }
    
  return <>

    <section className="adminMain">
      <section className="adminPanel">
        <h1>ADMIN PANEL</h1>
        <div className="adminPanel__buttons">
          <button onClick={handlePendingOrders}>Retrieve all PENDING orders</button>
          <button onClick={handleAllOrders}>Retrieve all ORDERS</button>
          <button onClick={handleRegisterNewUser}>Register new User</button>
          <button onClick={handleRetrieveAllUsers}>Retrieve all users</button>
        </div>
      </section>
      <section>
        <ul>          
          {orders && <AllPendingOrders orders={orders}   retrievePendingOrders={handlePendingOrders}/>}
          {allOrders  && <AllOrders orders={allOrders} />}
          {retrieveUsers && <AllUsers users={retrieveUsers} retrieveAllUsers={handleRetrieveAllUsers} />}
        </ul>
      </section>
      {message && <Modal  message={message} showModal={handleModal}/>}
      {error && <Modal  message={error} showModal={handleModal}/>}
    </section>

  </>
}

export default withRouter(AdminPanel)