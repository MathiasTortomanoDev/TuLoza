import React, { useEffect, useState } from "react";
import { Router, Route, Switch, useLocation } from "wouter";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Home from "./pages/Home.js";
import Footer from "./components/Footer";
import Categories from "./pages/Categories.js";
import Category from "./pages/Category.js";
import ProductCard from "./components/ProductCard";
import ProductData from "./pages/ProductData.js";
import Products from "./pages/Products.js";
import Explore from "./pages/Explore.js";

import './App.css';

function App() {
    const [search, setSearch] = useState("");

    return (
        <Router>
            <div className="App">
                <Header>
                    <div className="header__searchBar__container">
                      <SearchBar setSearch={setSearch} />
                    </div>
                </Header>
                <AppRoutes search={search} />
            </div>
        </Router>
    );
}

function AppRoutes({ search }) {
    const [location] = useLocation();
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <Switch>
            <Route path="/">
                <Home />
                <Categories />
                <Explore />
                <Footer />
            </Route>
            <Route path="/products">
                <Products search={search} />
                <Footer />
            </Route>
            <Route path="/:title">
                {(params) => (
                    <>
                        <Category
                            collection={params.title}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                            name={location.state && location.state.categoryName}
                        >
                            {(product, index) => (
                                <ProductCard
                                    product={product}
                                    indexKey={index}
                                    collection={params.title}
                                    key={index}
                                />
                            )}
                        </Category>
                        <Footer />
                    </>
                )}
            </Route>
            <Route path="/:collection/:id">
                {(params) => (
                    <ProductData collection={params.collection} id={params.id} />
                )}
            </Route>
            <Route>
                <NoMatchPage location={location} />
            </Route>
        </Switch>
    );
}

function NoMatchPage({ location }) {
    return (
        <div>
            <h2>
                No se encontró la página <code>{location}</code>
            </h2>
            <p>Verifica la URL e intenta nuevamente.</p>
        </div>
    );
}

export default App;
