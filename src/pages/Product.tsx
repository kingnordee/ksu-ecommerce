import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getCartIdList, getUserSetState, IProduct, IUser, saveToLocalStorage, StorageKeys} from "../common/common";
import {RootState} from "../index";
import {TYPE} from "../common/reducers";

const Product = (props: IProduct) => {

    const [user, setUser] = useState<IUser|null>(null);
    const selectStoreData = useSelector((state:RootState) => state.appData);
    const dispatch = useDispatch();

    useEffect(() => {
        getUserSetState(setUser)
    }, [selectStoreData]);
    
    const addToCart = (productId: number) => {
      const cartFromStorage: number[] | null = getCartIdList();
      if(cartFromStorage == null)  saveToLocalStorage(StorageKeys.CartKey, JSON.stringify([productId]));
      else saveToLocalStorage(StorageKeys.CartKey, JSON.stringify([...cartFromStorage, productId]));
      dispatch({type: TYPE.SetCartItem, payload: true})
    }

    return (
        <div className="product">
            <p className="name">{props.name}</p>
            <img src={props.imageUrl} alt=""/>
            <p className="price">${props.price.toFixed(2)}</p>
            {user && <button className="addToCart" onClick={e => {addToCart(props.id)}}>Add to Cart</button>}
        </div>
    );
};

export default Product;
