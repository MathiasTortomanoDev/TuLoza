import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import "./searchBar.css"

const SearchBar = ({ setSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [, setLocation] = useLocation();

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        setSearch(value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            setLocation('/products#category-start');
            console.log("enter")
            document.activeElement.blur();
        }
    };

    return (
        <div className="searchBar__container">
            <input 
                className="searchBar"
                value={searchTerm} 
                onChange={handleSearch} 
                onKeyDown={handleKeyDown}
                type="text" 
                placeholder="Buscar productos por nombre, color, marca..." 
            />
            <Link href="/products#category-start" className="searchBar__icon__container">
                <svg className="searchBar__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                </svg>
            </Link>
        </div>
    );
};

export default SearchBar;
