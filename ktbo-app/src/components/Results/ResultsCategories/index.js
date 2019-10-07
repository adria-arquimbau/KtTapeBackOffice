import React, { useContext, useEffect } from 'react'
import CartButton from '../../CartButton'
import logic from '../../../logic'
import Context from '../../Context'

function ResultsCategories({ searchResult }) {

    const {setArticles} = useContext(Context)
    const {items} = useContext(Context)

    const{ message, articles, error } = searchResult

    useEffect(() => {
        setArticles()
      },[])

    async function handleDeleteOnCart(event) {
        
        event.preventDefault()
        let { target: { articleId: { value: articleId }  } } = event
        try {
            await logic.removeToCart(articleId)
        } catch (error) {
            
        }
    }

    return <>
        <section className="searchResultMainContenedor">
            <section className="searchResult">
            {error && <h4>{error}</h4>}
                <h4>{message}</h4>
                {articles && articles.map(item => {
                    const {ref, title, description, img, price, quantity, id} = item

                    return <ul key={id} className="searchResult__article" >
                        <li className="searchResult__article--param">Ref: {ref}</li>
                        <li className="searchResult__article--param">{title}</li>
                        <li className="searchResult__article--param">{description}</li>
                        <li className="searchResult__article--param"><img alt="" src={img}/></li>
                        <li className="searchResult__article--param">Price: {price} €</li>
                        <li className="searchResult__article--param">Stock: {quantity} uds</li>
                        {!items.some(element => element.item.article.id === id) && logic.isUserLogged() && <CartButton articleId={id} stock={quantity}/>}
                        {items.some(element => element.item.article.id === id) && <section className="searchResult__on-cart"><h3 className="searchResult__on-cart--text">On cart </h3><form onSubmit={handleDeleteOnCart}><button className="searchResult__on-cart--button">Remove from cart<input type="text" hidden name="articleId" defaultValue={id}></input></button></form></section>}
                    </ul>
                })}
            </section>
        </section>
    </>
}

export default ResultsCategories