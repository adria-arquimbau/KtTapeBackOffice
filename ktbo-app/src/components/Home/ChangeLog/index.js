/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useContext, useState} from 'react'
import Context from '../../Context'
import logic from '../../../logic'
import Modal from '../../Modal'

function ChangeLog() {

  const {setCat} = useContext(Context)
  const [message, setMessage] = useState()  
  const [suggestionsValue, setSuggestionsValue] = useState("")

  useEffect(() => {
    setCat()
  },[])

  function handleSuggestions (event){
    event.preventDefault()
    let { target: { subject: { value: subject } }} = event
    if(!subject)
      setMessage("You must write something")
    if(subject)
      sendSuggestions(subject)
  }

  async function sendSuggestions(subject){
    try {
      const sugestion = await logic.sendSuggestionsEmail(subject)
      
      setSuggestionsValue("")
      setMessage(sugestion + "Suggestion send, thanks for the support")
    } catch ({message}) {
      setMessage(message)
    }
  }

function handleModal() {
  setMessage(null) 
}
    
  return (
<section>
    {message && <Modal  message={message} showModal={handleModal}/>}
    <form onSubmit={handleSuggestions}>
      <p>We welcome any suggestions regarding the current functionality of the website</p>
      <textarea name="subject" placeholder="Suggestions..." value={suggestionsValue} onChange={event => setSuggestionsValue(event.target.value) }></textarea>
      <button>Send</button>
    </form>
    <div class="card text-center card-body-changelog">
    <div class="card-header">
      Change Log
    </div>
    <div class="card-body">

    

    <div class="accordion" id="accordionExample">

      <div class="card">
        <div class="card-header" id="headingOne">
          <h2 class="mb-0">
            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            BETA 0.15.0 - 11/1/2020        </button>
          </h2>
        </div>
        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
          <div class="card-body">
            <ul>
              <li> Added Register Article to admin panel</li>
              <li> Can't update an article with an used reference</li>
              <li> Can't create an article with an used reference</li>
              <li> Beta Version Modal Added</li>
              <li> Beta message to nav bar</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="headingTwo">
          <h2 class="mb-0">
            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            BETA 0.14.1 - 11/1/2020
            </button>
          </h2>
        </div>
        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
          <div class="card-body">
          <ul>
            <li> Fix bug of security password requeriments at Admin Panel New User, and My Account change password </li>
            <li> Changed delete user place holder for Your admin password</li>
              </ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="headingThree">
          <h2 class="mb-0">
            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            BETA 0.14.0 - 9/1/2020
            </button>
          </h2>
        </div>
        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
          <div class="card-body">
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
          </div>
        </div>
      </div>
      </div>

      <div class="accordion" id="accordionExample">
      <div class="card">
        <div class="card-header" id="heading102">
          <h2 class="mb-0">
            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse102" aria-expanded="false" aria-controls="collapse102">
            BETA 0.13.0 - 26/10/2019        </button>
          </h2>
        </div>
        <div id="collapse102" class="collapse" aria-labelledby="heading102" data-parent="#accordionExample">
          <div class="card-body">
          <ul>
            <li>Added remove all cart on each user of Admin Panel</li>
          </ul>
          </div>
        </div>
      </div>
      </div>

      <div class="accordion" id="accordionExample">
      <div class="card">
        <div class="card-header" id="heading103">
          <h2 class="mb-0">
            <button class="btn btn-link collapsed collapsed" type="button" data-toggle="collapse" data-target="#collapse103" aria-expanded="false" aria-controls="collapse103">
            BETA 0.12.1 - 15/10/2019        </button>
          </h2>
        </div>
        <div id="collapse103" class="collapse" aria-labelledby="heading103" data-parent="#accordionExample">
          <div class="card-body">
          <ul>
            <li>Fixed Bug of infinite useEffect requests of user to API</li>
          </ul>
          </div>
        </div>
      </div>
      </div>

      <div class="accordion" id="accordionExample">
      <div class="card">
        <div class="card-header" id="heading100">
          <h2 class="mb-0">
            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse100" aria-expanded="false" aria-controls="collapse100">
            BETA 0.12.0 - 10/10/2019        </button>
          </h2>
        </div>
        <div id="collapse100" class="collapse" aria-labelledby="heading100" data-parent="#accordionExample">
          <div class="card-body">
          <ul>
            <li>Changed Placeholder of input to add quantity to cart for "1"</li>
            <li>Added conditional to API if quantioty to add to cart is less than 0 change quantity to 1</li>
            <li>Improved and customized buttons, inputs and text to add and remove on cart article</li>
            <li>Customized styles of each function of Admin Panel</li>
            <li>Added number of quantity to cart in each article button of search</li>
          </ul>
          </div>
        </div>
      </div>
      </div>

      <div class="accordion" id="accordionExample">
      <div class="card">
        <div class="card-header" id="heading90">
          <h2 class="mb-0">
            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse90" aria-expanded="false" aria-controls="collapse90">
            BETA 0.11.0 - 9/10/2019        </button>
          </h2>
        </div>
        <div id="collapse90" class="collapse" aria-labelledby="heading90" data-parent="#accordionExample">
          <div class="card-body">
          <ul>
            <li>New design of Admin Panel</li>
            <li>Delete individual url for register user and brought to the admin panel</li>
            <li>Add information of actual cart of each user on Admin Panel Retrieve All Users</li>
            <li>Create one sass file for each admin panel function with his correctly BEM</li>
          </ul>
          </div>
        </div>
      </div>
      </div>

      <div class="accordion" id="accordionExample">
      <div class="card">
        <div class="card-header" id="heading80">
          <h2 class="mb-0">
            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse80" aria-expanded="false" aria-controls="collapse80">
            BETA 0.10.1 - 9/10/2019        </button>
          </h2>
        </div>
        <div id="collapse80" class="collapse" aria-labelledby="heading80" data-parent="#accordionExample">
          <div class="card-body">
          <ul>
            <li>Fixed Bug to render categories</li>
            <li>Fixed bug of the modal on search results, in which when jumping it was seen by collision with the z-index of hover:before article</li>
          </ul>
          </div>
        </div>
      </div>
      </div>

      <div class="accordion" id="accordionExample">
      <div class="card">
        <div class="card-header" id="heading70">
          <h2 class="mb-0">
            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse70" aria-expanded="false" aria-controls="collapse70">
            BETA 0.10.0 - 8/10/2019        </button>
          </h2>
        </div>
        <div id="collapse70" class="collapse" aria-labelledby="heading70" data-parent="#accordionExample">
          <div class="card-body">
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
          </div>
        </div>
      </div>
      </div>

      <div class="accordion" id="accordionExample">
      <div class="card">
        <div class="card-header" id="heading60">
          <h2 class="mb-0">
            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse60" aria-expanded="false" aria-controls="collapse60">
            BETA 0.9.0 - 7/10/2019       </button>
          </h2>
        </div>
        <div id="collapse60" class="collapse" aria-labelledby="heading60" data-parent="#accordionExample">
          <div class="card-body">
          <ul>
            <li>Customized and improve the categories url, without %20 and "KTTAPE"</li>
            <li>Category without articles should be throw a error, and are a status 200 error. Change to error and ifnorm with Feedback o Modal</li>
            <li>Mark with some mode each article if this article is  in the cart</li>
            <li>Delete button of search results delete the all quantity of the cart of this article</li>
            <li>Added delete button for each article on Search results and search results categories if this article is on cart</li>
          </ul>
          </div>
        </div>
      </div>
      </div>

      <div class="accordion" id="accordionExample">
      <div class="card">
        <div class="card-header" id="heading50">
          <h2 class="mb-0">
            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse50" aria-expanded="false" aria-controls="collapse50">
            BETA 0.8.0 - 5/10/2019       </button>
          </h2>
        </div>
        <div id="collapse50" class="collapse" aria-labelledby="heading50" data-parent="#accordionExample">
          <div class="card-body">
          <ul>
            <li>Reset value to search input after submit</li>
            <li>Results input to add quantity without borders</li>
            <li>Moved CategoriesNav to left, and augmented font size</li>
            <li>Fixed bug url at categories</li>
          </ul>
          </div>
        </div>
      </div>
      </div>

      <div class="accordion" id="accordionExample">
      <div class="card">
        <div class="card-header" id="heading40">
          <h2 class="mb-0">
            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse40" aria-expanded="false" aria-controls="collapse40">
            BETA 0.7.0 - 4/10/2019       </button>
          </h2>
        </div>
        <div id="collapse40" class="collapse" aria-labelledby="heading40" data-parent="#accordionExample">
          <div class="card-body">
          <ul>
            <li>In articles menu's / current cart, remove the number into the input after correct submit</li>
            <li>Hamburger menu to categories</li>
            <li>Fix bug to select category, strange rerender..., and going since Home to Cat rendering old categories component</li>
            <li>Results articles and categories fixed for max 4 flex columns</li>
            <li>Retrieve all users inputs without border</li>
          </ul>
          </div>
        </div>
      </div>
      </div>

      <div class="accordion" id="accordionExample">
        <div class="card">
          <div class="card-header" id="heading30">
            <h2 class="mb-0">
              <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse30" aria-expanded="false" aria-controls="collapse30">
              BETA 0.6.1 - 30/09/2019       </button>
            </h2>
          </div>
          <div id="collapse30" class="collapse" aria-labelledby="heading30" data-parent="#accordionExample">
            <div class="card-body">
              <ul>
                <li>Fixed User Cart account bug</li>
                <li>Added css flex column to change log</li>
                <li>Added initial call to Api to WakeUp Api after login</li>
                <li>Deleted autoselfie functions to admin panel into noSelfie functions</li>
                <li>Fixed bug to "change state" or "remove order" to Admin Panel</li>
                <li>Performed clean code to AdminPanel and App components</li>
                <li>Customized change log css</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      

      <div class="accordion" id="accordionExample">
        <div class="card">
          <div class="card-header" id="heading20">
            <h2 class="mb-0">
              <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse20" aria-expanded="false" aria-controls="collapse20">
              BETA 0.6.0 - 28/09/2019       </button>
            </h2>
          </div>
          <div id="collapse20" class="collapse" aria-labelledby="heading20" data-parent="#accordionExample">
            <div class="card-body">
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
          </div>
        </div>
      </div>
      </div>

    </div>
    <div class="card-footer text-muted">
      
    </div>
  </div>
  </section>
  );
}

export default ChangeLog