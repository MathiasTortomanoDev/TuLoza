import React from "react";
import "./filters.css"

const Filters = () => {


    return (
        <section className="filters__container">
            <div className="filters__content">
                <div className="filters__selects">
                    <div className="filters__select__container filters__category__container">
                        <h4 className="filters__title">Ordenar por:</h4>
                        <select>
                            <option>Mayor a menor</option>
                            <option>Menor a mayor</option>
                            <option>Por defecto</option>
                            <option disabled selected>Precio</option>
                        </select>
                        <select>
                            <option>Último a primero</option>
                            <option>Primero a último</option>
                            <option>Por defecto</option>
                            <option disabled selected>Fecha</option>
                        </select>
                    </div>
                    <div className="filters__select__container filters__category__container">
                        <h4 className="filters__title">Categoria:</h4>
                        <select>
                            <option disabled hidden selected>Select One</option>
                            <option>Choose Me!</option>
                            <option>No Me!</option>
                            <option>Me Me Me!</option>
                        </select>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Filters