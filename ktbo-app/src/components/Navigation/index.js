/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect, useContext} from 'react'
import Search from '../Search'
import { withRouter } from 'react-router-dom'
import logic from '../../logic'
import Context from '../Context'

function Navigation({ history, onSearch }) {

    const {user} = useContext(Context)
    const {items} = useContext(Context)
    const {cat, setCat} = useContext(Context)
    const [admin, setAdmin] = useState()

    useEffect(() => {
        handleAdmin()
    },[cat])
    
    function handleHome() { history.push('/home') }
    function handleMyOrders() { history.push('/home/my-orders') }
    function handleCurrentOrder() { history.push('/home/current-order') }
    function handleMyAccount() { history.push('/home/my-account') }
    function handleAdminPanel() { history.push('/home/admin-panel') }
    /* function handleDocumenyarn ts() { history.push('/home/documents') } */
    function handleLogout (){
        delete sessionStorage.id
        delete sessionStorage.token
    }
    
    async function handleAdmin() {
        try {
            const res = await logic.isUserAdmin()
            if(res === true) setAdmin(res)
        } catch (error) {
            //TODO
        }
    }

    async function onCategory(category){
        try {
            const response = await logic.retrieveCategory(category)
            setCat(response)
            let catUrl
            (function makeItBetterUrl() {
                catUrl = category.split(' ').join('-')
                catUrl = catUrl.split('KTTape').join('')
                if(catUrl[0] === '-') catUrl = catUrl.substr(1)
            })()
            history.push(`/home/category/${catUrl}`)
        } catch (error) {
            setCat(error)
        }
    }

    return <>
 
        <section className="navigation">
            <ul className="navigation__ul sticky">
                <li className="navigation__li"><a className="navigation__li--anchor" href="#" onClick={event => { event.preventDefault() 
                    handleHome() }}>Home</a></li>
                {/* <li className="navigation__li"><a href="#" onClick={event => { event.preventDefault() 
                    handleDocuments() }}>Documents</a></li> */}
                <div className="dropdown">
                    <button className="dropbtn" >Categories<i className="fa fa-caret-down"></i></button>
                    <div className="dropdown-content">
                        <ul>
                                    <li><a className="dropdown-content__text" href="#" onClick={event => { event.preventDefault() 
                            const category = "KTTape Pro Precut"
                            onCategory(category) }}>Pro Precut</a></li>
                                    <li><a className="dropdown-content__text" href="#" onClick={event => { event.preventDefault() 
                            const category = "KTTape Pro Uncut" 
                            onCategory(category) }}>Pro Uncut</a></li>
                                    <li><a className="dropdown-content__text" href="#" onClick={event => { event.preventDefault() 
                            const category = "KTTape Pro Limited Edition" 
                            onCategory(category) }}>Pro Limited Edition</a></li>
                                    <li><a className="dropdown-content__text" href="#" onClick={event => { event.preventDefault() 
                            const category = "KTTape Pro Jumbo Precut" 
                            onCategory(category) }}>Pro Jumbo Precut</a></li>
                            <li><a className="dropdown-content__text" href="#" onClick={event => { event.preventDefault() 
                            const category = "KTTape Pro Jumbo Uncut" 
                            onCategory(category) }}>Pro Jumbo Uncut</a></li>
                        </ul>
                        <ul>
                                    <li><a className="dropdown-content__text" href="#" onClick={event => { event.preventDefault()  
                        const category = "KTTape Original Precut"  
                            onCategory(category) }}>Original Precut</a></li>
                                    <li><a className="dropdown-content__text" href="#" onClick={event => { event.preventDefault() 
                        const category = "KTTape Original Uncut" 
                            onCategory(category) }}>Original Uncut</a></li>
                                    <li><a className="dropdown-content__text" href="#" onClick={event => { event.preventDefault() 
                        const category = "KTTape Original Jumbo Precut" 
                            onCategory(category) }}>Original Jumbo Precut</a></li>
                                    <li><a className="dropdown-content__text" href="#" onClick={event => { event.preventDefault() 
                        const category = "KTTape Original Jumbo Uncut" 
                            onCategory(category) }}>Original Jumbo Uncut</a></li>
                            <li><a className="dropdown-content__text" href="#" onClick={event => { event.preventDefault() 
                        const category = "KTTape Original Jumbo Edema" 
                        onCategory(category) }}>Original Jumbo Edema</a></li>
                        </ul>
                        <ul> 
                                    <li><a className="dropdown-content__text" className="categoriesCont__otherProducts" href="#" onClick={event => { event.preventDefault() 
                        const category = "Other Products" 
                        onCategory(category) }}>Other Products</a></li>
                        </ul>
                    </div>
                </div>   
                <li className="navigation__li"><Search onSearch={onSearch} /></li>

                              
                <li className="navigation__li"><a className="navigation__li--anchor" href="#" onClick={event => { event.preventDefault() 
                    handleMyOrders() }}>My Orders</a></li>
                {user &&<div className="dropdown">
                    <button className="dropbtn" >Hello, {user.company}<i className="fa fa-caret-down"></i></button>
                    <div className="dropdown-content">
                        <a className="dropdown-content__text navigation__li--anchor" href="#" onClick={event => { event.preventDefault() 
                                handleMyAccount() }}>My Account</a>
                        {admin && <a className="dropdown-content__text navigation__li--anchor" href="#" onClick={event => { event.preventDefault() 
                                handleAdminPanel() }}>Admin Panel</a>}
                        <a className="dropdown-content__text navigation__li--anchor" href="" onClick={handleLogout}>Logout</a>
                    </div>
                </div>}
                {items && items.length > 0 && <li className="navigation__li"><a className="navigation__li--anchor" href="#" onClick={event => { event.preventDefault() 
                    handleCurrentOrder() }}>Your Order {items.length}</a></li>}
            </ul>  
        </section>
    </>
}

export default withRouter(Navigation)