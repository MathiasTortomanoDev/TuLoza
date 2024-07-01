import React from "react";
import { Link } from "wouter";
import categories from "../data/categories.js";
import "../styles/categories.css";

const Categories = () => {
    return (
        <section className="categories" id="categories">
            <div className="categories__content">
                  <div className="categories__title__container">
                    <h3 className="categories__title">Baños</h3>
                    {/*
                    <div className="categories__arrows__container">
                        <svg className='categories__arrow categories__arrow-disabled categories__arrowRight' viewBox="0 0 18 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.753229 16.7649C-0.251032 15.7887 -0.251032 14.2034 0.753229 13.2273L13.6075 0.73213C14.6117 -0.244043 16.2426 -0.244043 17.2468 0.73213C18.2511 1.7083 18.2511 3.29361 17.2468 4.26978L6.20821 15L17.2388 25.7302C18.243 26.7064 18.243 28.2917 17.2388 29.2679C16.2345 30.244 14.6037 30.244 13.5994 29.2679L0.745199 16.7727L0.753229 16.7649Z"/>
                        </svg>
                        <svg className='categories__arrow categories__arrowLeft' viewBox="0 0 18 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.2468 13.2351C18.251 14.2113 18.251 15.7966 17.2468 16.7727L4.39254 29.2679C3.38831 30.244 1.75742 30.244 0.753179 29.2679C-0.25106 28.2917 -0.25106 26.7064 0.753179 25.7302L11.7918 15L0.761214 4.26982C-0.243026 3.29363 -0.243026 1.70832 0.761214 0.732135C1.76545 -0.244045 3.39634 -0.244045 4.40058 0.732135L17.2548 13.2273L17.2468 13.2351Z"/>
                        </svg>
                    </div>
                    */}
                  </div>
                <hr className="categories__hr" />
                <div className="categories__elements__container">
                    {categories.baños.map((category, index) => (
                        <Link key={index} className="categories__element__container" href={`/${category.title}`} name={category.name}>
                            <section className="categories__element">
                                <div className="categories__element__background"></div>
                                <img className="categories__element__background__img" src={category.img_path} alt="imagen no disponible" draggable="false" loading="lazy"/>
                                <div className="categories__element__title">{category.name}</div>
                            </section>
                        </Link>
                    ))}
                    
                </div>


                <div className="categories__title__container">
                    <h3 className="categories__title">Cocinas</h3>
                    {/*
                    <div className="categories__arrows__container">
                        <svg className='categories__arrow categories__arrow-disabled categories__arrowRight' viewBox="0 0 18 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.753229 16.7649C-0.251032 15.7887 -0.251032 14.2034 0.753229 13.2273L13.6075 0.73213C14.6117 -0.244043 16.2426 -0.244043 17.2468 0.73213C18.2511 1.7083 18.2511 3.29361 17.2468 4.26978L6.20821 15L17.2388 25.7302C18.243 26.7064 18.243 28.2917 17.2388 29.2679C16.2345 30.244 14.6037 30.244 13.5994 29.2679L0.745199 16.7727L0.753229 16.7649Z"/>
                        </svg>
                        <svg className='categories__arrow categories__arrowLeft' viewBox="0 0 18 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.2468 13.2351C18.251 14.2113 18.251 15.7966 17.2468 16.7727L4.39254 29.2679C3.38831 30.244 1.75742 30.244 0.753179 29.2679C-0.25106 28.2917 -0.25106 26.7064 0.753179 25.7302L11.7918 15L0.761214 4.26982C-0.243026 3.29363 -0.243026 1.70832 0.761214 0.732135C1.76545 -0.244045 3.39634 -0.244045 4.40058 0.732135L17.2548 13.2273L17.2468 13.2351Z"/>
                        </svg>
                    </div>
                    */}
                  </div>
                <hr className="categories__hr" />
                <div className="categories__elements__container">
                    {categories.cocinas.map((category, index) => (
                        <Link key={index} className="categories__element__container" href={`/${category.title}`} name={category.name}>
                            <section className="categories__element">
                                <div className="categories__element__background"></div>
                                <img className="categories__element__background__img" src={category.img_path} alt="imagen no disponible" draggable="false" loading="lazy"/>
                                <div className="categories__element__title">{category.name}</div>
                            </section>
                        </Link>
                    ))}
                    
                </div>

            </div>
        </section>
    );
}

export default Categories;
