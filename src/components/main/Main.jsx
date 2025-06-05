import React from 'react';
import "../../styles/main.scss";
import { scrollToSection } from '../../scrollToSection';

export const Main = () => {
    return (
        <section className="main">
            <div className="main_container">
                <div className="main_container-top">
                    <div className="main_container-top-titles">
                        <h1>Інтернет магазин електроніки Pixel Store</h1>
                        <span>
                            Вітаємо на офіційному сайті інтернет магазину Pixel Store.
                            У нас представлений найкращий вибір техніки преміум якості.
                        </span>
                        <button onClick={() => scrollToSection("catalog")}>Каталог</button>
                    </div>
                    <div className="main_container-top-image"></div>
                </div>
            </div>
        </section>
    )
}
