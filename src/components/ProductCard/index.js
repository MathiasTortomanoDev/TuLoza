import React, { useEffect } from "react";
import { Link } from "wouter";
import "./productCard.css";

const ProductCard = ({ product, indexKey, collection }) => {
    
    return (
        <Link className="productCard__link" key={indexKey} href={`/${collection}/${product.id}`}>
            <section className="productCard">
                <div className="productCard__img__container">
                    <img className="productCard__img" src={`https://tuloza.com/images/${collection}/${product.imagen_principal}`} alt="Imagen no encontrada" loading="lazy" />
                </div>
                <div className="productCard__description">
                    <h4 className="productCard__title">{product.nombre}</h4>
                    <div className="productCard__description__bottom">
                        <span className="productCard__price">USD {product.precio}</span>
                        {product.caracteristicas.stock ? 
                            <div className="productCard__stock">
                                Agotado
                            </div> : null
                        }
                    </div>
                </div>
            </section>
        </Link>
    )
}

export default ProductCard