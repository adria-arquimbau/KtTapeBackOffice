/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useState, useEffect} from 'react'
import { withRouter } from 'react-router-dom'
import logic from '../../../logic'
import Modal from '../../Modal'

function ArticlesManagement({ allArticles, retrieveAllArticles, searchArticle }) {
    const [message, setMessage] = useState(null)
    const [title, setTitle] = useState("All articles")
    const [query, setQuery] = useState()
    const [thereIsAtLeastOneWithoutStock, setThereIsAtLeastOneWithoutStock] = useState()

    useEffect(() => {
        if(query){
            searchArticle(query)
        }if(!query){
            retrieveAllArticles()
        }
        checkAndSetThereIsAtLeastOneWithoutStock()
    },[message])

    function handleSubmitUpdateArticle(event) {
        event.preventDefault()
        let { target: { id: {value: articleId}, ref: {value: newRef}, title: {value: newTitle}, description: {value: newDescription}, img: {value: newImg}, quantity: {value: newQuantity}, category: {value: newCategory}, price: {value: newPrice} } } = event
        let newQuantityNumber = Number(newQuantity)
        if(newQuantityNumber < 0) newQuantityNumber = 0
        const body = {
            ref: Number(newRef),
            title: newTitle,
            description: newDescription,
            img: newImg,
            quantity: newQuantityNumber,
            category: newCategory,
            price: Number(newPrice)
        }
        updateArticle(articleId, body)
    }

    function checkAndSetThereIsAtLeastOneWithoutStock(){
        allArticles.forEach(article => {
            if(article.quantity === 0)
                return setThereIsAtLeastOneWithoutStock(true)         
        })
    }

    async function updateArticle(articleId, body) {
        try {
            const { message } = await logic.updateArticle(articleId, body)    
            setMessage(message)
        } catch ({message}) {
            setMessage(message)
        }
        checkAndSetThereIsAtLeastOneWithoutStock()
    }

    function handleSearch (event){
        event.preventDefault()
        const {target: {searchArticle: { value: query }}} = event
        searchArticle(query)
        setQuery(query)
        setTitle(query)
        if(query.length === 0) setTitle("All articles")
    }

    function handleModal() {
        setMessage(null) 
      }

    return (
        <div class="d-flex flex-column">
            {allArticles && allArticles.map(article => {
                
                let warningBackground
                const {title, description, img, quantity, ref, category, price} = article
                if(quantity != 0) {
                    warningBackground = "p-2"
                }
                if(quantity == 0) {
                    warningBackground = "p-2 bg-warning"
                }

                let splitTitle = title.split(" ").join("")
debugger
                return <div class="d-flex flex-row">
                <div class="p-2">{ref}</div>
                <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">

                    <button data-toggle="modal" data-target={`#${splitTitle}`} type="button" class="btn btn-secondary">Info</button>
                    <button type="button" class="btn btn-secondary">Edit</button>
                    <button type="button" class="btn btn-secondary">Delete</button>

                    <div class="modal fade" id={`${splitTitle}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Reference: {ref}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p>Name: {title}</p>
                            <p>Description: {description}</p>
                            <p>Image url: {img}</p>
                            <p>Category: {category}</p>
                            <p>Price: {price}</p>
                            <p>quantity: {quantity}</p>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>

                </div>

                </div>
                <div class="p-2">{title}</div>
                <div class={warningBackground}>{quantity}</div>

              
                
              </div>
                
                
            })}
            
            
        </div>
    )
}

export default withRouter(ArticlesManagement)