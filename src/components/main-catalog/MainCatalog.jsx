import React from 'react';
import "../../styles/main-catalog.scss";
import { FaStar } from "react-icons/fa";

export const MainCatalog = ({fetchProductsInBasket, products}) => {
    const createOrder = (item) => {       
        sendOrderProduct(
            { 
                name: item.name, 
                price: item.price, 
                image: item.image, 
                category: item.category 
            }
        );
    }

    const sendOrderProduct = async (item) => {
        await fetch('https://685149bf8612b47a2c096ac0.mockapi.io/basket', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(item),
        });
        fetchProductsInBasket();
    }

    return (
        <div className="catalog" id='catalog'>
            {products.map((p) => (
                <div key={p.id} className="catalog_card">
                    <img src={p.image} alt={p.name} />
                    <div className="catalog_card-block">
                        <p className="catalog_card-block-title">{p.name}</p>
                        <div className="catalog_card-block-category">
                            <p className="catalog_card-block-category-stat">Категорія</p>
                            <p className="catalog_card-block-category-data">{p.category}</p>
                        </div>
                        <div className="catalog_card-block-reviews">
                            <div className="catalog_card-block-reviews-stars">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <div className="catalog_card-block-reviews-comment">
                                5 / 5
                            </div>
                        </div>
                        <p className="catalog_card-block-price">{p.price} грн</p>
                    </div>
                    <button className="catalog_card-send" onClick={() => createOrder(p)}>Додати до кошика</button>
                </div>
            ))}
        </div>
    )
}
