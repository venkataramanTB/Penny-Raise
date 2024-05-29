import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const ProfilePage = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h2>Profile</h2>
      <p>Email: {user?.email}</p>
    </div>
  );
};

export default ProfilePage;