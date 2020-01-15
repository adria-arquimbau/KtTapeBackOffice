/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from 'react'
import { withRouter, Route } from 'react-router-dom'
//import queryString from 'query-string'
import logic from '../../logic'

import Navigation from '../Navigation'
import Documents from '../Documents'
import MyOrders from '../MyOrders'
import CurrentOrder from '../CurrentOrder'
import MyAccount from '../MyAccount'
import Results from '../Results'
import AdminPanel from '../AdminPanel'
import NewUser from '../AdminPanel/NewUser'
import ChangeLog from './ChangeLog'
import Context from '../Context'
import ResultsCategories from '../Results/ResultsCategories'
import ModalBetaInfo from '../ModalBetaInfo'

function Home({history}) {

  const {betaVersionMessage, setBetaVersionMessage} = useContext(Context)
  const {cat} = useContext(Context)
  const {setItems} = useContext(Context)
  const {interruptorItems} = useContext(Context)
  const {articles, setArticles} = useContext(Context)

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
        setItems(items)
        }
    } catch (error) {
      //TODO SetError(error)
    }
  }

  function handleModal() { 
    setBetaVersionMessage(false) 
 }
  
  return <>
    {logic.isUserLogged() &&
      <header className="header">
        <section className="superior">
          <div className="superior__container">
            <img className="superior__image" alt="" src="https://kttape.es/wp-content/uploads/2019/02/Logo-sense-fons-dreta-blanc.png" />
            <section className="superior__conditions">
            <a className="superior__conditions--privacy"  href="https://kttape.es/privacy-policy/" >Privacy Policy</a>            
            <a className="superior__conditions--terms"  href="https://kttape.es/terms-of-use/" >Terms of Use</a>
            <p className="superior__conditions--terms">v-0.14.0</p>
            </section>
          </div>
        </section>
      </header>
    }
    {logic.isUserLogged() &&<div className="header__sticky-nav">
        <Navigation onSearch={handleSearch} />
      </div>
    }
    <main className="home"> 
{   betaVersionMessage === false && <div className="home-beta-container"><p className="home-beta-container__message">This is a pre-release BETA version. This Beta version does not represent the final quality of the back office. Thank you for your understanding and support.</p></div>
}
          {betaVersionMessage && <ModalBetaInfo betaVersionMessage={betaVersionMessage} showModal={handleModal}/>}
          <Route exact path="/home" render={() => !logic.isUserLogged() ? history.push('/') : <ChangeLog /> } /> 
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