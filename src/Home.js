import React from 'react'
import banner from './banner.jpg'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className="home">
            <img 
                className="home__image"
                src={banner} 
                alt="" 
            />
            
            <div className="home__row">
                <Product 
                    id="123" 
                    title="BENGOO G9000 Stereo Gaming Headset" 
                    image="https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UY218_.jpg" 
                    price={11.93} 
                    rating={5}
                />
                <Product 
                    id="123" 
                    title="BENGOO G9000 Stereo Gaming Headset" 
                    image="https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UY218_.jpg" 
                    price={11.93} 
                    rating={5}
                />
            </div>

            <div className="home__row">
                <Product 
                    id="123" 
                    title="BENGOO G9000 Stereo Gaming Headset" 
                    image="https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UY218_.jpg" 
                    price={11.93} 
                    rating={5}
                />
                <Product 
                    id="123" 
                    title="BENGOO G9000 Stereo Gaming Headset" 
                    image="https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UY218_.jpg" 
                    price={11.93} 
                    rating={5}
                />
                <Product 
                    id="123" 
                    title="BENGOO G9000 Stereo Gaming Headset" 
                    image="https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UY218_.jpg" 
                    price={11.93} 
                    rating={5}
                />
            </div>

            <div className="home__row">
                <Product 
                    id="123" 
                    title="BENGOO G9000 Stereo Gaming Headset" 
                    image="https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UY218_.jpg" 
                    price={11.93} 
                    rating={5}
                />
                <Product 
                    id="123" 
                    title="BENGOO G9000 Stereo Gaming Headset" 
                    image="https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UY218_.jpg" 
                    price={11.93} 
                    rating={5}
                />
            </div>

            <div className="home__row">
                <Product 
                    id="123" 
                    title="BENGOO G9000 Stereo Gaming Headset" 
                    image="https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UY218_.jpg" 
                    price={11.93} 
                    rating={5}
                />
            </div>
        </div>
    )
}

export default Home
