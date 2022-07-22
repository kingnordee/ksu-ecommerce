import React, {ReducerState, useEffect, useState} from 'react';
import { useDispatch, useSelector} from 'react-redux'
import {getUserSetState, IProduct, IUser} from "../common/common";
import {StateType} from "../common/reducers";
import {RootState} from "../index";

const Product = (props: IProduct) => {

    const [user, setUser] = useState<IUser|null>(null);
    const selectUser = useSelector((state:RootState) => state.storeData.currentUser)

    useEffect(() => {
        console.log(selectUser);
    }, [user]);

    return (
        <div className="product">
            <p className="name">{props.name}</p>
            <img src={props.imageUrl} alt=""/>
            <p className="price">${props.price}</p>
            {user && <button className="addToCart">Add to Cart</button>}
        </div>
    );
};

export default Product;
