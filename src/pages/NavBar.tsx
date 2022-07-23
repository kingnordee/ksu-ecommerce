import React, {useEffect, useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {getCartIdList, getUserSetState, IUser} from "../common/common";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../index";
import {TYPE} from "../common/reducers";

const NavBar = () => {
    const [user, setUser] = useState<IUser|null>(null);
    const [cartItemCount, setCartItemCount] = useState(0);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const storeState = useSelector((state: RootState) => state)

    useEffect(() => {
        const cartList = new Set(getCartIdList());
        if(cartList !== null) setCartItemCount(cartList.size);
        else setCartItemCount(0);
        getUserSetState(setUser)
    }, [storeState]);

    const checkActive = (isActive: boolean) => {
        return (isActive ? 'isActive' : '')
    }

    const signOut =  () => {
        localStorage.clear();
        setUser(null);
        setCartItemCount(0);
        dispatch({type: TYPE.SetUser, payload: false})
        dispatch({type: TYPE.SetCartItem, payload: false})
        navigate("/");
    }

    return (
        <div className="navBar">
            <div className="navInnerWrapper">
                <div className="navLeft">
                    <NavLink className={({ isActive }) => checkActive(isActive)}  to="/">Products</NavLink>
                </div>
                <div className="navRight">
                    {!user && <NavLink className={({isActive}) => checkActive(isActive)} to="/sign-in">Sign In</NavLink>}
                    {!user && <NavLink className={({isActive}) => checkActive(isActive)} to="/sign-up">Sign Up</NavLink>}
                    {user && <p>Welcome, {user.firstName.trim().length > 0 ? user.firstName.trim() : user.email.trim()}!</p>}
                    {user && <p className="cart">
                        {cartItemCount > 0 && <span className="cartCount">{cartItemCount}</span>}
                        <NavLink className={({isActive}) => checkActive(isActive)} to="/shopping-cart">Cart</NavLink>
                    </p>}
                    {user && <p style={{cursor:"pointer"}} onClick={signOut}>Sign Out</p>}
                </div>
            </div>
        </div>
    );
};

export default NavBar;
