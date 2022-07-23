import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./pages/NavBar";
import Home from "./pages/Home"
import './styles/_App.scss';
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ShoppingCart from "./pages/ShoppingCart";
import Payment from "./pages/Payment";
import Success from "./pages/Success";

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar/>
                <div className="components">
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/sign-in' element={<Login/>}/>
                        <Route path='/sign-up' element={<SignUp/>}/>
                        <Route path='/shopping-cart' element={<ShoppingCart/>}/>
                        <Route path='/payment' element={<Payment/>}/>
                        <Route path='/success' element={<Success/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
            <footer><h5>&copy; Team 1, Software Architecture, Summer 2022</h5></footer>
        </div>
    );
};

export default App;

