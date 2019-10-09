/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect} from 'react'
import { withRouter } from 'react-router-dom'
import logic from '../../../logic'
import Modal from '../../Modal'

function RetrieveAllUsers({ users, retrieveAllUsers }) {

    const [error, setError] = useState()
    const [message, setMessage] = useState()  

    useEffect(() => {
        retrieveAllUsers()
    },[message])

    function hanldeSubmit(event) {
        event.preventDefault()
        let { target: { password: { value: password }, id: { value: userToDelete } }} = event
        
        handleRemoveUser(userToDelete, password)
    }

    function handleRemoveUser(userToDelete, password) {

        (async () => {

            try {
                const {message} = await logic.unregisterUser(userToDelete, password)
                setMessage(message)
            } catch ({message}) {
                setError(message)
            }

          })()
    }

    function handleModal() {
        setMessage(null) 
        setError(null)
    }
    
    return <section className="admin-retrieve-users">

            {users && users.user.map(user => {
                const {company, country, email, role, id, cart} = user
                return <ul className="admin-retrieve-users__each-user" key={id}>
                        <li>Company: {company}</li>
                        <li>Country: {country}</li>
                        <li>Email: {email}</li>
                        <li>Role: {role}</li>
                        <li>On cart articles: {cart.length}</li>
                        <form onSubmit={hanldeSubmit}>
                            <input placeholder="Your Password" type="password" name="password"/>
                            <input hidden type="text" name="id" value={id} />
                            <button>Delete User</button>
                        </form>
                    </ul>
            })}
       
        {message && <Modal  message={message} showModal={handleModal}/>}
        {error && <Modal  message={error} showModal={handleModal}/>}
    </section>
}

export default withRouter(RetrieveAllUsers)