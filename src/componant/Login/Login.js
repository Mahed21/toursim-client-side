import React from 'react';
import { useHistory, useLocation } from 'react-router';
import UseAuth from '../../Context/UseAuth';


const Login = () => {
    const {googleSignIn}=UseAuth()
    const location=useLocation();
    const history=useHistory();
    console.log(location.state?.from );
    const redirect_uri=location.state?.from || '/home';
    const handleGoogle=()=>
    {
        googleSignIn().then((result)=>
        {
            history.push(redirect_uri);
        })
    }
    return (
        <div>
            <button onClick={handleGoogle}>Login With Google</button>
        </div>
    );
};

export default Login;