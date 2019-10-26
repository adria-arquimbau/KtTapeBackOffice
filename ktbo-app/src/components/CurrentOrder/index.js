/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useContext } from 'react'
import ResultsCart from './ResultsCart'
import { withRouter } from 'react-router-dom'
import Context from '../Context'

function CurrentOrder() {

  const {items} = useContext(Context)
  const {user, goHome} = useContext(Context)
  const {setCat} = useContext(Context)
 
  useEffect(() => {
    setCat()
  },[user, items, goHome])

  return <>
    <section className="currentOrder">
      {items && <ResultsCart />} 
      <h4 className="currentOrder__title">Current Order</h4>    
    </section>
  </>
}

export default withRouter(CurrentOrder)