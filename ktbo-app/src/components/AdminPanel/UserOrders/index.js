/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useContext, useEffect} from 'react'
import { withRouter } from 'react-router-dom'
import logic from '../../../logic'
import Context from '../../Context'
import Modal from '../../Modal'

function RetrieveUserOrders({ users }) {

    const [error, setError] = useState()
    const [message, setMessage] = useState() 
    const [orders, setOrders] = useState()

    useEffect(() => {

    },[])

    function handleUserOrders(event) {
        event.preventDefault()
        let { target: { clientId: { value: clientId } }} = event
        userOrders(clientId)
    }

    async function userOrders(clientId) {
        try {
            const orders = await logic.retrieveAllUserOrders(clientId)
            setOrders(orders)
        } catch ({message}) {
            setMessage(message)
        }
    }
    
    function handleModal() {
        setMessage(null) 
        setError(null)
    }

    return <section className="admin-retrieve-users">
        <h1>User Orders</h1>
        {users && users.user.map(user => {
            const {company, country, email, role, id, cart} = user
            return <ul className="admin-retrieve-users__each-user" key={id}>
                <li>Company: {company}</li>
                <li>Country: {country}</li>
                <form onSubmit={handleUserOrders}>
                    <button>User Orders</button>
                    <input type="text" hidden name="clientId" defaultValue={id}></input>
                </form>
            </ul>
        })}
        {orders && orders}
        {message && <Modal  message={message} showModal={handleModal}/>}
        {error && <Modal  message={error} showModal={handleModal}/>}
    </section>
}

export default withRouter(RetrieveUserOrders)