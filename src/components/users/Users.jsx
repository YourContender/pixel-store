import React from 'react'
import { ListProducts } from '../products-list/ListProducts'
import AddProduct from '../add-product/AddProduct'
import Modal from "../modal/Modal"
import "../../styles/users.scss";

export const Users = ({ 
    setShowModal,
    products,
    onDelete,
    onEdit,
    showModal,
    onAdd,
    productToEdit
}) => {

    return (
        <div className="users_container">
            <button
                className="add-product-btn"
                onClick={() => {
                    onEdit(null);
                    setShowModal(true);
                }}
            >
                Додати товар
            </button>

            <ListProducts products={products} onDelete={onDelete} onEdit={onEdit} />

            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <AddProduct onAdd={onAdd} productToEdit={productToEdit} />
                </Modal>
            )}
        </div>
    )
}
