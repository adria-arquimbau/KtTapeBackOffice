/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useContext, useEffect} from 'react'
import { withRouter } from 'react-router-dom'
import logic from '../../../logic'
import Moment from 'react-moment'
import Modal from '../../Modal'

function RetrieveUserOrders({ users }) {

    const [error, setError] = useState()
    const [message, setMessage] = useState() 
    const [pendingOrders, setPendingOrders] = useState()
    const [allOrders, setAllOrders] = useState()

    useEffect(() => {
    },[])

    function hanldeRetrieveAllUserOrders (event) 
    {
        event.preventDefault()
        let { target: {  clientId: { value: id } }} = event
        RetrieveAllUserOrders(id)
    }

    async function RetrieveAllUserOrders (id) 
    {
        try {
            setPendingOrders()
            const {orders} = await logic.fromAdminRetrieveAllUserOrders(id)
            setAllOrders(orders)
        } catch ({message}) {
            setError(message)
        }
    }

    function hanldeRetrievePendingUserOrders (event) 
    {
        event.preventDefault()
        let { target: {  clientId: { value: id } }} = event
        RetrievePendingUserOrders(id)
    }

    async function RetrievePendingUserOrders (id) 
    {
        try {
            setAllOrders()
            const {orders} = await logic.fromAdminRetrievePendingUserOrders(id)
            setPendingOrders(orders)
        } catch ({message}) {
            setError(message)
        }
    }
    
    function handleModal() 
    {
        setMessage(null) 
        setError(null)
        setPendingOrders()
    }

    return <section className="admin-retrieve-users">
        {users && users.user.map(user => {
            const {company, country, email, role, id, cart} = user
            return <ul className="admin-retrieve-users__each-user" key={id}>
                <li>Company: {company}</li>
                <li>Country: {country}</li>
                <li>Email: {email}</li>
                <li>Role: {role}</li>
                <li>
                    <form onSubmit={hanldeRetrieveAllUserOrders}>
                    <button>All Orders</button> 
                        <input type="text" hidden name="clientId" defaultValue={id}></input>
                    </form>
                </li>
                <li>
                <form onSubmit={hanldeRetrievePendingUserOrders}>
                    <button>Pending Orders</button>
                        <input type="text" hidden name="clientId" defaultValue={id}></input>
                    </form>
                </li>
            </ul>
        })}

        {pendingOrders && pendingOrders.map(order =>{
            const {state, date, owner, items, id} = order
            let totalPrice = 0

            return <section key={id} className="admin-retrieve-pending-orders__each-order">
                <section className="admin-retrieve-pending-orders__each-order-articles">
                    {items.map(item =>{
                        const totalItem = item.article.price * item.quantity
                        totalPrice += totalItem
                        return <ul className="admin-retrieve-pending-orders__each-order--article" key={item.id}>
                                <li>Ref: {item.article.ref}</li>
                                <li>{item.article.title}</li>
                                <li>{item.quantity} units</li>
                                <li>{item.article.price} €</li>
                                <li>Total: {totalItem.toFixed(2)} €</li>
                            </ul>
                    })}
                </section>

                <ul className="admin-retrieve-pending-orders__each-order--company">
                    <li className="statusAdminOrder"><p>State:</p> <p className={`status__${state}`}>{state.toUpperCase()}</p></li>
                    <li>Date: <Moment format="YYYY-MM-DD HH:mm">{date}</Moment></li>
                    <li>Company: {owner.company}</li>
                    <li>Country: {owner.country}</li>
                    <li>E-mail: {owner.email}</li>
                    <li>Total price: {totalPrice.toFixed(2)}€</li>
                    <section className="admin-retrieve-pending-orders__each-order--buttons">
                        <form className="admin-retrieve-pending-orders__each-order--button-change" onSubmit={async event => {event.preventDefault()
                            try {
                                const {message} = await logic.changeStateOrder(id)
                                setMessage(message)
                            } catch ({message}) {
                                setMessage(message)
                            }}}>
                            <button>Change State</button>
                        </form>
                        <form className="admin-retrieve-pending-orders__each-order--button-remove" onSubmit={async event => { event.preventDefault()
                            try {
                                const {message} = await logic.removePendingOrder(id)
                                setMessage(message)                        
                            } catch ({message}) {
                                setMessage(message)
                            }}}>
                            <button>Remove Order</button>
                        </form>
                    </section>
                </ul>
            </section>
        })}

        {allOrders && allOrders.map(order =>{
                    const {state, date, owner, items, id} = order
                    let totalPrice = 0

                    return <section key={id} className="admin-retrieve-pending-orders__each-order">
                        <section className="admin-retrieve-pending-orders__each-order-articles">
                            {items.map(item =>{
                                const totalItem = item.article.price * item.quantity
                                totalPrice += totalItem
                                return <ul className="admin-retrieve-pending-orders__each-order--article" key={item.id}>
                                        <li>Ref: {item.article.ref}</li>
                                        <li>{item.article.title}</li>
                                        <li>{item.quantity} units</li>
                                        <li>{item.article.price} €</li>
                                        <li>Total: {totalItem.toFixed(2)} €</li>
                                    </ul>
                            })}
                        </section>

                        <ul className="admin-retrieve-pending-orders__each-order--company">
                            <li className="statusAdminOrder"><p>State:</p> <p className={`status__${state}`}>{state.toUpperCase()}</p></li>
                            <li>Date: <Moment format="YYYY-MM-DD HH:mm">{date}</Moment></li>
                            <li>Company: {owner.company}</li>
                            <li>Country: {owner.country}</li>
                            <li>E-mail: {owner.email}</li>
                            <li>Total price: {totalPrice.toFixed(2)}€</li>
                        </ul>
                    </section>
                })}
        
        {message && <Modal  message={message} showModal={handleModal}/>}
        {error && <Modal  message={error} showModal={handleModal}/>}
    </section>
}

export default withRouter(RetrieveUserOrders)