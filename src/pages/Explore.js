import React from "react";
import "../styles/explore.css"

const Explore = () => {

    return (
        <section className="explore">
            <div className="explore__background"></div>
            <div className="explore__content">
                <h3 className="explore__title">EXPLORAR</h3>
                <a href="/products" className="explore__link">Ver Catálogo</a>
            </div>
        </section>
    )
}

export default Explore;