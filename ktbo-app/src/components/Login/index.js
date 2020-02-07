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
        {/* <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1"/>
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form> */}
    
    
    
    
   
            <section className="login__content">
                <h2 className="login__title">Login</h2>
                <form className="" onSubmit={handleSubmit}>
                    <div className="form-group">
                    
                    <input className="form-control" placeholder="e-mail" type="email" name="email" />
                    
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                    <input className="form-control" placeholder="password" type="password" name="password" />
                    </div>
                    {waitLogin == false && <button className="login__form--button">Log in</button>}
                    {waitLogin == true && <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>}
                    
                </form>
                {message && <Modal message={message} showModal={handleModal}/>}
            </section>
        
</>
        )
}

export default withRouter(Login)