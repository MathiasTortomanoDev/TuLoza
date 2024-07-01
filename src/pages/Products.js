import React, { useState, useEffect } from "react";
import GetDataCollection from '../services/getDataCollection';
import ProductCard from "../components/ProductCard";

const categories = [
    { title: "inodoros", name: "Inodoros" },
    { title: "bañeras", name: "Bañeras e hidromasajes" },
    { title: "griferias", name: "Gríferías" },
    { title: "espejos", name: "Espejos" },
    { title: "accesorios", name: "Accesorios" },
    { title: "cisternas", name: "Cisternas" },
    { title: "bachas", name: "Bachas" },
    { title: "bidets", name: "Bidets" },
    { title: "tapas", name: "Tapas de inodoro" },
    { title: "muebles", name: "Muebles de baño" },
    { title: "lavatorios", name: "Lavatorios con pedestal" },
    { title: "mingitorios", name: "Mingitorios" },
    { title: "mamparas", name: "Mamparas" },
    { title: "desagues", name: "Rejillas y desagües" },
    { title: "extractores", name: "Extractores" },
    
    { title: "accesoriosCocina", name: "Accesorios" },
    { title: "griferiasCocina", name: "Griferias" },
    { title: "piletas", name: "Piletas" }
    
    /*
    { title: "anafes", name: "Anafes" },
    { title: "cafeteras", name: "Cafeteras" },
    { title: "calientaPlatos", name: "Calienta Platos" },
    { title: "campanas", name: "Campanas" },
    { title: "heladeras", name: "Heladeras" },
    { title: "hornos", name: "Hornos" },
    { title: "lavavajillas", name: "Lavavajillas" },
    { title: "microondas", name: "Microondas" },
    */
];

const seedRandom = (seed) => {
    let x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
};

const shuffleArrayWithSeed = (array, seed) => {
    let m = array.length, t, i;

    while (m) {
        i = Math.floor(seedRandom(seed++) * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }

    return array;
};

const Products = ({ search }) => {
    const [allProducts, setAllProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [visibleProducts, setVisibleProducts] = useState([]);
    const [noResults, setNoResults] = useState(false);
    const [page, setPage] = useState(1);
    const productsPerPage = 20;
    const seed = 12345;

    useEffect(() => {
        const fetchAllData = async () => {
            try {
                const allData = await Promise.all(
                    categories.map(async (category) => {
                        const products = await GetDataCollection({ collection: category.title });
                        return products;
                    })
                );
                const flatData = allData.flat();
                const shuffledData = shuffleArrayWithSeed(flatData, seed);
                setAllProducts(shuffledData);
                setVisibleProducts(shuffledData.slice(0, productsPerPage));
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchAllData();
    }, []);

    useEffect(() => {
        const searchTerms = search.toLowerCase().split(' ');

        const filteredProductsArray = allProducts.filter(product => {
            const productValues = [
                product.nombre,
                product.codigo,
                product.caracteristicas?.marca,
                product.caracteristicas?.color,
                product.caracteristicas?.material,
                ...product.categorias
            ].filter(Boolean).map(value => value.toLowerCase());

            return searchTerms.every(term =>
                productValues.some(value => value.includes(term))
            );
        });

        setFilteredProducts(filteredProductsArray);
        setVisibleProducts(filteredProductsArray.slice(0, productsPerPage));
        setNoResults(filteredProductsArray.length === 0);
        setPage(1); // reinicia a la primera pagina en cada nueva busqueda
        document.getElementById('category-start').scrollIntoView();
    }, [search, allProducts]);

    useEffect(() => {
        setVisibleProducts(filteredProducts.slice(0, page * productsPerPage));
    }, [page, filteredProducts]);

    const loadMoreProducts = () => {
        setPage(prevPage => prevPage + 1);
    };

    return (
        <div>
            <article className="category">
                <div className={`category__start__background category__start__background-explore`}></div>
                <section className="category__start">
                    <h1 className="category__start__title">Explora</h1>
                </section>
                <section className="category__products__container" id="category-start">
                    {noResults ? (
                        <div className="category__noResults__container">
                            <p className="category__noResults__title">No se encontraron resultados</p>
                            <small className="category__noResults__description">Intentalo nuevamente buscando por nombre, color, marca, material...</small>
                        </div>
                    ) : (
                        visibleProducts.map((product, index) => (
                            <ProductCard product={product} key={index} collection={product.coleccion} />
                        ))
                    )}
                </section>
                {visibleProducts.length < filteredProducts.length && (
                    <button className="category__loadMore" onClick={loadMoreProducts}>Cargar más</button>
                )}
            </article>
        </div>
    );
};

export default Products;
