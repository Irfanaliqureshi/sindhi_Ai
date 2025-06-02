import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import { LanguageContext } from './context/LanguageContext';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AdminPanel from './pages/AdminPanel';
import AITools from './pages/AITools';
import NotFound from './pages/NotFound';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useContext(AuthContext);
  
  if (loading) return <div className="loading">Loading...</div>;
  
  return isAuthenticated ? children : <Navigate to="/login" />;
};

// Admin Route Component
const AdminRoute = ({ children }) => {
  const { isAuthenticated, loading, user } = useContext(AuthContext);
  
  if (loading) return <div className="loading">Loading...</div>;
  
  return isAuthenticated && user?.role === 'admin' ? children : <Navigate to="/" />;
};

function App() {
  const { language } = useContext(LanguageContext);
  
  return (
    <div className={`app ${language === 'sindhi' ? 'rtl' : 'ltr'}`}>
      <Navbar />
      <main className="min-h-screen pt-16 pb-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/ai-tools" element={<AITools />} />
          <Route 
            path="/dashboard/*" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/*" 
            element={
              <AdminRoute>
                <AdminPanel />
              </AdminRoute>
            } 
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
