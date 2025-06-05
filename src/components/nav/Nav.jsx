import React from 'react';
import "../../styles/nav.scss";
import { Link } from 'react-router-dom';

export const Nav = () => {
    return (
        <nav className="nav">
            <div className="nav_container">
                <div className="nav_container-list">
                    <Link to="/laptops" className="nav_container-list-item">Ноутбуки</Link>
                    <Link to="/phones" className="nav_container-list-item">Телефони</Link>
                    <Link to="/watches" className="nav_container-list-item">Годинники</Link>
                    <Link to="/headphones" className="nav_container-list-item">Навушники</Link>
                    <Link to="/stations" className="nav_container-list-item">Станції</Link>
                </div>
            </div>
        </nav>
    )
}

