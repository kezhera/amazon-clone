import React from 'react'
import { Link } from 'react-router-dom';
import Logo from './logo.jpg'
import searchIcon from './loupe.svg'
import shoppingBasket from './shopping-basket.svg'
import './Header.css'
import { useStateValue } from './StateProvider';
function Header() {

    const [ { basket = [] } ] = useStateValue()
    
    return (
        <header className="header">
            <Link to="/">
                <img
                    className="header__logo" 
                    src={Logo} 
                    alt=""    
                />
            </Link>
            <div className="header__search">
                <input type="text" className="header__searchinput" />
                <button className="header__searchicon">
                    <img  
                        src={searchIcon}
                        alt=""
                    />
                </button>
            </div>

            <nav className="header__nav">
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__option-main">Hello Nika</span>
                        <span className="header__option-secondary">Sign In</span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__option-main">Return</span>
                        <span className="header__option-secondary">& Orders</span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__option-main">Your</span>
                        <span className="header__option-secondary">Prime</span>
                    </div>
                </Link>

                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <img src={shoppingBasket} alt=""/>
                        <span className="header__option-secondary header__counter">{basket?.length}</span>
                    </div>
                </Link>
            </nav>
        </header>
    )
}

export default Header
