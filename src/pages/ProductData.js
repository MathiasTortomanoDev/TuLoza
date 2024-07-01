import React from "react";
import ProductDataImages from "../components/ProductDataImages"
import GetProduct from "../services/getProduct";
import "../styles/productData.css"

const ProductData = ({ collection, id }) => {

    const product = GetProduct({collection, id})
    const currentUrl = window.location.href;
    const whatsappLink = `https://wa.me/+598097432919?text=Hola!%20estoy%20interesado%20en%20uno%20de%20tus%20productos.%0A%0A${encodeURIComponent(currentUrl)}`;
    const telegramLink = `https://t.me/tuLoza?text=Hola!%20estoy%20interesado%20en%20uno%20de%20tus%20productos.%0A%0A${encodeURIComponent(currentUrl)}`;


    return (
        <div className="productData">
            {product && ( 
                <div className="productData__content">
                    <ProductDataImages collection={collection} product={product} />
                    <div className="productData__details">
                        <h2 className="productData__title">{product.nombre}</h2>
                        <span className="productData__price">USD {product.precio}</span>
                        {
                            /*
                            <div className="productData__inputs__container">
                                {product.caracteristicas.color ? 
                                    <select className="productData__input productData__input__color" disabled >
                                        <option selected value={product.caracteristicas.color}>{product.caracteristicas.color}</option>
                                    </select>
                                : null}
                            </div>
                            */
                        }
                        <div className="productData__links__container">
                            <a href={whatsappLink} className="productData__link">
                                <span className="productData__link__text">Contactanos</span>
                            </a>
                            <a href={whatsappLink} className="productData__link__icon__container productData__link__icon__container-whatsapp">
                                <svg className="productData__link__icon productData__link__icon-whatsapp" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24.6565 4.8791C21.9442 2.33613 18.3321 0.9375 14.4935 0.9375C6.57031 0.9375 0.122991 6.96797 0.122991 14.3789C0.122991 16.7463 0.783259 19.0592 2.03906 21.0996L0 28.0625L7.61897 26.1916C9.71629 27.2633 12.079 27.8264 14.4871 27.8264H14.4935C22.4103 27.8264 29 21.7959 29 14.385C29 10.7945 27.3687 7.42207 24.6565 4.8791ZM14.4935 25.5619C12.3444 25.5619 10.2406 25.023 8.4087 24.0059L7.975 23.7637L3.4567 24.8717L4.66071 20.7484L4.37589 20.3246C3.17835 18.5445 2.55045 16.492 2.55045 14.3789C2.55045 8.22129 7.91027 3.20801 14.5 3.20801C17.6913 3.20801 20.6884 4.37051 22.9411 6.48359C25.1937 8.59668 26.579 11.4 26.5725 14.385C26.5725 20.5486 21.0768 25.5619 14.4935 25.5619ZM21.0444 17.1943C20.6884 17.0248 18.9212 16.2135 18.5911 16.1045C18.2609 15.9895 18.0214 15.935 17.7819 16.274C17.5424 16.6131 16.8563 17.3639 16.6426 17.5939C16.4355 17.818 16.2219 17.8482 15.8658 17.6787C13.7556 16.6918 12.3703 15.9168 10.9786 13.6826C10.6096 13.0893 11.3475 13.1316 12.0337 11.848C12.1502 11.624 12.092 11.4303 12.0013 11.2607C11.9107 11.0912 11.1922 9.43828 10.8944 8.76621C10.6031 8.1123 10.3054 8.20312 10.0853 8.19102C9.87813 8.17891 9.63862 8.17891 9.39911 8.17891C9.1596 8.17891 8.7712 8.26367 8.44107 8.59668C8.11094 8.93574 7.18527 9.74707 7.18527 11.4C7.18527 13.0529 8.47344 14.6514 8.64821 14.8754C8.82946 15.0994 11.1792 18.49 14.7848 19.9492C17.0634 20.8695 17.9567 20.9482 19.096 20.7908C19.7886 20.6939 21.2192 19.9795 21.517 19.1924C21.8147 18.4053 21.8147 17.7332 21.7241 17.5939C21.64 17.4426 21.4004 17.3578 21.0444 17.1943Z" fill="white"/>
                                </svg>
                            </a>
                            <a href={telegramLink} className="productData__link__icon__container productData__link__icon__container-telegram">
                                <svg className="productData__link__icon productData__link__icon-telegram" viewBox="0 0 55 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M27.5 0.890625C12.3085 0.890625 0 13.248 0 28.5C0 43.752 12.3085 56.1094 27.5 56.1094C42.6915 56.1094 55 43.752 55 28.5C55 13.248 42.6915 0.890625 27.5 0.890625ZM40.252 19.6717C39.8417 24.0357 38.0454 34.6342 37.1361 39.5215C36.748 41.5922 35.994 42.2824 35.2621 42.3492C33.6653 42.4939 32.4567 41.2916 30.9042 40.2674C28.4869 38.6754 27.1119 37.6846 24.7722 36.126C22.0554 34.3336 23.8185 33.3428 25.3599 31.7285C25.7702 31.3055 32.8004 24.8818 32.9335 24.3029C32.9556 24.225 32.9667 23.9578 32.8004 23.8131C32.6341 23.6684 32.4012 23.724 32.2349 23.7574C31.9909 23.8094 28.1247 26.3736 20.6361 31.4502C19.542 32.2072 18.5477 32.5746 17.6532 32.5523C16.6663 32.5301 14.7812 31.9957 13.373 31.5393C11.6542 30.9826 10.2792 30.682 10.4012 29.7246C10.4603 29.2273 11.1442 28.7189 12.4526 28.1994C20.4661 24.6963 25.8108 22.3844 28.4869 21.2637C36.127 18.0797 37.7127 17.523 38.744 17.5008C38.9768 17.5008 39.4758 17.5564 39.8085 17.8236C40.0256 18.0153 40.1639 18.2811 40.1966 18.5695C40.2565 18.9336 40.2751 19.3034 40.252 19.6717Z" fill="#28A7E8"/>
                                </svg>
                            </a>
                        </div>
                        <div className="productData__subcontainer">
                            <h3 className="productData__subtitle">Características</h3>
                            <hr className="productData__hr"/>

                            {product.caracteristicas.descripcion ? 
                                <p className="productData__description">{product.caracteristicas.descripcion}</p> : null
                            }

                            <div className="productData__subcontainer__content">
                                <ul className="productData__subcontainer__content">
                                    {product.caracteristicas.marca ? // verifica si existe y lo muestra
                                        <li className="productData__content__element">
                                            <h5 className="productData__content__title">Marca:</h5>
                                            <span className="productData__content__description">
                                                {product.caracteristicas.marca}
                                            </span>
                                        </li> : null
                                    }
                                    {product.caracteristicas.material ?
                                        <li className="productData__content__element">
                                            <h5 className="productData__content__title">Material:</h5>
                                            <span className="productData__content__description">
                                                {product.caracteristicas.material}
                                            </span>
                                        </li> : null
                                    }
                                    {product.caracteristicas.medidas ?
                                        <li className="productData__content__element">
                                            <h5 className="productData__content__title">Medidas:</h5>
                                            <span className="productData__content__description">
                                                {product.caracteristicas.medidas}
                                            </span>
                                        </li> : null
                                    }
                                    {product.caracteristicas.descarga ?
                                        <li className="productData__content__element">
                                            <h5 className="productData__content__title">Descarga:</h5>
                                            <span className="productData__content__description">
                                                {product.caracteristicas.descarga}
                                            </span>
                                        </li> : null
                                    }
                                    {product.caracteristicas.color ?
                                        <li className="productData__content__element">
                                            <h5 className="productData__content__title">Color:</h5>
                                            <span className="productData__content__description">
                                                {product.caracteristicas.color}
                                            </span>
                                        </li> : null
                                    }
                                    {product.link ?
                                        <li className="productData__content__element">
                                            <h5 className="productData__content__title">Link:</h5>
                                            <span className="productData__content__description">
                                                <a href={product.link} target="blank">Ver video</a>
                                            </span>
                                        </li> : null
                                    }
                                </ul>
                            </div>
                        </div>
                        <span className="productData__code">{product.codigo}</span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProductData;
