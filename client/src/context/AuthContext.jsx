import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Initialize the user state from session storage if it exists
    const savedUser = sessionStorage.getItem('LoggedInUser');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    // Save the user state to session storage whenever it changes
    if (user) {
      sessionStorage.setItem('LoggedInUser', JSON.stringify(user));
    } else {
      sessionStorage.removeItem('LoggedInUser');
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
