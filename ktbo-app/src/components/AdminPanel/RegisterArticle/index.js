/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import Modal from '../../Modal'
import logic from '../../../logic'

function RegisterArticle() {

    const [error, setError] = useState()
    const [message, setMessage] = useState()
    const [newArticle, setNewArticle] = useState()

    const [_ref, setRef] = useState("")
    const [_title, setTitle] = useState("")
    const [_description, setDescription] = useState("")
    const [_img, setImg] = useState("")
    const [_quantity, setQuantity] = useState("")
    const [_price, setPrice] = useState("")

    function handleSubmitNewArticle(event) {
        event.preventDefault()
        let { target: { ref: { value: ref }, title: { value: title }, description: { value: description }, img: { value: img }, quantity: { value: quantity }, price: { value: price }, category: { value: category} }} = event
        ref = Number(ref)
        quantity = Number(quantity)
        price = Number(quantity)
        handleRegisterNewArticle(ref, title, description, img, quantity, price, category)
    }
    
    async function handleRegisterNewArticle(ref, title, description, img, quantity, price, category) {
        try{ 
            const response = await logic.registerArticle(ref, title, description, img, quantity, price, category)
            const { id } = response
            const newArticle = await logic.retrieveArticle(id)
            debugger
            setNewArticle(newArticle)
            setRef("")
            setTitle("")
            setDescription("")
            setImg("")
            setQuantity("")
            setPrice("")
        } catch ({ message }) {
            setError(message)
        }
    }

    function handleModal() {
        setMessage(null) 
        setError(null)
    }

    return <section className="admin-new-user">
        <form className="admin-new-user__form" onSubmit={handleSubmitNewArticle}>  
            <input placeholder="Ref" type="number" name="ref" value={_ref} onChange={event => setRef(event.target.value) }/>
            <input placeholder="Title" type="text" name="title" value={_title} onChange={event => setTitle(event.target.value) }/>
            <input placeholder="Description" type="text" name="description" value={_description} onChange={event => setDescription(event.target.value) }/>
            <input placeholder="Img" type="text" name="img" value={_img} onChange={event => setImg(event.target.value) } />
            <input placeholder="Quantity" type="number" name="quantity" value={_quantity} onChange={event => setQuantity(event.target.value) } />
            <input placeholder="Price" type="number" name="price" value={_price} onChange={event => setPrice(event.target.value) } />
            <select name="category">
                <option value="KTTape Pro Precut">Pro Precut</option> 
                <option value="KTTape Pro Uncut">Pro Uncut</option> 
                <option value="KTTape Pro Limited Edition">Pro Limited Edition</option>
                <option value="KTTape Pro Jumbo Precut">Pro Jumbo Precut</option> 
                <option value="KTTape Pro Jumbo Uncut">Pro Jumbo Uncut</option> 
                <option value="KTTape Original Precut">Original Precut</option> 
                <option value="KTTape Original Uncut">Original Uncut</option> 
                <option value="KTTape Original Jumbo Precut">Original Jumbo Precut</option> 
                <option value="KTTape Original Jumbo Uncut">Original Jumbo Uncut</option> 
                <option value="KTTape Original Jumbo Edema">Original Jumbo Edema</option> 
                <option value="Other Products">Other Products</option> 
            </select>
            <button>Register a new Article</button>
        </form>
        <section className="admin-new-user__user">
            {newArticle && <ul>
                <h2>New Article</h2>
                <li>Ref: {newArticle.article.ref}</li>
                <li>Title: {newArticle.article.title}</li>
                <li>Description: {newArticle.article.description}</li>
                <li>Img: {newArticle.article.img}</li>
                <li>Quantity: {newArticle.article.quantity}</li>
                <li>Category: {newArticle.article.category}</li>
                <li>Price: {newArticle.article.price}</li>
            </ul>}
        </section>
        {message && <Modal  message={message} showModal={handleModal}/>}
        {error && <Modal  message={error} showModal={handleModal}/>}
    </section>
}

export default RegisterArticle