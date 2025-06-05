import React from 'react'
import { Header } from '../components/header/Header'
import { Nav } from '../components/nav/Nav'
import { Main } from '../components/main/Main'
import { MainCatalog } from '../components/main-catalog/MainCatalog'

export const Home = ({
    fetchProductsInBasket, 
    totalSumInBasket,
    productCount,
    products
}) => {
    return (
        <div>
            <Header 
                totalSumInBasket={totalSumInBasket}
                productCount={productCount}
            />
            <Nav/>
            <Main/>
            <MainCatalog 
                fetchProductsInBasket={fetchProductsInBasket} 
                products={products}
            />
        </div>
    )
}
