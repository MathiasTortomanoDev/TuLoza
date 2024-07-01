import React, { useEffect, useState } from "react";
import getDataCollection from "../services/getDataCollection";
/* import Filters from "../components/Filters"; */
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import "../styles/category.css";

const Category = ({ collection, name, currentPage, setCurrentPage }) => {
    const [products, setProducts] = useState([]);
    const [firstIndex, setFirstIndex] = useState(0);
    const productsPerPage = 20;
    const lastIndex = firstIndex + productsPerPage;

    useEffect(() => {
        const fetchProducts = async () => {
            const fetchedProducts = await getDataCollection({ collection });
            setProducts(fetchedProducts);
        };

        fetchProducts();
    }, [collection]);

    useEffect(() => {
        setFirstIndex((currentPage - 1) * productsPerPage);
    }, [currentPage]);

    const totalProducts = products.length;

    return (
        <article className="category">
            <div className={`category__start__background category__start__background-${collection}`}></div>
            <section className="category__start">
                <h1 className="category__start__title">{collection}</h1>
            </section>
             {/*  <Filters products={products} />   */}
            <section className="category__products__container" id="category-start">
                {products
                    .slice(firstIndex, lastIndex)
                    .reverse()
                    .map((product, index) => (
                        <ProductCard product={product} key={index} collection={collection} />
                    ))
                }
            </section>
            <Pagination 
                productsPerPage={productsPerPage} 
                currentPage={currentPage} 
                setCurrentPage={setCurrentPage}
                totalProducts={totalProducts} 
            />
        </article>
    );
};

export default Category;
