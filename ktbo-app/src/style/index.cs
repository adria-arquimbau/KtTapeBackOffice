button {
  background: #f57b1f;
  border-color: rgba(51, 51, 51, 0.6);
  border-radius: 2px;
  padding: 7px;
  margin: 5px;
  border: 0;
}

button:hover {
  background-color: rgba(245, 123, 31, 0.5);
  color: white;
}

input {
  padding: 7px;
  border-radius: 2px;
  border-width: 1px;
}

.navigation {
  width: 100vw;
  background-color: #f57b1f;
}
.navigation form {
  display: flex;
  justify-content: center;
  align-content: center;
}
.navigation button {
  cursor: pointer;
}
.navigation__search--input {
  background-color: rgba(255, 255, 255, 0.5);
  border: 0;
  text-align: right;
  font-size: 0.9rem;
  width: 6rem;
  color: #333333;
  height: 10px;
  margin-top: 0.5rem;
}
.navigation__search--button {
  border: 0;
  color: #333333;
  font-size: 0.9rem;
}
.navigation ul {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  list-style: none;
}
.navigation__li {
  margin: 0 0.5rem 0 0.5rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333333;
}
.navigation__li--anchor {
  color: #333333;
  text-decoration: none;
  font-size: 0.9rem;
}
.navigation__li--anchor:hover {
  color: white;
}
.navigation__li--hello {
  color: #333333;
  font-size: 10px;
}

/* Navbar container */
.navbar {
  overflow: hidden;
  background-color: #333;
  font-family: Arial;
}

/* Links inside the navbar */
.navbar a {
  float: left;
  font-size: 16px;
  color: white;
  text-align: left;
  padding: 14px 16px;
  text-decoration: none;
}

/* The dropdown container */
.dropdown {
  float: left;
  overflow: hidden;
}
.dropdown button {
  font-size: 0.9rem;
}

/* Dropdown button */
.dropdown .dropbtn {
  border: none;
  outline: none;
  color: #333333;
  padding: 10px 10px;
  background-color: inherit;
  /* Important for vertical align on mobile phones */
  font-family: inherit;
  /* Important for vertical align on mobile phones */
  margin: 0;
}

/* Add a red background color to navbar links on hover */
.navbar a:hover, .dropdown:hover .dropbtn {
  color: white;
}

/* Dropdown content (hidden by default) */
.dropdown-content {
  display: none;
  text-align: left;
  position: absolute;
  float: left;
  background-color: white;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  float: none;
  color: #333333;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: center;
}

/* Add a grey background color to dropdown links on hover */
.dropdown-content a:hover {
  color: #f57b1f;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  text-align: left;
  display: block;
}

.dropdown-content__text {
  font-size: 14px;
}
.dropdown-content ul {
  padding: 0.5rem;
}
.dropdown-content ul li {
  font-size: 14px;
  padding: 0.5rem 0 0.5rem 0;
  margin: 0;
}

button {
  background: #f57b1f;
  border-color: rgba(51, 51, 51, 0.6);
  border-radius: 2px;
  padding: 7px;
  margin: 5px;
  border: 0;
}

button:hover {
  background-color: rgba(245, 123, 31, 0.5);
  color: white;
}

input {
  padding: 7px;
  border-radius: 2px;
  border-width: 1px;
}

.header {
  width: 100vw;
}
.header__sticky-nav {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 10;
}

