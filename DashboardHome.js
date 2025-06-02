import React, { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import { AuthContext } from '../../context/AuthContext';

const DashboardHome = () => {
  const { translations } = useContext(LanguageContext);
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h2 className="text-2xl font-bold text-indigo-900 mb-6">Dashboard Overview</h2>
      
      {/* Welcome Card */}
      <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 mb-6 rounded-r-md">
        <p className="text-lg">
          Welcome back, <span className="font-semibold">{user?.name || 'User'}</span>!
        </p>
        <p className="text-gray-600 mt-1">
          Continue your learning journey with Sindhi AI.
        </p>
      </div>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
              <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-500">Completed Lessons</p>
              <p className="text-xl font-semibold">12</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
              <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-500">Learning Hours</p>
              <p className="text-xl font-semibold">8.5</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
              <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-500">Practice Exercises</p>
              <p className="text-xl font-semibold">24</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Recent Activity */}
      <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        <ul className="divide-y divide-gray-200">
          <li className="p-4 hover:bg-gray-50">
            <div className="flex items-center">
              <div className="w-8 h-8 ajrak-pattern rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-xs">L</span>
              </div>
              <div>
                <p className="font-medium">Completed "Basic Sindhi Greetings" lesson</p>
                <p className="text-sm text-gray-500">2 days ago</p>
              </div>
            </div>
          </li>
          <li className="p-4 hover:bg-gray-50">
            <div className="flex items-center">
              <div className="w-8 h-8 ajrak-pattern rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-xs">Q</span>
              </div>
              <div>
                <p className="font-medium">Scored 85% on "Sindhi Vocabulary" quiz</p>
                <p className="text-sm text-gray-500">3 days ago</p>
              </div>
            </div>
          </li>
          <li className="p-4 hover:bg-gray-50">
            <div className="flex items-center">
              <div className="w-8 h-8 ajrak-pattern rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-xs">P</span>
              </div>
              <div>
                <p className="font-medium">Practiced pronunciation with AI coach</p>
                <p className="text-sm text-gray-500">5 days ago</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      
      {/* Recommended Tutorials */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Recommended for You</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-semibold mb-2">Intermediate Sindhi Conversation</h4>
          <p className="text-sm text-gray-600 mb-3">Learn how to hold everyday conversations in Sindhi.</p>
          <div className="flex justify-between items-center">
            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">30 minutes</span>
            <button className="text-sm text-indigo-600 hover:text-indigo-800">Start Now</button>
          </div>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-semibold mb-2">Sindhi Cultural Expressions</h4>
          <p className="text-sm text-gray-600 mb-3">Explore idioms and cultural expressions unique to Sindhi.</p>
          <div className="flex justify-between items-center">
            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">45 minutes</span>
            <button className="text-sm text-indigo-600 hover:text-indigo-800">Start Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
