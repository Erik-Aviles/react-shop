import React from 'react';
import '../styles/RecoveryPassword.scss'

const RecoveryPassword = () => {
  return (
    <div className="login">
      <div className="form-container">
         <img src="./Logos/logo_yard_sale.svg" alt="logo" className="logo" />
         <h1 className="title"> Email has been sent!</h1>
         <p className="subtitle">
            Place check your inbox for instructions on how to reset the password
         </p>
         <div className="email-image">
            <img src="./Icons/email.svg" alt="icono de cartita" />
         </div>
         <button className="primary-button login-botton">
            Login
         </button>
         <p className="resend">
            <span>Didn't receive the email? </span>
            <a href="/">Resend</a>
         </p>

      </div>
   </div>  
  )
}

export default RecoveryPassword
