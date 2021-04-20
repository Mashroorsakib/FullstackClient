import React, { useContext, useState } from 'react';
import './Login.css'
import firebase from "firebase/app";
import "firebase/auth";
import {usercontext} from '../../App'
import firebaseConfig from './firebase.config';
import { useHistory,useLocation } from 'react-router-dom';

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);    
  }

const Login = () => {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const [loggeduser,setloggeduser]=useContext(usercontext);
    const [error,seterror]=useState('')
    const [login,setlogin]=useState('')
    const [password,setpassword]=useState({
      passwordconfirm:''
    })
    const [newuser,setnewuser]=useState(false)
 
  
    const handle=()=>{
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        var credential = result.credential;
        var token = credential.accessToken;
        var {displayName,email} = result.user;
        const user={name:displayName,email:email}
        setloggeduser(user)
        history.replace(from)
        console.log(email)
    
      }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
    
      });
      }
        return (
        <div>
           <button onClick={handle}>Sign In with Google</button>
         </div>
         
    );
};

export default Login;