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
    const {totalPriceCart} = useContext(Context)
    const [admin, setAdmin] = useState()

    let totalPrice

    useEffect(() => {
        handleAdmin()
    },[cat])
    
    function handleHome() { history.push('/home') }
    function handleMyOrders() { history.push('/home/my-orders') }
    function handleChangeLog(){ history.push('/home/change-log') }
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

    return <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-heigh">

                <a onClick={event => { event.preventDefault() 
                                handleHome() }} className="navbar-brand" href="#"> <img className="superior__image" alt="" src="https://kttape.es/wp-content/uploads/2019/02/Logo-sense-fons-dreta-blanc.png" />
                                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
  
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>

                    <li className="nav-item">
                    <a onClick={event => { event.preventDefault() 
                    handleMyOrders() }} className="nav-link" href="#">My orders</a>
                    </li>

                    <li className="nav-item">
                    <a onClick={event => { event.preventDefault() 
                    handleChangeLog() }} className="nav-link" href="#">Change log</a>
                    </li>

                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-caret-down"></i>
                        Categories
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    
                                    <a className="dropdown-item"  href="#" onClick={event => { event.preventDefault() 
                            const category = "KTTape Pro Precut"
                            onCategory(category) }}>Pro Precut</a>
                                    <a className="dropdown-item"  href="#" onClick={event => { event.preventDefault() 
                            const category = "KTTape Pro Uncut" 
                            onCategory(category) }}>Pro Uncut</a>
                                    <a className="dropdown-item"  href="#" onClick={event => { event.preventDefault() 
                            const category = "KTTape Pro Limited Edition" 
                            onCategory(category) }}>Pro Limited Edition</a>
                                    <a className="dropdown-item"  href="#" onClick={event => { event.preventDefault() 
                            const category = "KTTape Pro Jumbo Precut" 
                            onCategory(category) }}>Pro Jumbo Precut</a>
                            <a className="dropdown-item"  href="#" onClick={event => { event.preventDefault() 
                            const category = "KTTape Pro Jumbo Uncut" 
                            onCategory(category) }}>Pro Jumbo Uncut</a>
                       
                                    <a className="dropdown-item"  href="#" onClick={event => { event.preventDefault()  
                        const category = "KTTape Original Precut"  
                            onCategory(category) }}>Original Precut</a>
                                    <a className="dropdown-item"  href="#" onClick={event => { event.preventDefault() 
                        const category = "KTTape Original Uncut" 
                            onCategory(category) }}>Original Uncut</a>
                                    <a className="dropdown-item"  href="#" onClick={event => { event.preventDefault() 
                        const category = "KTTape Original Jumbo Precut" 
                            onCategory(category) }}>Original Jumbo Precut</a>
                                    <a className="dropdown-item"  href="#" onClick={event => { event.preventDefault() 
                        const category = "KTTape Original Jumbo Uncut" 
                            onCategory(category) }}>Original Jumbo Uncut</a>
                            <a className="dropdown-item"  href="#" onClick={event => { event.preventDefault() 
                        const category = "KTTape Original Jumbo Edema" 
                        onCategory(category) }}>Original Jumbo Edema</a>
                        
                        
                                    <a className="dropdown-item" href="#" onClick={event => { event.preventDefault() 
                        const category = "Other Products" 
                        onCategory(category) }}>Other Products</a>
                        
                    </div>
                </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Hello, {user.company}
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a onClick={event => { event.preventDefault() 
                                handleMyAccount() }} class="dropdown-item" href="#">My Account</a>
                    <a onClick={event => { event.preventDefault() 
                                handleAdminPanel() }} class="dropdown-item" href="#">Admin Panel</a>
                    <a onClick={handleLogout} class="dropdown-item" href="#">Logout</a>
                </div>
            </li>
      </ul>
      
      {items && items.length > 0 && <a onClick={event => { event.preventDefault() 
                    handleCurrentOrder() }} className="nav-link" href="#">
                        <button type="button" class="btn btn-light">
                            Your card <span class="badge badge-light badge-nav-orange">{items.length} / Price: {totalPriceCart} €</span>
                        </button></a>}
        <Search onSearch={onSearch}/>
    </div>
  </nav>
}

export default withRouter(Navigation)