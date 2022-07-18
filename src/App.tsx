import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./pages/NavBar";
import Home from "./pages/Home"
import './styles/_App.scss';
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar/>
                <div className="components">
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/login' element={<Login/>}/>
                        <Route path='/sign-up' element={<SignUp/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
            <footer><h5>&copy; Team 4, Project Management, Summer 2021</h5></footer>
        </div>
    );
};

export default App;

