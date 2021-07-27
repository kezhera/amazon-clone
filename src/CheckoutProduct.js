import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'
function CheckoutProduct({id , title , image , price , rating }) {
    const [ {basket} , dispatch ] = useStateValue()
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_TO_BASKET',
            id: id
        })
    }

    return (
        <div className="CheckoutProduct">
            <img src={image} className="checkoutProduct__image"/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
            
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <p className="checkoutProduct__rating">
                    {
                        Array(rating).fill().map( (_) => (
                            <p>⭐️</p>
                        ))
                    }
                </p>

                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
