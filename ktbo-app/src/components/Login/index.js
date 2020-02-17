/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useContext } from 'react'
import Context from '../Context'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import logic from '../../logic'
import { withRouter } from 'react-router-dom'

import Modal from '../Modal'

function Login({ history }) {
    
    const [message, setMessage] = useState(null)
    const [waitLogin, setWaitLogin] = useState(false)

    
    const {user, setUser} = useContext(Context)

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
            toast.error(message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
                })
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
         <img src="https://kttape.es/wp-content/uploads/2019/02/Logo-sense-fons-dreta-blanc.png" alt="KtTape Logo"  />
         </div>
      </div>
      <div class="main">
         <div class="col-md-6 col-sm-12">
            <div class="login-form">
               <form onSubmit={handleSubmit}>
                  <div class="form-group">
                     <label>User Name</label>
                     <input type="text" class="form-control" name="email" placeholder="Email"/>
                  </div>
                  <div class="form-group">
                     <label>Password</label>
                     <input type="password" name="password" class="form-control" placeholder="Password"/>
                  </div>
                  <button type="submit" class="btn btn-black">Login</button>
               </form>
            </div>
         </div>
      </div>
      {message && <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnVisibilityChange
                    draggable
                    pauseOnHover
                    /> }
</>
        )
}

export default withRouter(Login)