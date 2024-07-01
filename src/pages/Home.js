import React from "react";
import "../styles/home.css";

const Home = () => {


    return (
        <section>
            <div className="home__background"></div>
            <div className="home__content">
                <div className="home__content__container">
                    <h1 className="home__title">Animate a renovar</h1>
                    <div className="home__link__contaier">
                    {/*
                    <a href="./products" className="home__link">
                            <span className="home__link__text">Ver catálogo</span>
                            <svg className="home__link__icon" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.62339 7.49988C9.12552 8.05305 9.12552 8.95139 8.62339 9.50455L2.19627 16.5851C1.69415 17.1383 0.878712 17.1383 0.37659 16.5851C-0.12553 16.032 -0.12553 15.1336 0.37659 14.5805L5.89589 8.5L0.380607 2.41957C-0.121513 1.86639 -0.121513 0.968046 0.380607 0.414877C0.882727 -0.138292 1.69817 -0.138292 2.20029 0.414877L8.6274 7.49545L8.62339 7.49988Z" />
                            </svg>
                        </a>
                    */}
                    </div>
                </div>
                <div className="home__arrowBottom__container">
                    <a href="#categories" className="home__arrowBottom__link">
                        <svg className="home__arrowBottom__icon" viewBox="0 0 28 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.6473 13.4142C14.7362 14.1952 13.2565 14.1952 12.3454 13.4142L0.683323 3.41642C-0.227772 2.63535 -0.227772 1.36688 0.683323 0.585806C1.59442 -0.195269 3.07404 -0.195269 3.98513 0.585806L14 9.17139L24.0148 0.592056C24.9259 -0.189021 26.4056 -0.189021 27.3167 0.592056C28.2278 1.37313 28.2278 2.6416 27.3167 3.42268L15.6546 13.4204L15.6473 13.4142Z" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Home;