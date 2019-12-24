/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect, useContext} from 'react'
import { withRouter } from 'react-router-dom'
import logic from '../../../logic'
import Modal from '../../Modal'

function ArticlesManagement({ allArticles, retrieveAllArticles }) {

    const [message, setMessage] = useState(null)
    const [awaitResponse, setAwaitResponse] = useState(false)

    useEffect(() => {
        retrieveAllArticles()
    },[message])

    function handleSubmitUpdateArticle(event) {
        event.preventDefault()
        let { target: { id: {value: articleId}, ref: {value: newRef}, title: {value: newTitle}, description: {value: newDescription}, img: {value: newImg}, quantity: {value: newQuantity}, category: {value: newCategory}, price: {value: newPrice} } } = event
        const body = {
            ref: Number(newRef),
            title: newTitle,
            description: newDescription,
            img: newImg,
            quantity: Number(newQuantity),
            category: newCategory,
            price: Number(newPrice)
        }
        setAwaitResponse(true)
        updateArticle(articleId, body)
    }

    async function updateArticle(articleId, body) {
        try {
            const { message } = await logic.updateArticle(articleId, body)    
            setMessage(message)
            setAwaitResponse(false)
        } catch ({message}) {
            setMessage(message)
            setAwaitResponse(false)
        }
    }

    function handleModal() {
        setMessage(null) 
      }

    return <section className="">
        <h1>All articles</h1>
        {allArticles && allArticles.map(article =>{
            const {id, ref, title, description, img, quantity, category, price} = article

            return <form onSubmit={handleSubmitUpdateArticle}>
                <ul>
                 <input hidden name="id" defaultValue={id}></input>
                    <li>Ref:<input type="number" placeholder={ref} name="ref" defaultValue={ref}></input></li>  
                    <li>Title:<input placeholder={title} name="title" defaultValue={title}></input></li>
                   <li>Description:<input placeholder={description} name="description" defaultValue={description}></input></li>
                   <li>Img url:<input placeholder={img} name="img" defaultValue={img}></input></li>
                    <li>Quantity:<input type="number" placeholder={quantity} name="quantity" defaultValue={quantity}></input></li>
                    <li>Category:
                        <select name="category">
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
                    <li>Price:<input placeholder={price} name="price" defaultValue={price}></input></li>  
                </ul>
                {awaitResponse == false && <button>Update</button>}
            </form>
        })}
        {message && <Modal  message={message} showModal={handleModal}/>}
    </section>
}

export default withRouter(ArticlesManagement)