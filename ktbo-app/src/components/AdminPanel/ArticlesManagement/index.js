/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { withRouter } from 'react-router-dom'

function ArticlesManagement({ allArticles }) {

    return <section className="">
        <h1>All articles</h1>
        {allArticles && allArticles.map(article =>{
            const {ref, title, description, img, quantity, category, price} = article

            return <ul>
                <li>Ref: {ref}</li>  
                <li>Title: {title}</li>
                <li>Description: {description}</li>
                <li>Img url: {img}</li>
                <li>Quantity: {quantity}</li>
                <li>Category: {category}</li>
                <li>Price: {price}</li>  
            </ul>
        })}
       
    </section>
}

export default withRouter(ArticlesManagement)