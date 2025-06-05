import React from 'react'
import { Header } from '../components/header/Header'
import { Nav } from '../components/nav/Nav'
import { MainCatalog } from '../components/main-catalog/MainCatalog'

export const Laptops = ({ products, totalSumInBasket, productCount }) => {
    const filteredArray = products.filter(item => item.category === "Ноутбуки")

    return (
        <div>
            <Header totalSumInBasket={totalSumInBasket} productCount={productCount}/>
            <Nav/>
            <MainCatalog products={filteredArray}/>
        </div>
    )
}
