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
import Navbar from './components/Navbar.jsx'; // Import Navbar component
import { AuthProvider } from './context/AuthContext';
import { TransactionProvider } from './context/TransactionContext';
import GlobalStyles from './styles/globalStyles';

function App() {
  return (
    <AuthProvider>
      <TransactionProvider>
        <GlobalStyles />
        <Router>
          <Navbar /> {/* Include Navbar component here */}
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/transactions" element={<TransactionPage />} />
            <Route path="/balance" element={<BalancePage />} />
            <Route path="/add-money" element={<AddMoneyPage />} />
            <Route path="/add-transaction" element={<AddTransactionPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/badges" element={<BadgesPage />} />
          </Routes>
        </Router>
      </TransactionProvider>
    </AuthProvider>
  );
}

export default App;
