import React, { useState, useEffect } from "react";
import "./header.css"

import logo from "../../images/logo.png"

const Header = ({ children }) => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener('load', handleScroll);
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    return (
        <header className={`header ${isScrolled ? 'header-active' : ''}`}>
            <div className="header__content">
                <section className="header__logo__container">
                    <a className="header__logo__link" href="https://tuloza.com">
                        <img className="header__logo" src={logo} alt="logo" />
                    </a>
                </section>
                {/*
                <section className="header__links__container">
                    <ul className="header__elements">
                        <li className="header__element">
                            <a href="/" className="header__link">Inicio</a>
                        </li>
                        <li className="header__element">
                            <a href="./products" className="header__link">Catálogo</a>
                        </li>
                        <li className="header__element">
                            <a href="https://tuloza.com#categories" className="header__link">Categorías</a>
                        </li>
                    </ul>
                </section>
                */}
                {/*
                <section className="header__search__container">
                    <input className="header__search__input" type="text" name="" id="" placeholder="buscar productos" />
                    <a className="header__search__link" href="search">
                        <svg className="header__search__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                        </svg>
                    </a>
                </section>
                */}
            {children}
            </div>
        </header>
    )
}

export default Header;