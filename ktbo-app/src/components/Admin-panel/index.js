/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import logic from '../../logic'
import ResultOrders from './Result-orders'
import ResultAllAdminOrders from './Result-all-admin-orders'
import ResultAllUsers from './ResultAllUsers'
import './index.sass'
import Modal from '../Modal'

function AdminPanel({history}) {

  const [error, setError] = useState()
  const [message, setMessage] = useState()
  const [orders, setOrders] = useState()
  const [allOrders, setAllOrders] = useState()
  const [retrieveUsers, setRetrieveUsers] = useState()

  async function handlePendingOrders() {

    (async () => {

      try {
        setAllOrders()
        setRetrieveUsers()
        const {orders} = await logic.retrievePendingOrders()
        setOrders(orders)
      } catch ({message}) {
        setError(message)
      }
    })()
  }

  async function handleAllOrders() {

    (async () => {
      try {
        setOrders()
        setRetrieveUsers()
        const orders = await logic.retrieveAllOrders()
          setAllOrders(orders)
      } catch ({message}) {
        setError(message)
      }
    })()
  }

  function handleRegisterNewUser () {
    history.push('/home/admin-panel/new-user')
  }

  function hanldeRetrieveAllUsers () {

    (async () => {
      try {
        setAllOrders()
        setOrders()
        const users = await logic.retrieveAllUsers()
        setRetrieveUsers(users)
      } catch ({message}) {
        setError(message)
      }
    })()
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
          <button onClick={hanldeRetrieveAllUsers}>Retrieve all users</button>
        </div>
      </section>
      <section>
        <ul>          
          {orders && <ResultOrders orders={orders}   retrievePendingOrders={handlePendingOrders}/>}
          {allOrders  && <ResultAllAdminOrders orders={allOrders} />}
          {retrieveUsers && <ResultAllUsers users={retrieveUsers} />}
        </ul>
      </section>
      {message && <Modal  message={message} showModal={handleModal}/>}
      {error && <Modal  message={error} showModal={handleModal}/>}
    </section>

  </>
}

export default withRouter(AdminPanel)