@media screen and (min-width: 400px) {
  .superior {
    background-color: #333333;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .superior__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 65%;
  }
  .superior__conditions {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-left: 10rem;
  }
  .superior__conditions--privacy, .superior__conditions--terms {
    color: white;
    text-decoration: none;
    font-size: 0.8rem;
    font-weight: bold;
  }
  .superior__conditions--privacy {
    padding-bottom: 0.3rem;
  }
  .superior__conditions--privacy:hover, .superior__conditions--terms:hover {
    color: #f57b1f;
  }
  .superior__image {
    max-width: 100px;
    margin: 0.5rem 0 0.5rem 0;
  }
}
@media screen and (min-width: 0px) and (max-width: 400px) {
  .superior {
    background-color: #333333;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .superior__container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .superior__conditions--privacy, .superior__conditions--terms {
    display: none;
  }
  .superior__image {
    max-width: 100px;
    margin: 0.5rem 0;
  }
}
.footer {
  flex-direction: column;
  justify-content: center;
  text-align: center;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #f57b1f;
  color: #333333;
  position: fixed;
  padding-bottom: 0.5rem;
}
.footer__cont {
  margin: 0.3rem;
  width: 100%;
}
.footer__cont a {
  text-decoration: none;
  color: #333333;
}
.footer__cont--privacity, .footer__cont--terms {
  margin: 0 1rem 0 1rem;
  font-size: 0.8rem;
  font-weight: bold;
}
.footer__rights {
  margin-top: 0.1rem;
}
.footer__rights--a {
  margin: 0;
  text-decoration: none;
  color: #333333;
  font-size: 0.8rem;
}
.footer__cont--privacity:hover, .footer__cont--terms:hover, .footer__rights--a:hover {
  color: white;
}

.change-log {
  text-align: center;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
}
.change-log h1 {
  font-size: 20px;
}
.change-log__title {
  margin: 0.5rem;
  color: #333333;
}
.change-log__all-logs {
  text-align: center;
  flex-direction: column;
  color: #333333;
}
.change-log__version {
  margin-top: 1rem;
  padding: 1rem 1.5rem 1rem 1.5rem;
  border-radius: 5px;
  background-color: rgba(245, 123, 31, 0.5);
  text-align: left;
}
.change-log__version--title {
  margin: 0 0 1rem 0;
  color: #333333;
  font-size: 15px;
  text-align: center;
}
.change-log ul {
  list-style: circle;
}

.cartButton__feedback {
  font-size: 10px;
}
.cartButton__input {
  font-size: 1rem;
  height: 0.7rem;
  width: 5rem;
}

button {
  background: #f57b1f;
  border-color: rgba(51, 51, 51, 0.6);
  border-radius: 2px;
  padding: 7px;
  margin: 5px;
  border: 0;
}

button:hover {
  background-color: rgba(245, 123, 31, 0.5);
  color: white;
}

input {
  padding: 7px;
  border-radius: 2px;
  border-width: 1px;
}

.login {
  background-image: url("athlete-landing.jpg");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 94vh;
  background-position: center;
}
.login__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 20%;
  padding: 1rem;
  margin-top: 3rem;
  color: #333333;
}
.login__title {
  display: flex;
  justify-content: center;
  color: #333333;
}
.login__form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.login__form input::placeholder {
  color: rgba(255, 255, 255, 0.5);
  font-weight: bold;
}
.login__form--button {
  width: 5rem;
  background-color: #f57b1f;
  border: 0;
  font-weight: bold;
}
.login__form--button:hover {
  background-color: rgba(245, 123, 31, 0.5);
}
.login__form--email, .login__form--password {
  margin: 1rem;
  outline: none;
  background-color: rgba(255, 255, 255, 0.1);
  color: #333333;
  text-align: center;
  border: 0;
  width: 10rem;
}

button {
  background: #f57b1f;
  border-color: rgba(51, 51, 51, 0.6);
  border-radius: 2px;
  padding: 7px;
  margin: 5px;
  border: 0;
}

button:hover {
  background-color: rgba(245, 123, 31, 0.5);
  color: white;
}

input {
  padding: 7px;
  border-radius: 2px;
  border-width: 1px;
}

