import React, { useState } from 'react'
import { UserBasket } from '../components/user-basket/UserBasket'
import { Header } from '../components/header/Header'
import { Nav } from '../components/nav/Nav'

export const Basket = ({ 
    productsBasket, 
    handleDelete, 
    fetchProductsInBasket,
    totalSumInBasket,
    productCount
}) => {
    const [showModalOrder, setShowModalOrder] = useState(false);
    
    return (
        <div>
            <Header totalSumInBasket={totalSumInBasket} productCount={productCount}/>
            <Nav/>
            <UserBasket 
                productsBasket={productsBasket} 
                onDelete={handleDelete} 
                fetchProductsInBasket={fetchProductsInBasket}
                totalSumInBasket={totalSumInBasket}
                showModalOrder={showModalOrder}
                setShowModalOrder={setShowModalOrder}
            />
        </div>
    )
}
