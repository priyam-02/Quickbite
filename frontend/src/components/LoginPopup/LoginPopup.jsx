import React, { useEffect, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets';

const LoginPopup = ({setShowLogin}) => {
    const [currState, setCurrState] = useState("Login");
    const [closing, setClosing] = useState(false);

    useEffect(() => {
        // Add 'modal-active' class to body when the popup is open
        document.body.classList.add('modal-active');
    
        return () => {
          // Remove 'modal-active' class when the popup is closed
          document.body.classList.remove('modal-active');
        };
      }, []);

    const handleClose = () => {
        setClosing(true);
        setTimeout(() => setShowLogin(false), 400);
    };
  return (
    <div className={`login-popup ${closing ? 'closing' : ''}`}>
        <form className="login-popup-container">
            <div className="login-popup-title">
                <h2> {currState} </h2>
                <img onClick={handleClose} src={assets.cross} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currState==="Login"? <></>:<input type="text" placeholder='Name' required />}
                <input type="email" placeholder='Email' required />
                <input type="password" placeholder='Password' required />
            </div>
            <button>{currState==="Sign Up"?"Create account":"Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>By continuing, I agree to the terms of use & privacy policy. </p>
            </div>
            {currState==='Login'
            ? <p> Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
            : <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
            }
        </form>

    </div>
  )
}

export default LoginPopup