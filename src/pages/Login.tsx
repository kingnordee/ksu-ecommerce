import { useEffect, useState } from "react";
// import { useHistory } from 'react-router-dom'

const Login = () => {


    const [ state, setState ] = useState({
        email:"", password:""
    })

    const handleSubmit = async () => {

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
