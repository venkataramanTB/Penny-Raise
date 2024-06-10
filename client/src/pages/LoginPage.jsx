import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ErrorMessage = styled.p`
  color: red;
`;

const SignupLink = styled.div`
  margin-top: 20px;
  text-align: center;
  color: #3498db;

  a {
    color: #3498db;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const LoginPage = () => {
  const { setUser } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:5000/api/login?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
        sessionStorage.setItem('LoggedIn', JSON.stringify(data.user));
        navigate('/dashboard');
      } else {
        const errorData = await response.json();
        setError(errorData.error);
      }
    } catch (err) {
      console.error('Error logging in:', err);
      setError('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <Container>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </form>
      <SignupLink>
        <p>Don't have an account? <Link to="/signup">Signup</Link></p>
      </SignupLink>
    </Container>
  );
};

export default LoginPage;
