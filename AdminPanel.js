import React, { useContext, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';
import { AuthContext } from '../context/AuthContext';

// Admin Components
import AdminDashboard from '../components/admin/AdminDashboard';
import UserManagement from '../components/admin/UserManagement';
import TutorialManagement from '../components/admin/TutorialManagement';
import MessageManagement from '../components/admin/MessageManagement';

const AdminPanel = () => {
  const { translations } = useContext(LanguageContext);
  const { user } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        {/* Admin Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-indigo-900 mb-2">
            {translations.admin}
          </h1>
          <p className="text-gray-600">
            Admin Control Panel
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full md:w-64 bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-indigo-900 rounded-full flex items-center justify-center">
                <span className="text-white text-lg font-bold">
                  {user?.name?.charAt(0) || 'A'}
                </span>
              </div>
              <div className="ml-3">
                <p className="font-semibold">{user?.name || 'Admin'}</p>
                <p className="text-sm text-gray-500">Administrator</p>
              </div>
            </div>

            <nav className="space-y-2">
              <Link
                to="/admin"
                className={`block px-4 py-2 rounded-md w-full text-left ${
                  activeTab === 'dashboard' ? 'bg-indigo-900 text-white' : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab('dashboard')}
              >
                <div className="flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Dashboard
                </div>
              </Link>
              <Link
                to="/admin/users"
                className={`block px-4 py-2 rounded-md w-full text-left ${
                  activeTab === 'users' ? 'bg-indigo-900 text-white' : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab('users')}
              >
                <div className="flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  User Management
                </div>
              </Link>
              <Link
                to="/admin/tutorials"
                className={`block px-4 py-2 rounded-md w-full text-left ${
                  activeTab === 'tutorials' ? 'bg-indigo-900 text-white' : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab('tutorials')}
              >
                <div className="flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Tutorial Management
                </div>
              </Link>
              <Link
                to="/admin/messages"
                className={`block px-4 py-2 rounded-md w-full text-left ${
                  activeTab === 'messages' ? 'bg-indigo-900 text-white' : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab('messages')}
              >
                <div className="flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                  Message Management
                </div>
              </Link>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-white rounded-lg shadow-md p-6">
            <Routes>
              <Route path="/" element={<AdminDashboard />} />
              <Route path="/users" element={<UserManagement />} />
              <Route path="/tutorials" element={<TutorialManagement />} />
              <Route path="/messages" element={<MessageManagement />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
