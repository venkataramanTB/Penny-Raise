import React, { useContext, useState, useEffect } from 'react';
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

  useEffect(() => {
    const loggedInUser = sessionStorage.getItem('LoggedIn');
    if (loggedInUser) {
      setUser({ email: loggedInUser });
      navigate('/dashboard');
    }
  }, [navigate, setUser]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Define valid credentials
    const validCredentials = [
      { email: 'venky', password: '1234' },
      { email: 'sara', password: '1234' }
    ];

    // Check if entered credentials match any of the valid credentials
    const isValidUser = validCredentials.some(
      (user) => user.email === email && user.password === password
    );

    if (isValidUser) {
      setUser({ email });
      sessionStorage.setItem('LoggedIn', email);
      navigate('/dashboard');
    } else {
      setError('Invalid email or password');
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
