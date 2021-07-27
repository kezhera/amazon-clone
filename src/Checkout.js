import React from 'react'
import './Checkout.css'
import banner from './checkout.jpg'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
function Checkout() {

    const [{ basket }] = useStateValue()
    return (
        <div className="checkout">
            <img src={banner} alt="" className="checkout__ad" />

            {basket?.length === 0 ? (
                <div>
                    <h2>Your Shopping Basket is empty</h2>
                    <p>you have no items in your basket. To buy one or more items click "Add to basket" next to the item</p>
                </div>
            ) : (
                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                    
                    {
                        basket.map( item => (
                            <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))
                    }
                </div>
            )}
        </div>
    )
}

export default Checkout
