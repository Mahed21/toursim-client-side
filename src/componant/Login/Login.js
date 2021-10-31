import React from 'react';
import { useHistory, useLocation } from 'react-router';
import UseAuth from '../../Context/UseAuth';
import './Login.css';


const Login = () => {
    const {googleSignIn}=UseAuth()
    const location=useLocation();
    const history=useHistory();
    const redirect_uri=location.state?.from || '/home';
    const handleGoogle=()=>
    {
        googleSignIn()
        .then((result)=>
        {
            history.push(redirect_uri);
        })
    }
    return (
        <div>
            <h1 className="text-center mt-4 google"><span className="g">G</span>
            <span className="o">O</span>
            <span className="oo">O</span>
            <span className="gg">G</span>
            <span className="l">L</span>
            <span className="e">E</span>
            </h1>
            <div className="d-flex justify-content-center">
            <button onClick={handleGoogle} className="google-btn mt-5 mb-5">
                Login With Google</button>
            </div>
        </div>
    );
};

export default Login;