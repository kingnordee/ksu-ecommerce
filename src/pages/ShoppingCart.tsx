import React, {useEffect, useState} from 'react';
import {getCartIdList, IProduct, products} from "../common/common";
import {useNavigate} from "react-router-dom";

const ShoppingCart = () => {
    const [productList, setProductList] = useState<IProduct[]>([]);
    const [cartTotal, setCartTotal] = useState<number>(0);
    const navigate = useNavigate();

    useEffect(() => {
        const cartList = getCartIdList()
        const listedProducts: IProduct[]  = [];
        let sumPrice = 0;

        if(cartList !== null) cartList.forEach(id => {
            const product = products.find(item => item.id == id);
            product && listedProducts.push(product);
            product && (sumPrice += product.price);
        })

        setProductList(listedProducts);
        setCartTotal(sumPrice)

    }, [productList, cartTotal])

    return (
        <div className="shoppingCart">
            <h2 className="cartHeader">Shopping Cart</h2>

            {cartTotal < 1 && <p className="cartEmpty">Your Shopping Cart is empty!</p>}

            {productList.map((product: IProduct, idx: number) => {
                return <div className="cartItem" key={idx}>
                    <p className="itemName">{product.name}</p>
                    <p className="itemPrice">${product.price}</p>
                </div>
            })}

            {cartTotal > 0 && <div className="total">
                <p>Total: ${cartTotal.toFixed(2)}</p>
                <button className="paymentButton" onClick={() => navigate("/payment")}>Proceed to Payment</button>
            </div>}
        </div>
    );
};

export default ShoppingCart;