.currentOrder {
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
}
.currentOrder li {
  list-style: none;
}
.currentOrder__articles {
  width: 100vw;
}
.currentOrder__articles input {
  font-size: 1rem;
  height: 1rem;
  width: 6rem;
  color: #333333;
}
.currentOrder__article {
  grid-template-columns: 100px 250px 100px 165px 125px 170px 150px 103px;
  grid-row-gap: 1px;
  grid-column-gap: 0;
  display: grid;
  justify-content: center;
}
.currentOrder__article input {
  width: 73px;
}
.currentOrder__article--param {
  display: grid;
  align-content: center;
  margin-right: 0.5rem;
  color: #333333;
}
.currentOrder__title {
  width: 100vw;
  margin: 1rem 0 0 0;
  text-align: center;
  color: #333333;
}
.currentOrder__placeOrder {
  margin: 2rem 2rem 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.currentOrder__totalPrice {
  color: #333333;
  margin: 2rem;
}

button {
  background: #f57b1f;
  border-color: rgba(51, 51, 51, 0.6);
  border-radius: 2px;
  padding: 7px;
  margin: 5px;
  border: 0;
}

button:hover {
  background-color: rgba(245, 123, 31, 0.5);
  color: white;
}

input {
  padding: 7px;
  border-radius: 2px;
  border-width: 1px;
}

.myOrders {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.myOrders__title {
  width: 100vw;
  margin-top: 1rem;
  text-align: center;
  color: #333333;
}
.myOrders__order {
  margin-top: 3rem;
  grid-template-columns: 800px 500px;
  grid-row-gap: 1px;
  grid-column-gap: 9px;
  display: grid;
  justify-content: center;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  overflow: hidden;
}
.myOrders__order:before {
  content: "";
  position: absolute;
  z-index: -1;
  left: 51%;
  right: 51%;
  top: 0;
  background: #f57b1f;
  height: 4px;
  -webkit-transition-property: left, right;
  transition-property: left, right;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.myOrders__order:hover:before, .myOrders__order:focus:before, .myOrders__order:active:before {
  left: 0;
  right: 0;
}
.myOrders__order:hover {
  position: relative;
  z-index: 3;
}
.myOrders__order--data {
  grid-template-columns: 175px 120px 190px;
  grid-row-gap: 5px;
  grid-column-gap: 9px;
  display: grid;
  justify-content: center;
  margin-top: 1rem;
}
.myOrders__orderCont--items {
  margin-top: 1rem;
}
.myOrders__order--items {
  margin-bottom: 0.5rem;
  grid-template-columns: 75px 280px 100px 100px 150px;
  grid-row-gap: 5px;
  grid-column-gap: 9px;
  display: grid;
  justify-content: center;
}
.myOrders__order:hover .status__pending {
  color: orange;
  margin-left: 0.5rem;
  height: 17px;
}
.myOrders__order:hover .status__closed {
  color: red;
  margin-left: 0.5rem;
  height: 17px;
}

.status {
  display: flex;
}
.status__pending {
  color: #333333;
  margin-left: 0.5rem;
}
.status__closed {
  color: #333333;
  margin-left: 0.5rem;
}

.abc {
  margin-top: 1rem;
}

button {
  background: #f57b1f;
  border-color: rgba(51, 51, 51, 0.6);
  border-radius: 2px;
  padding: 7px;
  margin: 5px;
  border: 0;
}

button:hover {
  background-color: rgba(245, 123, 31, 0.5);
  color: white;
}

input {
  padding: 7px;
  border-radius: 2px;
  border-width: 1px;
}

.feedback {
  text-align: center;
  padding: 0.3rem;
  color: #333333;
}
.feedback--error {
  color: red;
}
.feedback--warn {
  background-color: yellow;
}
.feedback--success {
  color: green;
}

button {
  background: #f57b1f;
  border-color: rgba(51, 51, 51, 0.6);
  border-radius: 2px;
  padding: 7px;
  margin: 5px;
  border: 0;
}

button:hover {
  background-color: rgba(245, 123, 31, 0.5);
  color: white;
}

input {
  padding: 7px;
  border-radius: 2px;
  border-width: 1px;
}

.searchResultMainContenedor {
  display: flex;
  justify-content: center;
}

.searchResult {
  display: flex;
  flex-wrap: wrap;
  width: 85vw;
  padding-bottom: 4rem;
  justify-content: center;
}
.searchResult input {
  border: 0;
  background-color: rgba(51, 51, 51, 0.1);
}
.searchResult li {
  list-style: none;
}
.searchResult p {
  text-decoration-style: bold;
}
.searchResult h4 {
  width: 100vw;
  margin: 2rem 0;
  text-align: center;
  color: #333333;
}
.searchResult__article {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  padding: 5px;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  overflow: hidden;
  height: 350px;
  width: 240px;
}
.searchResult__article::before {
  content: "";
  position: absolute;
  z-index: -1;
  left: 51%;
  right: 51%;
  top: 0;
  background: #f57b1f;
  height: 4px;
  -webkit-transition-property: left, right;
  transition-property: left, right;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.searchResult__article:hover:before, .searchResult__article:focus:before, .searchResult__article:active:before {
  left: 0;
  right: 0;
}
.searchResult__article:hover {
  position: relative;
  z-index: 3;
}
.searchResult__article:hover .cartbutton-form {
  visibility: visible;
}
.searchResult__article--param {
  padding-top: 0.3rem;
  display: flex;
  justify-content: center;
  color: #333333;
}
.searchResult__out-of-stock {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.6rem;
}
.searchResult__out-of-stock h3 {
  padding: 7px;
  margin: 5px;
  color: #f57b1f;
}
.searchResult__on-cart {
  margin-top: 0.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 37px;
}
.searchResult__on-cart--text {
  color: #f57b1f;
  margin: 5px;
  padding: 7px;
  margin-right: 0.25rem;
  text-align: center;
  font-size: 16px;
  max-width: 4rem;
}
.searchResult__on-cart--button {
  cursor: pointer;
  margin: 5px;
  padding: 7px;
  margin-left: 0.25rem;
  width: 8rem;
  background-color: #333333;
  color: #f57b1f;
  height: 30px;
}
.searchResult__on-cart--button:hover {
  background-color: rgba(51, 51, 51, 0.5);
}

.cartbutton-form {
  visibility: hidden;
  margin-top: 0.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 37px;
  -webkit-animation: fadeIn 1s;
}
.cartbutton-form__input {
  margin: 5px;
  padding: 7px;
  width: 4rem;
  margin-right: 0.25rem;
  text-align: center;
  font-size: 16px;
}
.cartbutton-form__button {
  cursor: pointer;
  margin: 5px;
  padding: 7px;
  margin-left: 0.25rem;
  width: 8rem;
  height: 30px;
}

button {
  background: #f57b1f;
  border-color: rgba(51, 51, 51, 0.6);
  border-radius: 2px;
  padding: 7px;
  margin: 5px;
  border: 0;
}

button:hover {
  background-color: rgba(245, 123, 31, 0.5);
  color: white;
}

input {
  padding: 7px;
  border-radius: 2px;
  border-width: 1px;
}

.myAccount {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.myAccount h1 {
  margin: 1rem;
  color: #333333;
}
.myAccount h2 {
  margin: 1rem;
  color: #333333;
}
.myAccount__updateUser {
  padding: 1rem;
  width: 25%;
  height: 25%;
  border-top: 1px solid #333333;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.myAccount__update-user--form {
  display: flex;
  flex-direction: column;
}
.myAccount__update-user--form input {
  margin-top: 1rem;
  border: 0;
  background-color: rgba(51, 51, 51, 0.1);
}
.myAccount__update-user--form button {
  margin: 0;
  margin-top: 1rem;
}

button {
  background: #f57b1f;
  border-color: rgba(51, 51, 51, 0.6);
  border-radius: 2px;
  padding: 7px;
  margin: 5px;
  border: 0;
}

button:hover {
  background-color: rgba(245, 123, 31, 0.5);
  color: white;
}

input {
  padding: 7px;
  border-radius: 2px;
  border-width: 1px;
}

.modal {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid #333333;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.modal p {
  margin: 1rem 2rem 0 2rem;
  text-align: center;
}
.modal__box {
  width: 20%;
  height: 10%;
  border: 0;
  border-radius: 2px;
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.modal__box button {
  width: 40px;
  color: #333333;
}
.modal__box button:hover {
  color: white;
}

button {
  background: #f57b1f;
  border-color: rgba(51, 51, 51, 0.6);
  border-radius: 2px;
  padding: 7px;
  margin: 5px;
  border: 0;
}

button:hover {
  background-color: rgba(245, 123, 31, 0.5);
  color: white;
}

input {
  padding: 7px;
  border-radius: 2px;
  border-width: 1px;
}

.admin-main {
  display: flex;
}
.admin-main__admin-panel {
  min-width: 7.3125rem;
  padding: 1rem 2rem 0rem 2rem;
  margin: 0;
  flex-direction: column;
  background-color: #333333;
  min-height: 100vh;
  height: auto;
}
.admin-main__admin-panel h1 {
  color: white;
}
.admin-main__admin-panel--buttons {
  display: flex;
  flex-direction: column;
  margin: 0;
  margin-top: 2rem;
}
.admin-main__admin-panel--buttons button {
  margin-left: 0;
  margin-right: 0;
  border-radius: 0;
  background-color: #333333;
  color: #f57b1f;
  border-top: 1px solid #f57b1f;
  text-align: left;
}
.admin-main__admin-panel--buttons button:hover {
  cursor: pointer;
}
.admin-main__content {
  color: #333333;
  width: 100vw;
  display: flex;
  margin: 1rem;
  justify-content: center;
}

.statusAdminOrder {
  display: flex;
}
.statusAdminOrder__pending {
  color: yellow;
  margin-left: 0.5rem;
}
.statusAdminOrder__closed {
  color: red;
  margin-left: 0.5rem;
}

button {
  background: #f57b1f;
  border-color: rgba(51, 51, 51, 0.6);
  border-radius: 2px;
  padding: 7px;
  margin: 5px;
  border: 0;
}

button:hover {
  background-color: rgba(245, 123, 31, 0.5);
  color: white;
}

input {
  padding: 7px;
  border-radius: 2px;
  border-width: 1px;
}

.admin-new-user {
  flex-direction: column;
}
.admin-new-user__form {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
}
.admin-new-user__form input {
  margin-top: 0.5rem;
  border: 0;
  background-color: rgba(51, 51, 51, 0.1);
  color: #333333;
}
.admin-new-user__form input::placeholder {
  color: #333333;
}
.admin-new-user__form select {
  margin-top: 0.5rem;
}
.admin-new-user__form button {
  margin: 0;
  margin-top: 0.5rem;
}
.admin-new-user__user {
  margin-top: 1rem;
}
.admin-new-user__user ul {
  border-top: 1px solid #f57b1f;
}
.admin-new-user__user h2 {
  margin: 1rem 0;
  text-align: center;
}

button {
  background: #f57b1f;
  border-color: rgba(51, 51, 51, 0.6);
  border-radius: 2px;
  padding: 7px;
  margin: 5px;
  border: 0;
}

button:hover {
  background-color: rgba(245, 123, 31, 0.5);
  color: white;
}

input {
  padding: 7px;
  border-radius: 2px;
  border-width: 1px;
}

.admin-retrieve-all-orders {
  flex-direction: column;
}
.admin-retrieve-all-orders h1 {
  text-align: center;
}
.admin-retrieve-all-orders__each-order {
  border-top: 1px solid #f57b1f;
  display: flex;
  margin-top: 1rem;
}
.admin-retrieve-all-orders__each-order--company {
  padding: 0.5rem;
}
.admin-retrieve-all-orders__each-order--company li {
  margin-bottom: 0.2rem;
}
.admin-retrieve-all-orders__each-order--articles {
  padding: 1rem;
  margin: 1rem;
}
.admin-retrieve-all-orders__each-order--article {
  display: grid;
  grid-template-columns: minmax(auto, 120px) minmax(auto, 270px) minmax(auto, 110px) minmax(auto, 120px) minmax(auto, 150px);
  grid-auto-flow: dense;
  padding: 0.5rem;
}
.admin-retrieve-all-orders__each-order--article li {
  margin-right: 0.2rem;
}

button {
  background: #f57b1f;
  border-color: rgba(51, 51, 51, 0.6);
  border-radius: 2px;
  padding: 7px;
  margin: 5px;
  border: 0;
}

button:hover {
  background-color: rgba(245, 123, 31, 0.5);
  color: white;
}

input {
  padding: 7px;
  border-radius: 2px;
  border-width: 1px;
}

.admin-retrieve-pending-orders {
  flex-direction: column;
}
.admin-retrieve-pending-orders h1 {
  text-align: center;
}
.admin-retrieve-pending-orders__each-order {
  border-top: 1px solid #f57b1f;
  display: flex;
  margin-top: 1rem;
}
.admin-retrieve-pending-orders__each-order--buttons button {
  margin: 0;
  width: 100%;
  margin-top: 0.5rem;
}
.admin-retrieve-pending-orders__each-order--button-remove button {
  background-color: #333333;
  color: #f57b1f;
}
.admin-retrieve-pending-orders__each-order--button-remove button:hover {
  background-color: rgba(51, 51, 51, 0.5);
  color: white;
}
.admin-retrieve-pending-orders__each-order--company {
  padding: 0.5rem;
}
.admin-retrieve-pending-orders__each-order--company li {
  margin-bottom: 0.2rem;
}
.admin-retrieve-pending-orders__each-order--articles {
  padding: 1rem;
  margin: 1rem;
}
.admin-retrieve-pending-orders__each-order--article {
  display: grid;
  grid-template-columns: minmax(auto, 120px) minmax(auto, 270px) minmax(auto, 110px) minmax(auto, 120px) minmax(auto, 150px);
  grid-auto-flow: dense;
  padding: 0.5rem;
}
.admin-retrieve-pending-orders__each-order--article li {
  margin-right: 0.2rem;
}

button {
  background: #f57b1f;
  border-color: rgba(51, 51, 51, 0.6);
  border-radius: 2px;
  padding: 7px;
  margin: 5px;
  border: 0;
}

button:hover {
  background-color: rgba(245, 123, 31, 0.5);
  color: white;
}

input {
  padding: 7px;
  border-radius: 2px;
  border-width: 1px;
}

.admin-retrieve-users h1 {
  text-align: center;
}
.admin-retrieve-users__each-user {
  margin-top: 1rem;
  border-top: 1px solid #f57b1f;
}
.admin-retrieve-users__each-user input {
  margin-top: 0.5rem;
  border: 0;
  background-color: rgba(51, 51, 51, 0.1);
  color: #333333;
}
.admin-retrieve-users__each-user input::placeholder {
  color: #333333;
}
.admin-retrieve-users__each-user li {
  margin-top: 0.5rem;
}

button {
  background: #f57b1f;
  border-color: rgba(51, 51, 51, 0.6);
  border-radius: 2px;
  padding: 7px;
  margin: 5px;
  border: 0;
}

button:hover {
  background-color: rgba(245, 123, 31, 0.5);
  color: white;
}

input {
  padding: 7px;
  border-radius: 2px;
  border-width: 1px;
}

* {
  font-family: Radnika, sans-serif;
  margin: 0;
}

*:focus {
  outline: none;
}

body {
  width: 100vw;
  height: 100vh;
  padding-bottom: 100px;
}

.superior__image {
  height: auto;
  width: 200px;
}

img {
  max-height: 170px;
  max-width: 200px;
}

html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
  display: block;
}

body {
  line-height: 1;
}

ol, ul {
  list-style: none;
}

blockquote, q {
  quotes: none;
}

blockquote:before, blockquote:after, q:before, q:after {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

/*# sourceMappingURL=index.cs.map */
