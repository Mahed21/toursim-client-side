import React from 'react';
import UseFirebase from '../../Hook/UseFirebase';

const Login = () => {
    const {googleSignIn}=UseFirebase()
    return (
        <div>
            <button onClick={googleSignIn}>Login With Google</button>
        </div>
    );
};

export default Login;