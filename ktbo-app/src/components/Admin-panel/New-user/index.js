/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import { withRouter } from 'react-router-dom'
import Modal from '../../Modal'
import logic from '../../../logic'

function NewUser({history}) {

    const [error, setError] = useState()
    const [message, setMessage] = useState()
    const [newUser, setNewUser] = useState()

    const [_company, setCompany] = useState("")
    const [_country, setCountry] = useState("")
    const [_email, setEmail] = useState("")
    const [_password, setPassword] = useState("")

    function handleSubmitNewUser(event) {
        event.preventDefault()
        let { target: { company: { value: company }, country: { value: country }, email: { value: email }, password: { value: password}, role: { value: role} }} = event
        
        handleRegisterNewClient(company, country, email, password, role)
    }
    
    async function handleRegisterNewClient(company, country, email, password, role) {
        try{ 
            const response = await logic.registerUser(company, country, email, password, role)
            setNewUser(response.user)
            setMessage(response.message)
            setCompany("")
            setCountry("")
            setEmail("")
            setPassword("")
        } catch ({ message }) {
            setError(message)
        }
    }

    function handleModal() {
        setMessage(null) 
        setError(null)
    }

    function handleGoBack() {
        history.push('/home/admin-panel')
    }

    return <>
        <section>
            <section>
                <h1>Register a new client</h1>
                <form onSubmit={handleSubmitNewUser}>
                    <input placeholder="Company" type="text" name="company" value={_company} onChange={event => setCompany(event.target.value) }/>
                    <input placeholder="Country" type="text" name="country" value={_country} onChange={event => setCountry(event.target.value) } />
                    <input placeholder="e-mail" type="text" name="email" value={_email} onChange={event => setEmail(event.target.value) } />
                    <input placeholder="password" type="text" name="password" value={_password} onChange={event => setPassword(event.target.value) } />
                    <select name="role">
                        <option value="regular">Regular User</option> 
                        <option value="admin">Admin</option> 
                    </select>
                    <button>Register a new client</button>
                </form>
                <button onClick={handleGoBack} >Go Back</button>
            </section>
            <section>
                {newUser && <ul>
                    <li>Company: {newUser.company}</li>
                    <li>Country: {newUser.country}</li>
                    <li>Email: {newUser.email}</li>
                    <li>Role: {newUser.role}</li>
                </ul>}
            </section>
            {message && <Modal  message={message} showModal={handleModal}/>}
            {error && <Modal  message={error} showModal={handleModal}/>}
        </section>
    </>
}

export default withRouter(NewUser)