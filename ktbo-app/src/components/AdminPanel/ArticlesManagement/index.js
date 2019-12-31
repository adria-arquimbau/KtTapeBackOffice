/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect} from 'react'
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

    return <section>
            {/* <form className="article-management__search-article" onSubmit={handleSearch}>
            <input name="searchArticle" placeholder="search article"></input>
            <button>Search</button>
        </form> */}
    <section className="article-management">

    {thereIsAtLeastOneWithoutStock && <section className="article-management__out-of-stock">
        <h2 className="article-management__out-of-stock--title">Articles Out of stock </h2>
            {allArticles && allArticles.map(article => {
                const {id, ref, title, description, img, quantity, category, price} = article
                if(quantity === 0){
                return <form onSubmit={handleSubmitUpdateArticle}>
                    <ul>
                        <section>
                            <li>Ref: {ref}</li>
                            <li>Title: {title}</li>
                            <li>Quantity: {quantity}</li>
                        </section>

                        Update stock quantity: <input type="number" name="quantity" placeholder={quantity}/>
                        <input hidden name="id" defaultValue={id}/>
                        <input hidden defaultValue={description} name="description" placeholder="add new stock quantity"/>
                        <input hidden defaultValue={title} name="title" placeholder="add new stock quantity"/>
                        <input hidden defaultValue={img} name="img" placeholder="add new stock quantity"/>
                        <input hidden defaultValue={category} name="category" placeholder="add new stock quantity"/>
                        <input hidden defaultValue={price} name="price" type="number" placeholder="add new stock quantity"/>
                        <input hidden defaultValue={ref} name="ref" type="number" placeholder="add new stock quantity"/>
                </ul>
                <button>Update Stock</button>
                </form>
                }
            })}
        </section>}
        
        <section className="article-management__all-articles">
        <h1 className="article-management__all-articles--title">{allArticles.length} articles from search query "{title}"</h1>
            <section className="article-management__all-articles--container">
                {allArticles && allArticles.map(article =>{
                    const {id, ref, title, description, img, quantity, category, price} = article
                    let productToShow
                    if(category != 'Other Products') {
                        let splitedCategory = category.split("KTTape")
                        productToShow = splitedCategory[1]
                    }if(category === 'Other Products'){
                        productToShow = 'Other Products'
                    }if(category === 'KTTape Original Jumbo Precut'){
                        productToShow = 'Orig. Jumbo Precut'
                    }if(category === 'KTTape Original Jumbo Edema'){
                        productToShow = 'Orig. Jumbo Edema'
                    }if(category === 'KTTape Original Jumbo Uncut'){
                        productToShow = 'Orig. Jumbo Uncut'
                    }
                    
                    return <form className="article-management__all-articles--article" onSubmit={handleSubmitUpdateArticle}>
                        <ul className="article-management__all-articles--information">
                        <input hidden name="id" defaultValue={id}/>
                            <li>
                                <p>Ref: {ref}</p><input className="article-management__all-articles--information-ref" type="number" placeholder={ref} name="ref" defaultValue={ref}/></li>  
                            <li>
                                <p>Title: {title}</p><input placeholder={title} name="title" defaultValue={title}/></li>
                        <li>
                            <p>Description: {description}</p><input placeholder={description} name="description" defaultValue={description}/></li>
                        <li>
                            <p>Img url:</p> <input className="article-management__all-articles--information-url" placeholder={img} name="img" defaultValue={img}/></li>
                            <li>
                                <p>Quantity: {quantity}</p><input className="article-management__all-articles--information-quantity" type="number" placeholder={quantity} name="quantity" defaultValue={quantity}/></li>
                            <li>
                                <p>Category:</p>
                                <select name="category">
                                    <option value={category}>Current category: {productToShow}</option> 
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
                            </li>
                            <li>
                                <p>Price: {price}</p><input className="article-management__all-articles--information-price" placeholder={price} name="price" defaultValue={price}/></li>  
                        </ul>
                        <button>Update</button>
                    </form>
                })}
            </section>
        </section>
       
            {message && <Modal  message={message} showModal={handleModal}/>}
    </section>
    </section>
}

export default withRouter(ArticlesManagement)