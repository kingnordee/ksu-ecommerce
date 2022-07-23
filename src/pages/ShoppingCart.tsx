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

        const itemMap = new Map<string, number>();

        if(cartList !== null) cartList.forEach(id => {
            if(!itemMap.has(id+"")) itemMap.set(id+"", 1)
            else itemMap.set(id+"", itemMap.get(id+"")! + 1)



            // const product = products.find(item => item.id == id);
            // product && listedProducts.push(product);
            // product && (sumPrice += product.price);
        })

        itemMap.forEach((value: number, key: string ) => {
            const product: IProduct | undefined =  products.find(item => item.id == parseInt(key));
            const newProduct: IProduct  = {    id: product!.id,
                name: product!.name,
                imageUrl: product!.imageUrl,
                qty: value,
                price: product!.price,
            }
            newProduct && listedProducts.push(newProduct);
            newProduct && (sumPrice += (newProduct.price * value));
        });

        console.log(listedProducts);
        setProductList(listedProducts);
        setCartTotal(sumPrice)

    }, [])

    return (
        <div className="shoppingCart">
            <h2 className="cartHeader">Shopping Cart</h2>

            {cartTotal < 1 && <p className="cartEmpty">Your Shopping Cart is empty!</p>}

            {productList.map((product: IProduct, idx: number) => {
                return <div className="cartItem" key={idx}>
                    <p className="itemName">{product.name}</p>
                    <p className="itemBreakDown"> Qty: {product.qty} * Price: {product.price.toFixed(2)} </p>
                    <p className="itemPrice"> Item Total: ${(product.price * product.qty).toFixed(2)}</p>
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
