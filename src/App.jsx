import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home';
import { User } from './pages/User';
import { Basket } from './pages/Basket';
import { Laptops } from './pages/Laptops';
import { Headphones } from './pages/Headphones';
import { Phones } from './pages/Phones';
import { Stations } from './pages/Stations';
import { Watches } from './pages/Watches';

export default function App() {
    const [products, setProducts] = useState([]);
    const [productsBasket, setProductsBasket] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [productToEdit, setProductToEdit] = useState(null);
    const [totalSumInBasket, setTotalSumInBasket] = useState(0);
    const [productCount, setProductCount] = useState(0);


    const fetchProducts = async () => {
        const res = await fetch('https://6840231f5b39a8039a56eeae.mockapi.io/store');
        const data = await res.json();
        setProducts(data);
    };

    const fetchProductsInBasket = async () => {
        const res = await fetch('https://6840231f5b39a8039a56eeae.mockapi.io/reg');
        const data = await res.json();
        setProductsBasket(data);
    };

    useEffect(() => {
        fetchProducts();
        fetchProductsInBasket();
    }, []);

    useEffect(() => {
        fetchProductsInBasket();
    }, []);

    useEffect(() => {
        const total = productsBasket.reduce((acc, item) => acc + Number(item.price), 0);
        const count = productsBasket.length;
      
        setTotalSumInBasket(total);
        setProductCount(count);
    }, [productsBasket]);
      

    const handleAdd = () => {
        fetchProducts();
        setShowModal(false);
        setProductToEdit(null);
    };

    const handleDelete = async (id) => {
        await fetch(`https://6840231f5b39a8039a56eeae.mockapi.io/store/${id}`, {
        method: 'DELETE',
        });
        fetchProducts();
    };

    const handleDeleteBasket = async (id) => {
        await fetch(`https://6840231f5b39a8039a56eeae.mockapi.io/reg/${id}`, {
        method: 'DELETE',
        });
        fetchProducts();
    };

    const handleEdit = (product) => {
        setProductToEdit(product);
        setShowModal(true);
    };

    return (
        <div>
            <Routes>
                <Route 
                    path="/" 
                    element={
                        <Home 
                            fetchProductsInBasket={fetchProductsInBasket}
                            totalSumInBasket={totalSumInBasket}
                            productCount={productCount}
                            products={products}
                        />
                    }
                />
                <Route 
                    path="/user" 
                    element={
                        <User
                            setShowModal={setShowModal}
                            products={products}
                            handleDelete={handleDelete}
                            handleEdit={handleEdit}
                            showModal={showModal}
                            handleAdd={handleAdd}
                            productToEdit={productToEdit}
                        />} 
                />
                <Route 
                    path="/basket" 
                    element={
                        <Basket 
                            productsBasket={productsBasket} 
                            handleDelete={handleDeleteBasket}
                            fetchProductsInBasket={fetchProductsInBasket}
                            totalSumInBasket={totalSumInBasket}
                            productCount={productCount}
                        />
                    }
                />
                <Route 
                    path="/laptops" 
                    element={
                    <Laptops 
                        products={products}
                        totalSumInBasket={totalSumInBasket}
                        productCount={productCount}
                        fetchProductsInBasket={fetchProductsInBasket}
                    />}
                />
                <Route 
                    path="/headphones" 
                    element={
                    <Headphones 
                        products={products}
                        totalSumInBasket={totalSumInBasket}
                        productCount={productCount}
                        fetchProductsInBasket={fetchProductsInBasket}
                    />}
                />
                <Route 
                    path="/phones" 
                    element={
                    <Phones 
                        products={products}
                        totalSumInBasket={totalSumInBasket}
                        productCount={productCount}
                        fetchProductsInBasket={fetchProductsInBasket}
                    />}
                />
                <Route 
                    path="/stations" 
                    element={
                    <Stations 
                        products={products}
                        totalSumInBasket={totalSumInBasket}
                        productCount={productCount}
                        fetchProductsInBasket={fetchProductsInBasket}
                    />}
                />
                <Route 
                    path="/watches" 
                    element={
                    <Watches 
                        products={products}
                        totalSumInBasket={totalSumInBasket}
                        productCount={productCount}
                        fetchProductsInBasket={fetchProductsInBasket}
                    />}
                />
            </Routes>
        </div>
    );
}