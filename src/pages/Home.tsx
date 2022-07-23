import React from 'react';
import Product from "./Product";
import {products} from "../common/common";

const Home = () => {
    return (
        <div className="home">
            {products.map((product, idx) => {
                return <Product
                    key={idx}
                    id={product.id}
                    name={product.name}
                    imageUrl={product.imageUrl}
                    qty={1}
                    price={product.price}
                />
            })}
        </div>
    );
};

export default Home;

// https://kingnordee.github.io/ksu-ecommerce/home
