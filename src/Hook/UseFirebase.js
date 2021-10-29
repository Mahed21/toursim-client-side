import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,createUserWithEmailAndPassword,signOut,updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initialAuthentication from "../Firebase/Firebase.initial";
initialAuthentication();

    const UseFirebase=()=>
    {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        const [user, setUser]=useState({});
        const [error,setError]=useState('')
        //for google
        const googleSignIn=()=>
        {
            return signInWithPopup(auth, provider)
           
        }
        //logout
        const logOut=()=>
        {
            signOut(auth)
            .then(() => {
                setUser({});
              })
              .catch((error) => {
                setError(error.message)
              });
    
        }
        //state change
      useEffect(()=>
      {
        onAuthStateChanged(auth, (user) => {
            if (user) {
            
                setUser(user);
            } 
          });
      },[])


        return{
            logOut,
            googleSignIn,
            user,
            error
            
           
            
        }
    }
    export default UseFirebase;