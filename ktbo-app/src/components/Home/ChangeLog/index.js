/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useContext} from 'react'
import Context from '../../Context'

function ChangeLog() {

  const {setCat} = useContext(Context)

  useEffect(() => {
    setCat()
  },[])
    
  return <>
    <section className="change-log">
      <h1 className="change-log__title">Change Log</h1>
      <section className="change-log__all-logs">

      <section className="change-log__version">
          <h2 className="change-log__version--title">0.10.1 - 9/10/2019</h2>
          <section>
            <ul>
              <li>Fixed Bug to render categories</li>
              <li>Fixed bug of the modal on search results, in which when jumping it was seen by collision with the z-index of hover:before article</li>
            </ul>
          </section>
        </section>

      <section className="change-log__version">
          <h2 className="change-log__version--title">0.10.0 - 8/10/2019</h2>
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
          <h2 className="change-log__version--title">0.9.0 - 7/10/2019</h2>
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
          <h2 className="change-log__version--title">0.8.0 - 5/10/2019</h2>
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
          <h2 className="change-log__version--title">0.7.0 - 4/10/2019</h2>
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
          <h2 className="change-log__version--title">0.6.1 - 30/09/2019</h2>
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
          <h2 className="change-log__version--title">0.6.0 - 28/09/2019</h2>
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
  </>
}

export default ChangeLog