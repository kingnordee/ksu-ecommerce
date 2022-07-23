import React, {useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {IUser, saveToLocalStorage, StorageKeys} from "../common/common";
import {TYPE} from "../common/reducers";
import {useDispatch} from "react-redux";

const Payment = () => {
    const dispatch = useDispatch();

    const [ leftData, setLeftData ] = useState({
        fullName:"", email:"",    address:"", city:"", state:"",
        zipcode:""
    })

    const [rightData, setRightData] = useState({
        nameOnCard:"", cardNumber:"", xMonth:"", xYear:"", cvv:""
    });

    const [shipping, setShipping] = useState({
        fillShipping:false, address:"", city:"", state:"", zipcode:""
    });


    const navigate = useNavigate();

    const handlePayment = () => {
        if(window.confirm("Confirm payment for your order?")){
            localStorage.removeItem(StorageKeys.CartKey);
            dispatch({type: TYPE.SetCartItem, payload: false})
            navigate("/success");
        }else{
            navigate("/payment");
        }
    }

    return <div className="payment">
            <h2>Payment Form</h2>

            <form onSubmit={handlePayment}>
                <div className="inputs">
                    <div className="left">
                        <div className="fullName">
                            <label htmlFor="fullName">Full  Name</label>
                            <input type="text" id="fullName"
                                   required
                                   value={leftData.fullName}
                                   onChange={(e => setLeftData({...leftData, fullName: e.target.value}))}
                            />
                        </div>
                        <div className="email">
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email"
                                   required
                                   value={leftData.email}
                                   onChange={(e => setLeftData({...leftData, email: e.target.value}))}
                            />
                        </div>
                        <div className="address">
                            <label htmlFor="address">Address</label>
                            <input type="text" id="address"
                                   required
                                   value={leftData.address}
                                   onChange={(e => setLeftData({...leftData, address: e.target.value}))}
                            />
                        </div>
                        <div className="city">
                            <label htmlFor="city">City</label>
                            <input type="text" id="city"
                                   required
                                   value={leftData.city}
                                   onChange={(e => setLeftData({...leftData, city: e.target.value}))}
                            />
                        </div>
                        <div className="stateAndZip">
                            <div className="state">
                                <label htmlFor="state">State</label>
                                <input type="text" id="state"
                                       required
                                       value={leftData.state}
                                       onChange={(e => setLeftData({...leftData, state: e.target.value}))}
                                />
                            </div>
                            <div className="zipcode">
                                <label htmlFor="zipcode">Zip Code</label>
                                <input type="text" id="zipcode"
                                       required
                                       value={leftData.zipcode}
                                       onChange={(e => setLeftData({...leftData, zipcode: e.target.value}))}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="right">
                        <div className="nameOnCard">
                            <label htmlFor="nameOnCard">Name on Card</label>
                            <input type="text" id="nameOnCard"
                                   required
                                   value={rightData.nameOnCard}
                                   onChange={(e => setRightData({...rightData, nameOnCard: e.target.value}))}
                            />
                        </div>
                        <div className="cardNumber">
                            <label htmlFor="cardNumber">Card Number</label>
                            <input type="text" id="cardNumber"
                                   required
                                   value={rightData.cardNumber}
                                   onChange={(e => setRightData({...rightData, cardNumber: e.target.value}))}
                            />
                        </div>
                        <div className="xMonth">
                            <label htmlFor="cardNumber">Exp. Month</label>
                            <input type="text" id="cardNumber"
                                   required
                                   value={rightData.cardNumber}
                                   onChange={(e => setRightData({...rightData, cardNumber: e.target.value}))}
                            />
                        </div>
                        <div className="yearAndCvv">
                            <div className="xYear">
                                <label htmlFor="xYear">Exp. Year</label>
                                <input type="text" id="xYear"
                                       required
                                       value={rightData.xYear}
                                       onChange={(e => setRightData({...rightData, xYear: e.target.value}))}
                                />
                            </div>
                            <div className="cvv">
                                <label htmlFor="cvv">CVV</label>
                                <input type="text" id="cvv"
                                       required
                                       value={rightData.cvv}
                                       onChange={(e => setRightData({...rightData, cvv: e.target.value}))}
                                />
                            </div>
                        </div>
                        <div className="fillerWrapper">
                            <label htmlFor="filler">Filler</label>
                            <input type="text" id="filler"/>
                        </div>
                    </div>
                </div>

                <button type="submit" onClick={handlePayment}>Confirm Payment</button>
            </form>
    </div>
};

export default Payment;
