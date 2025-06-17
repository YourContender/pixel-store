import React, { useState } from 'react';
import "../../styles/basket.scss";
import Modal from '../modal/Modal';

export const UserBasket = ({
    productsBasket, 
    onDelete, 
    fetchProductsInBasket, 
    totalSumInBasket,
    showModalOrder,
    setShowModalOrder
}) => {
    const [orderData, setOrderData] = useState({
        name: '',
        phone: '',
        address: ''
    });

    const removeProductsFromList = async(id) => {
        await onDelete(id)
        fetchProductsInBasket();
    }
      
    const handleOrderSubmit = (e) => {
        e.preventDefault();
        setShowModalOrder(false);
        alert("Замовлення на опрацюванні")
    };
      

    return (
        <section className="basket">
            <div className="basket_container">
                <div className="basket_container-subtitles">
                    <h1>Товари у кошику: {productsBasket.length}</h1>
                    <button onClick={() => setShowModalOrder(true)}>Оформити замовлення</button>
                </div>

                {showModalOrder && (
                    <Modal onClose={() => setShowModalOrder(false)}>
                        <div className="order-form">
                            <h2>Оформлення замовлення</h2>
                            <form onSubmit={handleOrderSubmit}>
                                <div className="order-form__group">
                                <label htmlFor="name">Ім’я</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={orderData.name}
                                    onChange={(e) => setOrderData({ ...orderData, name: e.target.value })}
                                    required
                                />
                                </div>

                                <div className="order-form__group">
                                <label htmlFor="phone">Телефон</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    value={orderData.phone}
                                    onChange={(e) => setOrderData({ ...orderData, phone: e.target.value })}
                                    placeholder="+380..."
                                    required
                                />
                                </div>

                                <div className="order-form__group">
                                <label htmlFor="address">Адреса доставки</label>
                                <textarea
                                    id="address"
                                    value={orderData.address}
                                    onChange={(e) => setOrderData({ ...orderData, address: e.target.value })}
                                    required
                                />
                                </div>

                                <button type="submit" className="order-form__submit">Підтвердити замовлення</button>
                            </form>
                        </div>
                    </Modal>
                )}
                
                {productsBasket.length !== 0 ? productsBasket.map((p) => (
                    <div key={p.id} className="basket_container-item">
                        <img className="basket_container-item-image" src={p.image} alt={p.name} style={{ width: 150, height: 150 }} />
                        <p className="basket_container-item-name">{p.name}</p>
                        <p className="basket_container-item-category">{p.category}</p>
                        <p className="basket_container-item-price">{p.price} грн</p>
                        <button className="basket_container-item-delete" onClick={() => removeProductsFromList(p.id)}>Видалити</button>
                    </div>
                )) : <span className="basket_empty">Наразі, жодного товару не було додано</span>}
            
                <div className="basket_stat">
                    <span>Сума вашого замовлення: </span>
                    <span>{totalSumInBasket} грн.</span>
                </div>
            </div>
        </section>
    )
}
