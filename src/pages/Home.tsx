import React from 'react';
import Product from "./Product";

const Home = () => {

    const products = [20.67, 59.00, 37.84, 23.10, 54.31,23.00,75.67,87.00,53.50, 150.05, 13.86, 99.99];
    return (
        <div className="home">
            {products.map((num, idx) => {
                return <Product
                    key={idx}
                    id={idx}
                    name={"Product Name"}
                    imageUrl={"https://i.ytimg.com/vi/lxCY5fObe30/maxresdefault.jpg"}
                    price={num}
                    quantity={idx}
                />
            })}
        </div>
    );
};

export default Home;

// https://kingnordee.github.io/ksu-ecommerce/home
