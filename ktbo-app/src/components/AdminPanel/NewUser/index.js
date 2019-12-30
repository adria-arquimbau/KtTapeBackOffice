/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import Modal from '../../Modal'
import logic from '../../../logic'

function NewUser() {

    const [error, setError] = useState()
    const [message, setMessage] = useState()
    const [newUser, setNewUser] = useState()

    const [_company, setCompany] = useState("")
    const [_country, setCountry] = useState("")
    const [_email, setEmail] = useState("")
    const [_repeatEmail, setRepeatEmail] = useState("")
    const [_password, setPassword] = useState("")
    const [_repeatPassword, setRepeatPassword] = useState("")

    function handleSubmitNewUser(event) {
        event.preventDefault()
        let { target: { company: { value: company }, country: { value: country }, email: { value: email }, repeatEmail: { value: repeatEmail }, password: { value: password}, repeatPassword: { value: repeatPassword}, role: { value: role} }} = event
        if(email === repeatEmail && password === repeatPassword){
            handleRegisterNewClient(company, country, email, password, role)
        }
        if(email != repeatEmail){
            setMessage("Email and Repeat Email aren\'t equals")
        }
        if(password != repeatPassword){
            setMessage("Password and Repeat Password aren\'t equals")
        }
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
            setRepeatEmail("")
            setRepeatPassword("")
        } catch ({ message }) {
            setError(message)
        }
    }

    function handleModal() {
        setMessage(null) 
        setError(null)
    }

    return <section className="admin-new-user">
        <h1>Register new user</h1>
        <form className="admin-new-user__form" onSubmit={handleSubmitNewUser}>  
            <input placeholder="Company" type="text" name="company" value={_company} onChange={event => setCompany(event.target.value) }/>
            <input placeholder="Country" type="text" name="country" value={_country} onChange={event => setCountry(event.target.value) } />
            <input placeholder="E-mail" type="text" name="email" value={_email} onChange={event => setEmail(event.target.value) } />
            <input placeholder="Repeat e-mail" type="text" name="repeatEmail" value={_repeatEmail} onChange={event => setRepeatEmail(event.target.value) } />
            <p>1 upper case, 1 number, 1 lower case, 1 special character, length 8</p>
            <input placeholder="Password" type="password" name="password" value={_password} onChange={event => setPassword(event.target.value) } />
            <input placeholder="Repeat password" type="password" name="repeatPassword" value={_repeatPassword} onChange={event => setRepeatPassword(event.target.value) } />
            <select name="role">
                <option value="regular">Regular User</option> 
                <option value="admin">Admin</option> 
            </select>
            <button>Register a new client</button>
        </form>
        <section className="admin-new-user__user">
            {newUser && <ul>
                <h2>New User</h2>
                <li>Company: {newUser.company}</li>
                <li>Country: {newUser.country}</li>
                <li>Email: {newUser.email}</li>
                <li>Role: {newUser.role}</li>
            </ul>}
        </section>
        {message && <Modal  message={message} showModal={handleModal}/>}
        {error && <Modal  message={error} showModal={handleModal}/>}
    </section>
}

export default NewUser