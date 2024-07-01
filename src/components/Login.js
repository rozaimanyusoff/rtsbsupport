// src/components/Login.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="card p-4 shadow border-0" style={{ width: '100%', maxWidth: '400px' }}>
                <h2 className="card-title text-center mb-4">Login</h2>
                <form>
                    <div className="form-group mb-3">
                        <label htmlFor="username" className="form-label">Username:</label>
                        <input type="text" id="username" name="username" className="form-control" required />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="password" className="form-label">Password:</label>
                        <input type="password" id="password" name="password" className="form-control" required />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;