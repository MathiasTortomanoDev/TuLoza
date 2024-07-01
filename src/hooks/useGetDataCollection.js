
import { useState, useEffect } from 'react';
import GetDataCollection from '../services/getDataCollection';

const useGetDataCollection = ({ collection }) => {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await GetDataCollection({ collection });
                setProducts(data);
            } catch (error) {
                console.error(error);
                setProducts([]); // Establecer productos como array vacío en caso de error
            }
        };

        fetchData();
    }, [collection]);

    return products;
}

export default useGetDataCollection;
