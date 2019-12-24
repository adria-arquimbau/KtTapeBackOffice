/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { withRouter } from 'react-router-dom'

function ArticlesManagement({ allArticles }) {

    return <section className="">
        <h1>All articles</h1>
        {allArticles && allArticles.map(article =>{
            const {ref, title, description, img, quantity, category, price} = article

            return <form>
                <ul>
                    <li>Ref:<input placeholder={ref}></input></li>  
                    <li>Title:<input placeholder={title}></input></li>
                    <li>Description:<input placeholder={description}></input></li>
                    <li>Img url:<input placeholder={img}></input></li>
                    <li>Quantity:<input placeholder={quantity}></input></li>
                    <li>Category:
                        <select name="categories">
                            <option value={category}>Current category: {category}</option> 
                            <option value="KTTape Pro Precut">KTTape Pro Precut</option> 
                            <option value="KTTape Pro Uncut">KTTape Pro Uncut</option> 
                            <option value="KTTape Pro Limited Edition">KTTape Pro Limited Edition</option>
                            <option value="KTTape Pro Jumbo Precut">KTTape Pro Jumbo Precut</option> 
                            <option value="KTTape Pro Jumbo Uncut">KTTape Pro Jumbo Uncut</option> 
                            <option value="KTTape Original Precut">KTTape Original Precut</option> 
                            <option value="KTTape Original Uncut">KTTape Original Uncut</option> 
                            <option value="KTTape Original Jumbo Precut">KTTape Original Jumbo Precut</option> 
                            <option value="KTTape Original Jumbo Uncut">KTTape Original Jumbo Uncut</option> 
                            <option value="KTTape Original Jumbo Edema2">KTTape Original Jumbo Edema</option> 
                            <option value="Other Products">Other Products</option> 
                        </select>
                    </li>
                    <li>Price:<input placeholder={price}></input></li>  
                </ul>
                <button>Update</button>
            </form>
        })}
       
    </section>
}

export default withRouter(ArticlesManagement)