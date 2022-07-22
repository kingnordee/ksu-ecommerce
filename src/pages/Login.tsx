import { useState } from "react";
import {saveToLocalStorage, IUser} from "../common/common";
import { useNavigate } from 'react-router-dom'
import {useDispatch} from "react-redux";
import {TYPE} from "../common/reducers";

const Login = () => {
    const dispatch = useDispatch()

    const [ state, setState ] = useState({
        email:"", password:""
    })

    const navigate = useNavigate();

    const handleSubmit = () => {
        const user: IUser = {
            firstName: "",
            lastName: "",
            email: state.email,
            password: state.password
        }
        // saveToLocalStorage("user", JSON.stringify(user));
        dispatch({type: TYPE.SetUser, payload: user})
        navigate("/")
    }

    return (
        <div className="login">
            <div className="formWrapper">
                <h2>Sign In Form</h2>

                <form onSubmit={handleSubmit}>

                    <div className="inputs">
                        <div className="email">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email"
                                   required
                                   value={state.email}
                                   onChange={(e => setState({...state, email: e.target.value}))}
                            />
                        </div>
                        <div className="password">
                            <label htmlFor="password">Password</label>

                            <input type="password" id="password"
                                   required
                                   value={state.password}
                                   onChange={(e => setState({...state, password: e.target.value}))}
                            />
                        </div>
                    </div>

                    <button type="submit" onClick={handleSubmit}>Sign In</button>
                </form>
            </div>
        </div>

    );
}

export default Login
