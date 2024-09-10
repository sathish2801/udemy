import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../api/urls';
import login_img from '/auth_img/login.jpg'
import './style.scss';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const response = await login(email, password);
            console.log(response);
            const token = response.token;

            localStorage.setItem('token', token);
            navigate('/');
        } catch (error) {
            console.error('Login failed:', error);
            setError('Login failed. Please check your credentials and try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="container login-page">
                <div className="login_img">
                    <img src={login_img} alt="Login" />
                </div>
                <div className="form-container">
                    <form onSubmit={handleSubmit} className="login-form">
                        <h2>Login</h2>
                        {error && <p className="error-message">{error}</p>}
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            required
                        />
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            required
                        />
                        <button type="submit" disabled={isLoading}>
                            {isLoading ? 'Logging in...' : 'Login'}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
