/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function ChangeLog() {
    
  return <>
    <section className="change-log">
      <h1 className="change-log__title">Change Log</h1>
      <section className="change-log__all-logs">
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
              <ul>
                <li>Added new component "NewUser"</li>
                <li>Implemented register User with logic modals and feedback</li>
                <li>Added feedback after register user with data of new user</li>
                <li>Added filter, admins can't register admins, just regulars</li>
                <li>Api logic create new user aded throw error / not available for now creating a new admin account</li>
              </ul>
              <ul>
                <li>Added new component "RetrieveAllUsers"</li>
                <li>Added button Delete User</li>
                <li>Changed logic of Unregister User and Register User API</li>
              </ul>
            </ul>
            <ul>
              <ul>
                <li>Added accountant to current orders menu, with the total of articles inside.</li>
                <li>If cart length = 0 you will be redirectioned to home</li>
              </ul>
            </ul>
            <ul>
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