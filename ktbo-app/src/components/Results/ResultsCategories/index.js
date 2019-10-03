import React, { useContext, useEffect } from 'react'
import CartButton from '../../CartButton'
import logic from '../../../logic'
import Context from '../../Context'

function ResultsCategories({ searchResult }) {

    const {setArticles} = useContext(Context)

    const{ message, articles, error } = searchResult

    useEffect(() => {
        setArticles()
      },[])

    return <>
    
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
                    {logic.isUserLogged() && <CartButton articleId={id} stock={quantity}/>}
                </ul>
            })}
        </section>
    </>
}

export default ResultsCategories