import React, {useEffect, useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {getUserSetState, IUser} from "../common/common";
import {useSelector} from "react-redux";
import {RootState} from "../index";

const NavBar = () => {

    const [state, setState] = useState<IUser|null>(null);
    const navigate = useNavigate();

    const selectUser = useSelector((state:RootState) => state.storeData.currentUser)

    useEffect(() => {
        getUserSetState(setState)

    }, []);

    const checkActive = (isActive: boolean) => {
        return (isActive ? 'isActive' : '')
    }

    const signOut =  () => {
        localStorage.clear();
        setState(null);
        navigate("/");
    }
    return (
        <div className="navBar">
            <div className="navInnerWrapper">
                <div className="navLeft">
                    <NavLink className={({ isActive }) => checkActive(isActive)}  to="/">Home</NavLink>
                </div>
                <div className="navRight">
                    {!state && <NavLink className={({isActive}) => checkActive(isActive)} to="/sign-in">Sign In</NavLink>}
                    {!state && <NavLink className={({isActive}) => checkActive(isActive)} to="/sign-up">Sign Up</NavLink>}
                    {state && <p>Welcome, {state.firstName.trim().length > 0 ? state.firstName.trim() : state.email.trim()}!</p>}
                    {state && <p>View Cart</p>}
                    {state && <p style={{cursor:"pointer"}} onClick={signOut}>Sign Out</p>}
                </div>
            </div>
        </div>
    );
};

export default NavBar;
