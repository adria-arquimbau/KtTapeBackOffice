/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect } from 'react'
import Context from '../Context'
import logic from '../../logic'
import { withRouter } from 'react-router-dom'
import Login from '../Login'

function Landing() {

  const { credentials, setUser } = useContext(Context)

  useEffect(() => {
      if (credentials) {
        const { id, token } = credentials
        
        async function retrieve() {
          try {
            const { user: userRetrieved } = await logic.retrieveUser(id, token)
            setUser(userRetrieved)
          } catch(error) {
            console.log(error.message)
          }
        } 

        retrieve()
      }
  },[])

  return  <>
    <section>
      <Login />
    </section>
  </>
}

export default withRouter(Landing)