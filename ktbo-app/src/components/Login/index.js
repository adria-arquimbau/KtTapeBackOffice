/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useContext } from 'react'
import Context from '../Context'

import logic from '../../logic'
import { withRouter } from 'react-router-dom'

import Modal from '../Modal'

function Login({ history }) {
    
    const [message, setMessage] = useState(null)
    const [waitLogin, setWaitLogin] = useState(false)

    
    const {setUser} = useContext(Context)

    function handleSubmit(event) {
        event.preventDefault()
        const { target: { email: { value: email }, password: { value: password } } } = event
        handleLogin(email, password)
    }

    async function handleLogin(email, password) {

        try {
            if(email && password)setWaitLogin(!waitLogin)
            const {  id, token } = await logic.authenticateUser(email, password)
            logic.userCredentials = { id, token }

            try {
                const user = await logic.retrieveUser()
                setUser(user)
            } catch (error) {
                //TODO
            }
            history.push('/home')
            if(email && password)setWaitLogin(!waitLogin)
        } catch({message}) {
            setMessage(message)
        }
        
    }

    function handleModal() {
        setMessage(null) 
    }

    return <main className="login">
            <section className="login__content">
                <h2 className="login__title">Login</h2>
                <form className="login__form" onSubmit={handleSubmit}>
                    <input className="login__form--email" placeholder="e-mail" type="email" name="email" />
                    <input className="login__form--password" placeholder="password" type="password" name="password" />
                    {waitLogin == false && <button className="login__form--button">Log in</button>}
                    {waitLogin == true && <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>}
                </form>
                {message && <Modal message={message} showModal={handleModal}/>}
            </section>
        </main>  
}

export default withRouter(Login)