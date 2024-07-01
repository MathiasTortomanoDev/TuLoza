import { useState, useEffect } from 'react';

const GetDataCollection = async ({ collection }) => {
    try {
        const response = await fetch(`https://tuloza.com/data/${collection}.json`);
        if (!response.ok) {
            throw new Error('Error al obtener los datos del archivo JSON');
        }
        const data = await response.json();
        return data[collection];
    } catch (error) {
        console.error(error);
        return [];
    }
};

export default GetDataCollection;
