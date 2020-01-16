/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useContext, useState} from 'react'
import Context from '../../Context'
import nodemailer from 'nodemailer'
import logic from '../../../logic'
import Modal from '../../Modal'

function ChangeLog() {

  const {setCat} = useContext(Context)
  const [message, setMessage] = useState()  


  useEffect(() => {
    setCat()
  },[])

  function handleSuggestions (event){
    event.preventDefault()
    let { target: { subject: { value: subject } }} = event
    sendSuggestions(subject)
  }

  async function sendSuggestions(subject){
    try {
      await logic.sendSuggestionsEmail(subject)
    } catch ({message}) {
      setMessage(message)
    }
  }

function handleModal() {
  setMessage(null) 
}
    
  return <section className="change-log">
    {message && <Modal  message={message} showModal={handleModal}/>}
    <form onSubmit={handleSuggestions}>
      <p>We welcome any suggestions regarding the current functionality of the website</p>
      <textarea name="subject" placeholder="Suggestions..."></textarea>
      <button>Send</button>
    </form>
    <h1 className="change-log__title">Change Log</h1>
    <section className="change-log__all-logs">

    <section className="change-log__version">
        <h2 className="change-log__version--title">BETA 0.14.1 - 11/1/2020</h2>
        <section>
          <ul>
         <li> Fix bug of security password requeriments at Admin Panel New User, and My Account change password </li>
         <li> Changed delete user place holder for Your admin password</li>
          </ul>
        </section>
      </section>

    <section className="change-log__version">
        <h2 className="change-log__version--title">BETA 0.14.0 - 9/1/2020</h2>
        <section>
          <ul>
         <li> Aplied transition for Results button </li>
         <li> Applied opacity for cartbutton form with hover of article</li>
         <li> Optimized background Login</li>
         <li> Fix Bug at Hover cart button for each article</li>
         <li> Functional UserOrdersFromAdmin button All Orders</li>
         <li> NodeMailer runing</li>
         <li> Implemented pending and all orders for each user</li>
         <li> Implemented change state order for each user</li>
         <li> Fixed bug to change password</li>
         <li> Hidden Login button waiting response from server</li>
         <li> Hidden Place Order Button waiting response from server</li>
         <li> Implemented Articles out of stock articles management</li>
         <li> Implemented Articles Management</li>
         <li> Charge button at Login</li>
         <li> Sort retrieve articles ref</li>
         <li> Repeat email and password at register new user from admin panel</li>
         <li> Send customer email after each order</li>
         <li> Send staff email after each order</li>
         <li> Password REGEX</li>
         <li>User schema implemented Name and Surname</li>
         <li>Admin Panel update user email</li>
         <li>Repeat Update Email of Admin Panel</li>
          </ul>
        </section>
      </section>

    <section className="change-log__version">
        <h2 className="change-log__version--title">BETA 0.13.0 - 26/10/2019</h2>
        <section>
          <ul>
            <li>Added remove all cart on each user of Admin Panel</li>
          </ul>
        </section>
      </section>

    <section className="change-log__version">
        <h2 className="change-log__version--title">BETA 0.12.1 - 15/10/2019</h2>
        <section>
          <ul>
            <li>Fixed Bug of infinite useEffect requests of user to API</li>
          </ul>
        </section>
      </section>

    <section className="change-log__version">
        <h2 className="change-log__version--title">BETA 0.12.0 - 10/10/2019</h2>
        <section>
          <ul>
            <li>Changed Placeholder of input to add quantity to cart for "1"</li>
            <li>Added conditional to API if quantioty to add to cart is less than 0 change quantity to 1</li>
            <li>Improved and customized buttons, inputs and text to add and remove on cart article</li>
            <li>Customized styles of each function of Admin Panel</li>
            <li>Added number of quantity to cart in each article button of search</li>
          </ul>
        </section>
      </section>

    <section className="change-log__version">
        <h2 className="change-log__version--title">BETA 0.11.0 - 9/10/2019</h2>
        <section>
          <ul>
            <li>New design of Admin Panel</li>
            <li>Delete individual url for register user and brought to the admin panel</li>
            <li>Add information of actual cart of each user on Admin Panel Retrieve All Users</li>
            <li>Create one sass file for each admin panel function with his correctly BEM</li>
          </ul>
        </section>
      </section>

    <section className="change-log__version">
        <h2 className="change-log__version--title">BETA 0.10.1 - 9/10/2019</h2>
        <section>
          <ul>
            <li>Fixed Bug to render categories</li>
            <li>Fixed bug of the modal on search results, in which when jumping it was seen by collision with the z-index of hover:before article</li>
          </ul>
        </section>
      </section>

    <section className="change-log__version">
        <h2 className="change-log__version--title">BETA 0.10.0 - 8/10/2019</h2>
        <section>
          <ul>
            <li>If some article have empty stock should be throw an error if you want to send to cart</li>
            <li>If stock article is empty, don't show Add Button</li>
            <li>If Place Order have some article with quantity 0, automaticatly send error</li>
            <li>If my Orders is empty, should be throw a error with modal and redirectioned to home.</li>
            <li>Add modal for search products errors to add to cart</li>
            <li>If article quantity sended to cart is 0, automaticly change to 1</li>
            <li>Changed input search style</li>
            <li>Changed system to add quantity on current order, now the submit change the old quantity for the new quantity</li>
            <li>Added setError with Modal on submit a quantity greater than stock number on current cart</li>
          </ul>
        </section>
      </section>

    <section className="change-log__version">
        <h2 className="change-log__version--title">BETA 0.9.0 - 7/10/2019</h2>
        <section>
          <ul>
            <li>Customized and improve the categories url, without %20 and "KTTAPE"</li>
            <li>Category without articles should be throw a error, and are a status 200 error. Change to error and ifnorm with Feedback o Modal</li>
            <li>Mark with some mode each article if this article is  in the cart</li>
            <li>Delete button of search results delete the all quantity of the cart of this article</li>
            <li>Added delete button for each article on Search results and search results categories if this article is on cart</li>
          </ul>
        </section>
      </section>

      <section className="change-log__version">
        <h2 className="change-log__version--title">BETA 0.8.0 - 5/10/2019</h2>
        <section>
          <ul>
            <li>Reset value to search input after submit</li>
            <li>Results input to add quantity without borders</li>
            <li>Moved CategoriesNav to left, and augmented font size</li>
            <li>Fixed bug url at categories</li>
          </ul>
        </section>
      </section>

    <section className="change-log__version">
        <h2 className="change-log__version--title">BETA 0.7.0 - 4/10/2019</h2>
        <section>
          <ul>
            <li>In articles menu's / current cart, remove the number into the input after correct submit</li>
            <li>Hamburger menu to categories</li>
            <li>Fix bug to select category, strange rerender..., and going since Home to Cat rendering old categories component</li>
            <li>Results articles and categories fixed for max 4 flex columns</li>
            <li>Retrieve all users inputs without border</li>
          </ul>
        </section>
      </section>

      <section className="change-log__version">
        <h2 className="change-log__version--title">BETA 0.6.1 - 30/09/2019</h2>
        <section>
          <ul>
            <li>Fixed User Cart account bug</li>
            <li>Added css flex column to change log</li>
            <li>Added initial call to Api to WakeUp Api after login</li>
            <li>Deleted autoselfie functions to admin panel into noSelfie functions</li>
            <li>Fixed bug to "change state" or "remove order" to Admin Panel</li>
            <li>Performed clean code to AdminPanel and App components</li>
            <li>Customized change log css</li>
          </ul>
        </section>
      </section>

      <section className="change-log__version">
        <h2 className="change-log__version--title">BETA 0.6.0 - 28/09/2019</h2>
        <section>
          <ul>
            <li>Added new component "NewUser"</li>
            <li>Implemented register User with logic modals and feedback</li>
            <li>Added feedback after register user with data of new user</li>
            <li>Added filter, admins can't register admins, just regulars</li>
            <li>Api logic create new user aded throw error / not available for now creating a new admin account</li>
            <li>Added new component "RetrieveAllUsers"</li>
            <li>Added button Delete User</li>
            <li>Changed logic of Unregister User and Register User API</li>
            <li>Added accountant to current orders menu, with the total of articles inside.</li>
            <li>If cart length = 0 you will be redirectioned to home</li>
            <li>New component "ChangeLog", implemented into the Home Page</li>
            <li>Added phoenix to package.json API/APP</li>
            <li>Change doc logo, new logo black and orange</li>
          </ul>
        </section>
      </section>
    </section>
  </section>
}

export default ChangeLog