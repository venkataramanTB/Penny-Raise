import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  TextField,
  Button,
  MenuItem,
  Box,
  Typography
} from '@mui/material';
import anime from 'animejs';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    phoneNumber: '',
    age: '',
    salary: '',
    balance: '',  // Added balance field
    jobRole: '',
    companyName: '',
    password: ''
  });

  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();
        setSuccessMessage(data.message);
        sessionStorage.setItem('LoggedIn', JSON.stringify(formData));
        navigate('/');
      } else {
        const errorData = await response.json();
        setError(errorData.error);
      }
    } catch (err) {
      console.error('Error signing up:', err);
      setError('An unexpected error occurred. Please try again later.');
    }
  };

  React.useEffect(() => {
    anime({
      targets: '#signup-form',
      opacity: [0, 1],
      translateY: [-20, 0],
      duration: 1000,
      easing: 'easeOutQuad'
    });
  }, []);

  return (
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <Box
        id="signup-form"
        sx={{
          p: 4,
          bgcolor: 'background.paper',
          boxShadow: 1,
          borderRadius: 2,
        }}
      >
        <Typography variant="h4" component="h2" gutterBottom>
          Signup
        </Typography>
        {error && <Typography color="error">{error}</Typography>}
        {successMessage && <Typography color="primary">{successMessage}</Typography>}
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Phone Number"
            name="phoneNumber"
            type="tel"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Age"
            name="age"
            type="number"
            value={formData.age}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Salary"
            name="salary"
            type="number"
            value={formData.salary}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Balance"  // Added balance input field
            name="balance"
            type="number"
            value={formData.balance}
            onChange={handleChange}
            required
          />
          <TextField
            select
            fullWidth
            margin="normal"
            label="Job Role"
            name="jobRole"
            value={formData.jobRole}
            onChange={handleChange}
            required
          >
            <MenuItem value="Developer">Developer</MenuItem>
            <MenuItem value="Designer">Designer</MenuItem>
            <MenuItem value="Manager">Manager</MenuItem>
            <MenuItem value="Analyst">Analyst</MenuItem>
          </TextField>
          <TextField
            fullWidth
            margin="normal"
            label="Company Name"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            sx={{ mt: 3 }}
          >
            Signup
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default SignupPage;
