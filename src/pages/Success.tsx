import React from 'react';
import {useNavigate} from "react-router-dom";

const Success = () => {

    const navigate = useNavigate();
    return (
        <div className="success">
            <div className="innerSuccess">
                <p className="successMessage">
                    Congratulations... Your order has been placed successfully!
                </p>
                <button className="continueShopping" onClick={() => navigate("/")}>Continue Shopping</button>
            </div>
        </div>
    );
};

export default Success;
