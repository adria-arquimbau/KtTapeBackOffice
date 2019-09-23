/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import logic from '../../logic'
import ResultOrders from './Result-orders'
import ResultAllADminOrders from './Result-all-admin-orders'
import './index.sass'
import Modal from '../Modal'

function AdminPanel() {

  //const [error, setError] = useState()
  const [message, setMessage] = useState(null)
  const [orders, setOrders] = useState()
  const [allOrders, setAllOrders] = useState()

  async function handlePendingOrders() {

    (async () => {

      try {
        const {orders} = await logic.retrievePendingOrders()
        setAllOrders()
        setOrders(orders)
      } catch (error) {
        //setError(error)
      }

    })()
  }

  async function handleAllOrders() {

    (async () => {
      try {
        const orders = await logic.retrieveAllOrders()
          setOrders()
          setAllOrders(orders)
      } catch (error) {
        //setError(error)
      }
    })()
  }

  function handleSubmitNewUser(event) {
    
    event.preventDefault()
    let { target: { company: { value: company }, country: { value: country }, email: { value: email }, password: { value: password}, role: { value: role} }} = event
    
    handleRegisterNewClient(company, country, email, password, role)
    event.target.company.value = ''
    event.target.country.value = ''
    event.target.email.value = ''
    event.target.password.value = ''
    event.target.role.value = ''
  }

  async function handleRegisterNewClient(company, country, email, password, role) {
    
    try{ 
      
      const { message } = await logic.registerUser(company, country, email, password, role)
      const messageOk = message     
      setMessage(messageOk)
    } catch ({ message }) {
      setMessage(message)
    }
  }

  function handleModal() {
    setMessage(null) 
  }
    
  return <>

    <section className="adminMain">
      <section className="adminPanel">
        <h1>ADMIN PANEL</h1>
        <div className="adminPanel__buttons">
          <button onClick={handlePendingOrders}>Retrieve all PENDING orders</button>
          <button onClick={handleAllOrders}>Retrieve all ORDERS</button>
          <form onSubmit={handleSubmitNewUser}>
            <input placeholder="Company" type="text" name="company" defaultValue="" ></input>
            <input placeholder="Country" type="text" name="country" defaultValue="" ></input>
            <input placeholder="e-mail" type="text" name="email" defaultValue="" ></input>
            <input placeholder="password" type="text" name="password" defaultValue="" ></input>
            <select name="role">
              <option value="regular">Regular User</option> 
              <option value="admin">Admin</option> 
            </select>
            <button>Register a new client</button>
          </form>
        </div>
      </section>
      <section>
        <ul>          
          {orders && <ResultOrders orders={orders}   retrievePendingOrders={handlePendingOrders}/>}
          {allOrders  && <ResultAllADminOrders orders={allOrders} />}
        </ul>
      </section>
      {message && <Modal  message={message} showModal={handleModal}/>}
    </section>

  </>
}

export default withRouter(AdminPanel)