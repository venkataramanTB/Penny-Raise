import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';

const Container = styled(motion.div)`
  display: flex;
  max-width: 800px; /* Increased maximum width to accommodate horizontal layout */
  margin: 50px auto;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: left; /* Align text content to left */
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px; /* Add margin to separate avatar from details */
`;

const ProfileDetail = styled(motion.div)`
  margin: 10px 0;
`;

const ProgressBarContainer = styled.div`
  margin-top: 20px; /* Adjust margin for space */
`;

const ProgressBar = styled(motion.div)`
  width: 100%;
  height: 10px;
  background: #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 10px;
`;

const Progress = styled(motion.div)`
  height: 100%;
  background: #76c7c0;
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

  // Calculate profile completion percentage based on balance and salary
  const calculateProfileCompletion = (userData) => {
    const { balance, salary } = userData;
    const balanceWeight = 0.5; // Adjust the weight according to your preference
    const salaryWeight = 0.5; // Adjust the weight according to your preference
    const totalFields = 2; // Number of fields considered for profile completion

    // Calculate progress based on balance and salary
    const balanceProgress = balance ? 1 : 0; // Assuming balance is complete if it exists
    const salaryProgress = salary ? 1 : 0; // Assuming salary is complete if it exists

    // Calculate overall progress
    const overallProgress =
      (balanceProgress * balanceWeight + salaryProgress * salaryWeight) /
      totalFields;

    return overallProgress * 100; // Convert progress to percentage
  };

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {userData && (
        <>
          <Avatar
            src={`https://avatars.dicebear.com/api/initials/${userData.username}.svg`}
            alt="Avatar"
          />
          <div>
            <ProfileDetail>
              <p>Email: {userData.email}</p>
            </ProfileDetail>
            <ProfileDetail>
              <p>Username: {userData.username}</p>
            </ProfileDetail>
            <ProfileDetail>
              <p>First Name: {userData.first_name}</p>
            </ProfileDetail>
            <ProfileDetail>
              <p>Last Name: {userData.last_name}</p>
            </ProfileDetail>
            <ProfileDetail>
              <p>Phone Number: {userData.phone_number}</p>
            </ProfileDetail>
            <ProfileDetail>
              <p>Age: {userData.age}</p>
            </ProfileDetail>
            <ProfileDetail>
              <p>Salary: {userData.salary}</p>
            </ProfileDetail>
            <ProfileDetail>
              <p>Job Role: {userData.job_role}</p>
            </ProfileDetail>
            <ProfileDetail>
              <p>Company Name: {userData.company_name}</p>
            </ProfileDetail>
          </div>
        </>
      )}
      <ProgressBarContainer>
        <h3>Salary to Balance</h3>
        <ProgressBar>
          <Progress
            initial={{ width: 0 }}
            animate={{
              width: `${calculateProfileCompletion(userData)}%`,
            }}
            transition={{ duration: 1 }}
          />
        </ProgressBar>
      </ProgressBarContainer>
    </Container>
  );
};

export default ProfilePage;
