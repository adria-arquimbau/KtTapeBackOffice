/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useContext, useEffect} from 'react'
import { withRouter } from 'react-router-dom'
import logic from '../../../logic'
import Context from '../../Context'
import Modal from '../../Modal'

function RetrieveAllUsers({ users, retrieveAllUsers }) {

    const [error, setError] = useState()
    const [message, setMessage] = useState()  
    
    const {interruptorItems, setInterruptorItems} = useContext(Context)

    useEffect(() => {
        retrieveAllUsers()
    },[message])

    function hanldeSubmit(event) {
        event.preventDefault()
        let { target: { password: { value: password }, id: { value: userToDelete } }} = event
        handleRemoveUser(userToDelete, password)
    }

    async function handleRemoveUser(userToDelete, password) {
        try {
            const {message} = await logic.unregisterUser(userToDelete, password)
            setMessage(message)
        } catch ({message}) {
            setError(message)
        }
    }

    function handleUpdateEmail(event){
        event.preventDefault()
        let { target: { updateEmail: { value: updateEmail }, updateEmailRepeat: { value: updateEmailRepeat }, userToUpdateId: { value: userToUpdateId } } } = event
        if(updateEmail === updateEmailRepeat)
            handleUpdateUserEmail(updateEmail, userToUpdateId)
        if(updateEmailRepeat != updateEmail)
            setMessage("Repeat Email are not equal")
    }

    async function handleUpdateUserEmail(updateEmail, userToUpdateId){
        try {
            const { message } = await logic.updateUserEmail(updateEmail, userToUpdateId)
            setMessage(message)
            setInterruptorItems(!interruptorItems)
        } catch ({message}) {
            setMessage(message)
        }
    }

    async function handleRemoveCart(event) {
        event.preventDefault()
        let { target: { clientId: { value: clientId } }} = event
        handleRemoveAllCart(clientId)
    }

    async function handleRemoveAllCart(clientId){
        try {
            const { message } = await logic.removeAllCart(clientId)
            setMessage(message)
            setInterruptorItems(!interruptorItems)
        } catch ({message}) {
            setMessage(message)
        }
    }

    function handleModal() {
        setMessage(null) 
        setError(null)
    }
    
    return <section className="admin-retrieve-users">
        {users && users.user.map(user => {
            const {name, surname, company, country, email, role, id, cart} = user
            return <ul className="admin-retrieve-users__each-user" key={id}>
                <li>Name: {name}</li>
                <li>Surname: {surname}</li>
                <li>Company: {company}</li>
                <li>Country: {country}</li>
                <li>Email: {email}</li>
                <form onSubmit={handleUpdateEmail}>
                    <input type="text" name="updateEmail" defaultValue={email}></input>
                    <input type="text" name="updateEmailRepeat" placeholder="Repeat email"></input>
                    <input type="text" hidden name="userToUpdateId" defaultValue={id}></input>
                    <button>Update Email</button>
                </form>
                <li>Role: {role}</li>
                <li>
                    <form onSubmit={handleRemoveCart}>On cart articles: {cart.length}
                    {cart.length > 0 &&<button>-</button>}
                        <input type="text" hidden name="clientId" defaultValue={id}></input>
                    </form>
                </li>
                <form onSubmit={hanldeSubmit}>
                    <input placeholder="Your admin Password" type="password" name="password"/>
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