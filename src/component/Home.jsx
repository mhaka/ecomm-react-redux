import React from "react";
import Products from "./Products";

const Home = () => {
    return (
        <div className="hero">
            <div className="card bg-dark text-white border-0">
                <img src="./assets/bg_.jpg" className="card-img" alt="Background" />
                <div className="card-img-overlay d-flex felx-column justify-content-around-center">
                    <div className="container">
                        <h5 className="card-title display-5 fw-bold text-warning">NEW SEASON ARRIVALS</h5>
                        <p className="card-text text-warning lead fs-2">CHECK OUT ALL THE TRENDS</p>
                    </div>
                </div>
            </div>
            <Products/>
        </div>
    );
}

export default Home;