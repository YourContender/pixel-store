import React from 'react';
import { FaRegUser } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import "../../styles/header.scss";
import { Link } from 'react-router-dom';

export const Header = ({ totalSumInBasket, productCount }) => {
    return (  
        <header className="header">
            <div className="header_logo">
                <Link to="/" className="header_logo-text">Pixel-Store</Link>
            </div>
            <div className="header_actions">
                <div className="header_actions-tel">
                    <span className="header_actions-tel-number">099-999-99-99</span>
                </div>
                <Link to="/user" className="header_actions-user">
                    <FaRegUser />
                </Link>
                <Link to="/basket" className="header_actions-basket">
                    <SlBasket />
                    <div className="header_actions-basket-order">
                        <span className="header_actions-basket-order-sum">{totalSumInBasket} грн</span>
                        <span className="header_actions-basket-order-link">Кошик</span>
                    </div>
                    <span className="header_actions-basket-count">{productCount}</span>
                </Link>
            </div>
        </header>
    ) 
}
