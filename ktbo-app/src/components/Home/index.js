/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from 'react'
import { withRouter, Route } from 'react-router-dom'
//import queryString from 'query-string'
import logic from '../../logic'
import { Toast, Row, Col, ButtonToolbar, Modal, Button} from 'react-bootstrap'


import Navigation from '../Navigation'
import Documents from '../Documents'
import MyOrders from '../MyOrders'
import CurrentOrder from '../CurrentOrder'
import MyAccount from '../MyAccount'
import Results from '../Results'
import AdminPanel from '../AdminPanel'
import NewUser from '../AdminPanel/NewUser'
import ChangeLog from '../ChangeLog'
import Context from '../Context'
import ResultsCategories from '../Results/ResultsCategories'
import InfoCenterModal from '../Modals/InfoCenterModal'

function Home({history}) {

  const {cat} = useContext(Context)
  const {setItems} = useContext(Context)
  const {interruptorItems} = useContext(Context)
  const {articles, setArticles} = useContext(Context)
  const {betaMessage, setBetaMessage} = useContext(Context)
  const {totalPriceCart, setTotalPriceCart} = useContext(Context)
  
  const [modalShow, setModalShow] = useState(true)

  const betaMessageString = 'This is a pre-release BETA version. This Beta version does not represent the final quality of the back office. Thank you for your understanding and support'

  useEffect(() => {
    handleCart()
  },[interruptorItems])

  
  async function handleSearch(query) {
    if(query.length > 0){
      const articleList = await logic.searchArticles(query)
      setArticles(articleList)
      history.push(`/home/search/?q=${query}`)
    }else{
      const allArticles = await logic.retrieveAllArticles()
      setArticles(allArticles)
      history.push('/home/search/allArticles')
    }
  }   

  async function handleCart() {
    try {
      const { cart } = await logic.retrieveUser()
        if(cart) {
          let items = await Promise.all(cart.map(item => logic.retrieveArticle(item.article)))
          items = items.map( (item,index) => {
          return { item, quantity: cart[index].quantity}
        })
   debugger
        setItems(items)
        let currentPrice = totalPriceCart
        items.forEach(item => {
          debugger
          let totalItemPrice = item.item.article.price * item.quantity
          currentPrice =+ totalItemPrice
        })
        setTotalPriceCart(currentPrice)
        }
    } catch (error) {
      //TODO SetError(error)
    }
  }

  function handleBetaModal(){
    setModalShow(false)
    setBetaMessage()
  }
  
  return <>
    {logic.isUserLogged() &&<div className="header__sticky-nav">
        <Navigation onSearch={handleSearch} />
      </div>
    }
    <main className="home"> 
          
          {betaMessage && <InfoCenterModal message={betaMessageString} show={modalShow} onHide={handleBetaModal} />}
          <Route exact path="/home" render={() => !logic.isUserLogged() ? history.push('/') : <ChangeLog /> } /> 
          <Route exact path="/home/change-log" render={() => !logic.isUserLogged() ? history.push('/') : <ChangeLog /> } />
          <Route path="/home/documents" render={() => !logic.isUserLogged() ? history.push('/') : <Documents /> } />
          <Route path="/home/my-orders" render={() => !logic.isUserLogged() ? history.push('/') : <MyOrders /> } />
          <Route path="/home/current-order" render={() => !logic.isUserLogged() ? history.push('/') : <CurrentOrder /> } />
          <Route path="/home/my-account" render={() => !logic.isUserLogged() ? history.push('/') : <MyAccount /> } />
          <Route exact path="/home/admin-panel" render={() => !logic.isUserAdmin() ? history.push('/') : <AdminPanel /> } />
          <Route path="/home/admin-panel/new-user" render={() => !logic.isUserLogged() ? history.push('/') : <NewUser /> } />
          <Route path="/home/category" render={() => !logic.isUserLogged() ? history.push('/') : cat && <section><ResultsCategories searchResult={cat} /></section>} />
          <Route path="/home/search" render={() => !logic.isUserLogged() ? history.push('/') : articles &&  <section><Results searchResult={articles} /></section>} />
    </main>
  </>
}

export default withRouter(Home)