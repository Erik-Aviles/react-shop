import React, { useEffect, useRef } from 'react';
import '../styles/Login.scss';

const Login = () => {
  const formRef = useRef(null);

  const handleSutmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    console.log(data);
    
  };

  return (
    <div className="Login">
      <div className="Login-container">
        <h1 className="title">Login</h1>
        <form onSubmit={handleSutmit} className="form" ref={formRef}>
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input
            type="text"
            name="email"
            placeholder="erika@example.cm"
            className="input input-email"
          />
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="*********"
            className="input input-password"
          />
          <button type="submit" className="primary-button login-button">
            Log in
          </button>
          <a href="/">Forgot my password</a>
        </form>
        <button className="secondary-button signup-button">Sign up</button>
      </div>
    </div>
  );
}

export default Login;