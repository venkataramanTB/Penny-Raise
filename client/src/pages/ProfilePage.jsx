import React, { useContext, useEffect, useState } from 'react';
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
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Retrieve user data from session storage
    const userDataFromSessionStorage = sessionStorage.getItem('LoggedInUser');
    if (userDataFromSessionStorage) {
      setUserData(JSON.parse(userDataFromSessionStorage));
    }
  }, []);

  useEffect(() => {
    // Update user data in session storage whenever user changes
    if (user) {
      setUserData(user);
      sessionStorage.setItem('LoggedInUser', JSON.stringify(user));
    }
  }, [user]);

  return (
    <Container>
      <h2>Profile</h2>
      {userData ? (
        <>
          <p>Email: {userData.email}</p>
          {/* Add more profile information as needed */}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
};

export default ProfilePage;
