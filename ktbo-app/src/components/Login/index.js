/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useContext } from 'react'
import Context from '../Context'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import logic from '../../logic'
import { withRouter } from 'react-router-dom'
import 'bulma/css/bulma.min.css';

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
<article class="message is-danger">
  <div class="message-header">
    <p>Danger</p>
    <button class="delete" aria-label="delete"></button>
  </div>
  <div class="message-body">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
  </div>
</article>
        
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
                     <input type="text" class="form-control" name="email" placeholder="Email"/>
                  </div>
                  <div class="form-group">
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