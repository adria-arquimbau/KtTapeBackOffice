/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function ChangeLog() {
    
  return <>
    <section className="change-log">
      <h1 className="change-log__title">Change Log</h1>
      <section className="change-log__all-logs">
        <section className="change-log__version">
          <h2 className="change-log__version--title">0.6.0 - 28/09/2019</h2>
          <section>
            <ul>
              <h3 className="change-log__version--h3">Admin Panel</h3>
              <ul>
                <li>Added new component "NewUser"</li>
                <li>Implemented register User with logic modals and feedback</li>
                <li>Added feedback after register user with data of new user</li>
                <li>Added filter, admins can't register admins, just regulars</li>
                <li>Api logic create new user aded throw error / not available for now creating a new admin account</li>
              </ul>
              <ul>
                <h4>Added new component "RetrieveAllUsers"</h4>
                <li>Added button Delete User</li>
                <li>Changed logic of Unregister User and Register User API - Testing doing!</li>
              </ul>
            </ul>
            <ul>
              <h3 className="change-log__version--h3">User</h3>
              <ul>
                <li>Added accountant to current orders menu, with the total of articles inside.</li>
                <li>If cart length = 0 you will be redirectioned to home</li>
              </ul>
            </ul>
            <ul>
              <h3 className="change-log__version--h3">App</h3>
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