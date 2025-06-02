import React, { useContext, useState, useEffect } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import axios from 'axios';

const AdminDashboard = () => {
  const { translations } = useContext(LanguageContext);
  const [stats, setStats] = useState({
    totalUsers: 0,
    activeUsers: 0,
    totalTutorials: 0,
    totalMessages: 0,
    unreadMessages: 0
  });
  
  const [loading, setLoading] = useState(true);
  
  // Simulate fetching admin dashboard data
  useEffect(() => {
    const fetchStats = async () => {
      try {
        // In a real implementation, this would be an API call
        // const response = await axios.get('/api/admin/stats');
        // setStats(response.data);
        
        // Simulate API response
        setTimeout(() => {
          setStats({
            totalUsers: 156,
            activeUsers: 87,
            totalTutorials: 24,
            totalMessages: 42,
            unreadMessages: 8
          });
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching admin stats:', error);
        setLoading(false);
      }
    };
    
    fetchStats();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold text-indigo-900 mb-6">Admin Dashboard</h2>
      
      {loading ? (
        <div className="text-center py-8">
          <p>Loading dashboard data...</p>
        </div>
      ) : (
        <>
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <h3 className="text-sm text-gray-500 mb-1">Total Users</h3>
              <p className="text-2xl font-bold">{stats.totalUsers}</p>
              <div className="mt-2 flex items-center text-sm text-green-600">
                <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                </svg>
                <span>12% increase this month</span>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <h3 className="text-sm text-gray-500 mb-1">Active Users</h3>
              <p className="text-2xl font-bold">{stats.activeUsers}</p>
              <div className="mt-2 flex items-center text-sm text-green-600">
                <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                </svg>
                <span>8% increase this week</span>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <h3 className="text-sm text-gray-500 mb-1">Unread Messages</h3>
              <p className="text-2xl font-bold">{stats.unreadMessages}</p>
              <div className="mt-2">
                <button className="text-sm text-indigo-600 hover:text-indigo-800">
                  View Messages
                </button>
              </div>
            </div>
          </div>
          
          {/* Recent Activity */}
          <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden mb-8">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    User
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Time
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                        <span className="text-indigo-800 font-medium">AK</span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">Ahmed Khan</div>
                        <div className="text-sm text-gray-500">ahmed.khan@example.com</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">Registered new account</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    10 minutes ago
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                        <span className="text-red-800 font-medium">SJ</span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">Sara Jamali</div>
                        <div className="text-sm text-gray-500">sara.j@example.com</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">Completed "Advanced Sindhi" tutorial</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    1 hour ago
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-800 font-medium">RM</span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">Rahul Menghwar</div>
                        <div className="text-sm text-gray-500">r.menghwar@example.com</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">Submitted contact form message</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    3 hours ago
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* Quick Actions */}
          <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-left">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Add New Tutorial</h4>
                  <p className="text-sm text-gray-500">Create new educational content</p>
                </div>
              </div>
            </button>
            
            <button className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-left">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Manage Users</h4>
                  <p className="text-sm text-gray-500">View and edit user accounts</p>
                </div>
              </div>
            </button>
            
            <button className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-left">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">System Reports</h4>
                  <p className="text-sm text-gray-500">View analytics and reports</p>
                </div>
              </div>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminDashboard;
