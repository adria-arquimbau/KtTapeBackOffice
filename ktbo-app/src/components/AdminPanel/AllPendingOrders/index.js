/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect} from 'react'
import { withRouter } from 'react-router-dom'
import logic from '../../../logic'
import Moment from 'react-moment'
import Modal from '../../Modal'

function ResultOrders({ orders, retrievePendingOrders }) {
    
    const [message, setMessage] = useState(null)
    
    useEffect(() => {
        retrievePendingOrders()
    },[message])

    function handleModal() {
        setMessage(null) 
    }
    
    return <section className="admin-retrieve-pending-orders">
        <h1>Pending orders</h1>
        {orders && orders.map(order =>{
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
        {message && <Modal message={message} showModal={handleModal}/>}
    </section>
}

export default withRouter(ResultOrders)