import "../../styles/list-products-admin.scss";

export const ListProducts = ({ products, onDelete, onEdit }) => {
    return (
        <section className="list">
            <div className="list_container">
            <h1>Додані товари на сайті: {products.length}</h1>
            {products.length !== 0 ? products.map((p) => (
                <div key={p.id} className="list_container-item">
                    <img className="list_container-item-image" src={p.image} alt={p.name} style={{ width: 150, height: 150 }} />
                    <p className="list_container-item-name">{p.name}</p>
                    <p className="list_container-item-category">{p.category}</p>
                    <p className="list_container-item-price">{p.price} грн</p>
                    <button className="list_container-item-edit" onClick={() => onEdit(p)}>Редагувати</button>
                    <button className="list_container-item-delete" onClick={() => onDelete(p.id)}>Видалити</button>
                </div>
            )) : "Додайте нові товари"}
            </div>
        </section>
    );
};
