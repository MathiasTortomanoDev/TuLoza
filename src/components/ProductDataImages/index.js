import React, { useState, useRef } from "react";
import useScroll from "../../hooks/useChangeScroll";
import "./productDataImages.css";

const ProductDataImages = ({ collection, product }) => {
    const containerRef = useRef(null);
    const [mainImage, setMainImage] = useState(product.imagen_principal);
    const [scrolledHiddenLeft, setScrolledHiddenLeft] = useState("hidden-left");
    const [scrolledHiddenRight, setScrolledHiddenRight] = useState("");
    const { scrollRight, scrollLeft } = useScroll(containerRef);

    const handleClickSecondaryImage = (imageUrl) => {
        setMainImage(imageUrl);
    };

    const isScrolled = () => {
        if (containerRef.current && containerRef.current.scrollLeft === 0) {
            setScrolledHiddenLeft("hidden-left");
        } else if (
            Math.round(
                containerRef.current.scrollLeft + containerRef.current.clientWidth
            ) === containerRef.current.scrollWidth
        ) {
            setScrolledHiddenRight("hidden-right");
        } else {
            setScrolledHiddenRight("");
            setScrolledHiddenLeft("");
            console.log(scrolledHiddenRight);
        }
    };

    return (
        <div className="productData__img__container">
            <img
                className="productData__img"
                src={`https://tuloza.com/images/${collection}/${mainImage}`}
                title={`${collection} ${product.nombre}`}
                alt={`${collection} | ${product.caracteristicas.marca} - ${product.caracteristicas.color} ${product.caracteristicas.material}`}
            />
            {product.imagenes_secundarias ? (
                <div className="productData__bottom__container">
                    {product.imagenes_secundarias.length > 4 ? (
                        <button
                            className={`productData__img__icon__container productData__img__icon__container-left ${scrolledHiddenLeft}`}
                            onClick={() => scrollLeft(190)}
                        >
                            <svg
                                className="productData__img__icon"
                                viewBox="0 0 12 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M0.502153 11.7354C-0.167355 11.0521 -0.167355 9.9424 0.502153 9.25908L9.07164 0.512491C9.74113 -0.17083 10.8284 -0.17083 11.4979 0.512491C12.1674 1.19581 12.1674 2.30553 11.4979 2.98885L4.13881 10.5L11.4925 18.0111C12.162 18.6945 12.162 19.8042 11.4925 20.4875C10.823 21.1708 9.73578 21.1708 9.06628 20.4875L0.4968 11.7409L0.502153 11.7354Z" />
                            </svg>
                        </button>
                    ) : null}
                    <div
                        className="productData__secondaryImgs__container"
                        onScroll={() => isScrolled()}
                        ref={containerRef}
                    >
                        {product.imagenes_secundarias.map((img, index) => (
                            <img
                                key={index}
                                className="productData__secondaryImg"
                                src={`https://tuloza.com/images/${collection}/${img}`}
                                title={`${collection} ${product.nombre}`}
                                alt={`imagen secundaria ${index} | ${collection} - ${product.caracteristicas.marca}`}
                                onClick={() => handleClickSecondaryImage(img)}
                            />
                        ))}
                    </div>
                    {product.imagenes_secundarias.length > 4 ? (
                        <button
                            className={`productData__img__icon__container productData__img__icon__container-right ${scrolledHiddenRight}`}
                            onClick={() => scrollRight(190)}
                        >
                            <svg
                                className="productData__img__icon"
                                viewBox="0 0 12 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M11.4978 9.26456C12.1674 9.94788 12.1674 11.0576 11.4978 11.7409L2.92836 20.4875C2.25887 21.1708 1.17162 21.1708 0.50212 20.4875C-0.167373 19.8042 -0.167373 18.6945 0.50212 18.0112L7.86119 10.5L0.507476 2.98888C-0.162018 2.30554 -0.162018 1.19582 0.507476 0.512495C1.17697 -0.170832 2.26422 -0.170832 2.93372 0.512495L11.5032 9.25908L11.4978 9.26456Z" />
                            </svg>
                        </button>
                    ) : null}
                </div>
            ) : null}
        </div>
    );
};

export default ProductDataImages;
