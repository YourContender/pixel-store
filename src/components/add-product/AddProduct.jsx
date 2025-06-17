import { useState, useEffect } from 'react';
import "../../styles/add-product.scss";

export default function AddProduct({ onAdd, productToEdit }) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [category, setCategory] = useState('');

    useEffect(() => {
        if (productToEdit) {
            setName(productToEdit.name);
            setPrice(productToEdit.price);
            setCategory(productToEdit.category);
        } else {
            setName('');
            setPrice('');
            setCategory('');
            setImageFile(null);
        }
    }, [productToEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        let imageUrl = productToEdit?.image;

        if (imageFile) {
        const formData = new FormData();
        formData.append('file', imageFile);
        formData.append('upload_preset', 'tmp_images');

        const res = await fetch(`https://api.cloudinary.com/v1_1/dibxqpbzx/image/upload`, {
            method: 'POST',
            body: formData,
        });
            const data = await res.json();
            imageUrl = data.secure_url;
        }

        const productData = { name, price, image: imageUrl, category };

        if (productToEdit) {
            await fetch(`https://685149bf8612b47a2c096ac0.mockapi.io/store/${productToEdit.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(productData),
            });
        } else {
            await fetch('https://685149bf8612b47a2c096ac0.mockapi.io/store', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(productData),
            });
        }

        onAdd(); 
        setLoading(false);
        setName('');
        setPrice('');
        setImageFile(null);
    };

    return (
        <form onSubmit={handleSubmit} className="create-prod">
            <input className="create-prod-field" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Назва" required />
            <input className="create-prod-field" type="text" value={price} onChange={e => setPrice(e.target.value)} placeholder="Ціна" required />
            <label className="custom-file">
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImageFile(e.target.files[0])}
                    
                />
                <span>
                    {imageFile ? imageFile.name : 'Оберіть зображення'}
                </span>
            </label>
            <select className="create-prod-select" value={category} onChange={(e) => setCategory(e.target.value)} required>
                <option value="">-- Оберіть категорію --</option>
                <option value="Ноутбуки">Ноутбуки</option>
                <option value="Телефони">Телефони</option>
                <option value="Годинники">Годинники</option>
                <option value="Навушники">Навушники</option>
                <option value="Станції">Станції</option>
            </select>
            <button className="create-prod-send" type="submit">{loading ? 'Збереження...' : (productToEdit ? 'Оновити' : 'Додати')}</button>
        </form>
    );
}
