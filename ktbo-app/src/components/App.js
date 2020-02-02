/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, {useState, useEffect} from 'react'
import { withRouter, Route } from 'react-router-dom'
import Context from './Context'
import logic from '../logic'
//import '../style/index.css'
import Landing from './Landing'
import Home from './Home'


function App({ history }) {

  const [user, setUser] = useState()
  const [interruptorItems, setInterruptorItems] = useState()
  const [goHome, setGoHome] = useState()
  const [cat, setCat] = useState()
  const [articles, setArticles] = useState()
  const [items, setItems] = useState()
  const [betaVersionMessage, setBetaVersionMessage] = useState(true)

  useEffect(async () => {

    if(!logic.isUserLogged()){
      try {
        await logic.wakeUp()
      } catch (error) {
      }
    }

    if(logic.isUserLogged()){
      try {
        const user = await logic.retrieveUser()
        setUser(user)
      } catch (error) {
      }
    }

  },[])

  return <>
    <Context.Provider value={{ user, setUser, goHome, setGoHome, cat, setCat, articles, setArticles, items, setItems, interruptorItems, setInterruptorItems, betaVersionMessage, setBetaVersionMessage }} >
      <div className="App">
      <Route exact path="/" render={() => logic.isUserLogged() ? history.push('/home') : <Landing /> }  />
      {user && <Route path="/home" render={() => logic.isUserLogged() ? <Home /> :  history.push('/')  } /> }   
      </div>
    </Context.Provider>
  </>
}

export default withRouter(App)