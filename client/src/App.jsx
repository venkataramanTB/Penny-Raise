import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import TransactionPage from './pages/TransactionPage';
import BalancePage from './pages/BalancePage';
import AddMoneyPage from './pages/AddMoneyPage';
import AddTransactionPage from './pages/AddTransactionPage';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import BadgesPage from './pages/BadgesPage';
import Navbar from './components/Navbar.jsx'; 
import { AuthProvider } from './context/AuthContext';
import { TransactionProvider } from './context/TransactionContext';
import GlobalStyles from './styles/globalStyles';
import PrivateRoute from './components/PrivateRoute'; 

function App() {
  return (
    <AuthProvider>
      <TransactionProvider>
        <GlobalStyles />
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/transactions" element={<PrivateRoute element={TransactionPage} />} />
            <Route path="/balance" element={<PrivateRoute element={BalancePage} />} />
            <Route path="/add-money" element={<PrivateRoute element={AddMoneyPage} />} />
            <Route path="/add-transaction" element={<PrivateRoute element={AddTransactionPage} />} />
            <Route path="/dashboard" element={<PrivateRoute element={DashboardPage} />} />
            <Route path="/profile" element={<PrivateRoute element={ProfilePage} />} />
            <Route path="/badges" element={<PrivateRoute element={BadgesPage} />} />
          </Routes>
        </Router>
      </TransactionProvider>
    </AuthProvider>
  );
}

export default App;
