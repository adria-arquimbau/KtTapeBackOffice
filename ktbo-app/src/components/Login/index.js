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
            setWaitLogin(!waitLogin)
        }
        
    }

    function handleModal() {
        setMessage(null) 
        setWaitLogin(!waitLogin)
    }

    return (
        <>
       <div class="sidenav">
         <div class="login-main-text">
            <h2>Application<br></br> Login Page</h2>
            <p>Login or register from here to access.</p>
         </div>
      </div>
      <div class="main">
         <div class="col-md-6 col-sm-12">
            <div class="login-form">
               <form>
                  <div class="form-group">
                     <label>User Name</label>
                     <input type="text" class="form-control" placeholder="User Name"/>
                  </div>
                  <div class="form-group">
                     <label>Password</label>
                     <input type="password" class="form-control" placeholder="Password"/>
                  </div>
                  <button type="submit" class="btn btn-black">Login</button>
                  <button type="submit" class="btn btn-secondary">Register</button>
               </form>
            </div>
         </div>
      </div>
</>
        )
}

export default withRouter(Login)