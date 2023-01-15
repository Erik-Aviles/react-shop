import React from "react";
import "../styles/NewPassword.scss";

const NewPassword = () => {
  return (
    <div className="login">
      <div className="form-container">
        <img className="logo" src="./Logos/logo_yard_sale.svg" alt="logo" />
        <h1 className="title">Create a new password</h1>
        <p className="subtitle">Enter an new password for you account</p>
        <form action="/" className="form">
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            className="input-password"
            type="password"
            id="password"
            placeholder="**********"
          />
          <label htmlFor="password" className="label">
            Re-enter password
          </label>
          <input
            className="input-password"
            type="password"
            id="password2"
            placeholder="**********"
          />
          <input
            type="submit"
            value="Corfirm"
            className="primary-button login-botton"
          />
        </form>
      </div>
    </div>
  );
};

export default NewPassword;
