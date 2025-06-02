import React, { useContext, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';
import { AuthContext } from '../context/AuthContext';

// Dashboard Components
import DashboardHome from '../components/dashboard/DashboardHome';
import Tutorials from '../components/dashboard/Tutorials';
import Progress from '../components/dashboard/Progress';
import Settings from '../components/dashboard/Settings';

const Dashboard = () => {
  const { translations } = useContext(LanguageContext);
  const { user } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        {/* Dashboard Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-indigo-900 mb-2">
            {translations.dashboard}
          </h1>
          <p className="text-gray-600">
            Welcome back, {user?.name || 'User'}!
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full md:w-64 bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 ajrak-pattern rounded-full flex items-center justify-center">
                <span className="text-white text-lg font-bold">
                  {user?.name?.charAt(0) || 'U'}
                </span>
              </div>
              <div className="ml-3">
                <p className="font-semibold">{user?.name || 'User'}</p>
                <p className="text-sm text-gray-500">{user?.email || 'user@example.com'}</p>
              </div>
            </div>

            <nav className="space-y-2">
              <Link
                to="/dashboard"
                className={`block px-4 py-2 rounded-md w-full text-left ${
                  activeTab === 'home' ? 'bg-red-700 text-white' : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab('home')}
              >
                <div className="flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Dashboard
                </div>
              </Link>
              <Link
                to="/dashboard/tutorials"
                className={`block px-4 py-2 rounded-md w-full text-left ${
                  activeTab === 'tutorials' ? 'bg-red-700 text-white' : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab('tutorials')}
              >
                <div className="flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  {translations.myTutorials}
                </div>
              </Link>
              <Link
                to="/dashboard/progress"
                className={`block px-4 py-2 rounded-md w-full text-left ${
                  activeTab === 'progress' ? 'bg-red-700 text-white' : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab('progress')}
              >
                <div className="flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  {translations.myProgress}
                </div>
              </Link>
              <Link
                to="/dashboard/settings"
                className={`block px-4 py-2 rounded-md w-full text-left ${
                  activeTab === 'settings' ? 'bg-red-700 text-white' : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab('settings')}
              >
                <div className="flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {translations.settings}
                </div>
              </Link>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-white rounded-lg shadow-md p-6">
            <Routes>
              <Route path="/" element={<DashboardHome />} />
              <Route path="/tutorials" element={<Tutorials />} />
              <Route path="/progress" element={<Progress />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
