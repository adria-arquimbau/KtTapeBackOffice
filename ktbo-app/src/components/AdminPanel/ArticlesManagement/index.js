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
                const {title, description, img, quantity, ref} = article
                if(quantity != 0) {
                    warningBackground = "p-2"
                }

                if(quantity == 0) {
                    warningBackground = "p-2 bg-warning"
                }
                
                return <div class="d-flex flex-row">
                <div class="p-2">{ref}</div>
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-secondary">Info</button>
                    <button type="button" class="btn btn-secondary">Edit</button>
                </div>
                <div class="p-2">{title}</div>
                <div class={warningBackground}>{quantity}</div>
                
              </div>
                
                
            })}
            
            
        </div>
    )
}

export default withRouter(ArticlesManagement)