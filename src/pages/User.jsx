import React, { useState } from 'react'
import { Header } from '../components/header/Header'
import { Nav } from '../components/nav/Nav'
import { Users } from '../components/users/Users'
import Auth from '../components/auth/Auth'

export const User = ({ 
    setShowModal,
    products,
    handleDelete,
    handleEdit,
    showModal,
    handleAdd,
    productToEdit
}) => {
    const [userData, setUserData] = useState("")
    
    return (
        <div>
            {
                userData === "admin" ? 
                    <div>
                        <Header totalSumInBasket={0} productCount={0}/>
                        <Nav/>
                        <Users
                            setShowModal={setShowModal}
                            products={products}
                            onDelete={handleDelete}
                            onEdit={handleEdit}
                            showModal={showModal}
                            onAdd={handleAdd}
                            productToEdit={productToEdit}
                        />
                    </div>
                : <Auth setUserData={setUserData}/>
            } 
        </div>
    )
}
