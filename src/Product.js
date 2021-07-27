import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'
function Product( {id , title , image , price , rating} ) {

    const [{} , dispatch ] = useStateValue()

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id, // => id: id,
                title,
                image,
                price,
                rating
            }
        })
    }

    return (
        <div className="product">
            <p>{title}</p>
            <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <p className="product__rating">
                {
                    Array(rating).fill().map( (_) => (
                        <p>⭐️</p>
                    ))
                }
            </p>
            <img src={image}/>
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product
