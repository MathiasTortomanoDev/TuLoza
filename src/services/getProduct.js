import React, { useState, useEffect } from "react";
import GetDataCollection from "./getDataCollection";

const GetProduct = ({ collection, id }) => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const products = await GetDataCollection({ collection });
                const parsedId = parseInt(id);
                const foundProduct = products.find(product => !isNaN(parsedId) && product.id === parsedId);
                setProduct(foundProduct);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        fetchProduct();
    }, [collection, id]);

    return product;
};

export default GetProduct;
