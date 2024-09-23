import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import DashboardPage from './pages/DashboardPage';
import EventoPage from './pages/EventoPage';
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <Router>
      <AuthProvider> {/* Mova o AuthProvider para dentro do Router */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/criar-evento" element={<EventoPage />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
