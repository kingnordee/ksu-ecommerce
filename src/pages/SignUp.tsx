import React, {useState} from 'react';

const SignUp = () => {



    const [ state, setState ] = useState({
        email:"", password:"", firstName:"",  lastName:""
    })

    const handleSubmit = async () => {

    }

    return <div className="login">
        <div className="formWrapper">
            <h2>Sign Up Form</h2>

            <form onSubmit={handleSubmit}>

                <div className="inputs">
                    <div className="firstName">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName"
                               required
                               value={state.firstName}
                               onChange={(e => setState({...state, firstName: e.target.value}))}
                        />
                    </div>
                    <div className="lastName">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="lastName" id="lastName"
                               required
                               value={state.lastName}
                               onChange={(e => setState({...state, lastName: e.target.value}))}
                        />
                    </div>
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

                <button type="submit" onClick={handleSubmit}>Sign Up</button>
            </form>
        </div>
    </div>
};

export default SignUp;

