import React, { useState} from "react";
import "./Login.css";
import { Link , useHistory} from "react-router-dom";
import { auth } from "./firebase";

const Login = () => {
    const history = useHistory();
    const [email, setEmail ] = useState('');
    const [pass, setPass] = useState('');


    const signIn = e =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,pass)
            .then(auth=>{
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e =>{

        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email,pass)
            .then((auth)=>{
                if(auth){
                    history.push('/')
                }
            })
            .catch(error =>alert(error.message))
    }
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://green-strike.com/wp-content/uploads/2018/04/amazon-logo-transparent.png"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign In</h1>
        <form action="">
          <h5>Email</h5>
          <input type="text"  value = {email} onChange={
              e => setEmail(e.target.value)
          }/>

          <h5>Password</h5>
          <input type="password" value={pass} onChange={
              p => setPass(p.target.value)
          }/>

          <button type="submit" onClick={signIn} className="login__signInButton">Sign In</button>
        </form>
        <p>By continuing, you agree to Amazon's Fake Clone Conditions of Use and Privacy Notice.</p>
        <br/>
        <hr/>
        <button type="submit" onClick={register}  className="login__registerButton">Create your Amazon account</button>
      </div>
    </div>
  );
};

export default Login;
