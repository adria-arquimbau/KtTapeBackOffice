/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect} from 'react'
import { withRouter } from 'react-router-dom'
import logic from '../../../logic'
import Moment from 'react-moment'
import Feedback from '../../Feedback'

function RetrieveAllUsers({ users }) {
    
    const [message, setMessage] = useState(null)
    
    useEffect(() => {
       
    },[])

    function handleFeedback() {
        setMessage(null) 
    }
    
    return <>
        {message && <Feedback message={message} showFeedback={handleFeedback}/>}

        <section>
            {users && users.user.map(user => {
                const {company, country, email, role, id} = user
                return <ul key={id}>
                    <li>Company: {company}</li>
                    <li>Country: {country}</li>
                    <li>Email: {email}</li>
                    <li>Role: {role}</li>
                </ul>
            })}
        </section>
    </>
}

export default withRouter(RetrieveAllUsers)