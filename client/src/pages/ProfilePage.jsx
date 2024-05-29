import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ProfilePage = () => {
  const { user } = useContext(AuthContext);

  return (
    <Container>
      <h2>Profile</h2>
      <p>Email: {user?.email}</p>
      {/* Add more profile information as needed */}
    </Container>
  );
};

export default ProfilePage;
