/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect, useContext} from 'react'
import { withRouter } from 'react-router-dom'
import logic from '../../logic'
import Modal from '../Modal'
import Context from '../Context'

function MyAccount({history}) {

  const {setCat} = useContext(Context)

  const [message, setMessage] = useState(null)
  const {user} = useContext(Context)

  useEffect(() => {
    setCat()
  },[])

  function handleSubmit(event) {
    event.preventDefault()
    let { target: { old: { value: oldP }, new: { value: newP } }} = event
    handleUpdate(oldP, newP)
      event.target.old.value = ''
      event.target.new.value = ''
  }

  function handleModal() {
    setMessage(null) 
  }

  async function handleUpdate(oldP, newP) {
    try {
      const { message } = await logic.updateUser(oldP, newP)
      const messageOk = message     
      setMessage(messageOk)
    } catch ({message}) {
      setMessage(message)  
    }
  }

  return <section className="myAccount">
    <h1>My Account</h1>
    <div className="myAccount__updateUser">
      <p>Name: {user.name}</p>
      <p>Surname: {user.surname}</p>
      <p>Company: {user.company}</p>
      <p>Country: {user.country}</p>
      <p>Email: {user.email}</p>

      <h2>Update Password</h2>
      <form className="myAccount__update-user--form" onSubmit={handleSubmit}>
        <p>1 upper case, 1 number, 1 lower case, length 8</p>
        <input placeholder="Old Password" type="password" name="old" defaultValue="" ></input>
        <input placeholder="New Password" type="password" name="new" defaultValue="" ></input>
        <button>Submit</button>
      </form>
    </div>
    {message && <Modal  message={message} showModal={handleModal}/>}
  </section>
}

export default withRouter(MyAccount)