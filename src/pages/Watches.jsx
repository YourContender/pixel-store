import React from 'react'
import { Header } from '../components/header/Header'
import { Nav } from '../components/nav/Nav'
import { MainCatalog } from '../components/main-catalog/MainCatalog'

export const Watches = ({ products, totalSumInBasket, productCount, fetchProductsInBasket }) => {
    const filteredArray = products.filter(item => item.category === "Годинники")

    return (
        <div>
            <Header totalSumInBasket={totalSumInBasket} productCount={productCount}/>
            <Nav/>
            <MainCatalog products={filteredArray} fetchProductsInBasket={fetchProductsInBasket}/>
        </div>
    )
}