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
    const userDataFromSessionStorage = sessionStorage.getItem('LoggedInUser');
    if (userDataFromSessionStorage) {
      setUserData(JSON.parse(userDataFromSessionStorage));
    }
  }, []);

  useEffect(() => {
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
          <p>Username: {userData.username}</p>
          <p>First Name: {userData.first_name}</p>
          <p>Last Name: {userData.last_name}</p>
          <p>Phone Number: {userData.phone_number}</p>
          <p>Age: {userData.age}</p>
          <p>Salary: {userData.salary}</p>
          <p>Job Role: {userData.job_role}</p>
          <p>Company Name: {userData.company_name}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
};

export default ProfilePage;
