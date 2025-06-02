import React, { useState, useEffect, useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import axios from 'axios';

const UserManagement = () => {
  const { translations } = useContext(LanguageContext);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  
  // Simulate fetching users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // In a real implementation, this would be an API call
        // const response = await axios.get('/api/admin/users');
        // setUsers(response.data);
        
        // Simulate API response
        setTimeout(() => {
          setUsers([
            {
              id: 1,
              name: 'Ahmed Khan',
              email: 'ahmed.khan@example.com',
              preferredLanguage: 'sindhi',
              role: 'user',
              createdAt: '2025-05-15T10:30:00Z',
              lastLogin: '2025-06-01T14:22:00Z'
            },
            {
              id: 2,
              name: 'Sara Jamali',
              email: 'sara.j@example.com',
              preferredLanguage: 'sindhi',
              role: 'user',
              createdAt: '2025-05-18T09:15:00Z',
              lastLogin: '2025-06-02T08:45:00Z'
            },
            {
              id: 3,
              name: 'Rahul Menghwar',
              email: 'r.menghwar@example.com',
              preferredLanguage: 'english',
              role: 'user',
              createdAt: '2025-05-20T11:45:00Z',
              lastLogin: '2025-05-30T16:10:00Z'
            },
            {
              id: 4,
              name: 'Zainab Memon',
              email: 'zainab.m@example.com',
              preferredLanguage: 'sindhi',
              role: 'admin',
              createdAt: '2025-05-10T08:00:00Z',
              lastLogin: '2025-06-02T09:30:00Z'
            }
          ]);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false);
      }
    };
    
    fetchUsers();
  }, []);
  
  const handleEditUser = (user) => {
    setSelectedUser(user);
    setModalOpen(true);
  };
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-indigo-900">User Management</h2>
        <button className="btn-primary flex items-center">
          <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Add New User
        </button>
      </div>
      
      {loading ? (
        <div className="text-center py-8">
          <p>Loading users...</p>
        </div>
      ) : (
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Language
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Login
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map(user => (
                <tr key={user.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                        <span className="text-indigo-800 font-medium">
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{user.name}</div>
                        <div className="text-xs text-gray-500">Joined {new Date(user.createdAt).toLocaleDateString()}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      user.preferredLanguage === 'sindhi' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {user.preferredLanguage === 'sindhi' ? 'سنڌي' : 'English'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.role === 'admin' ? (
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                        Admin
                      </span>
                    ) : (
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                        User
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatDate(user.lastLogin)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button 
                      onClick={() => handleEditUser(user)}
                      className="text-indigo-600 hover:text-indigo-900 mr-3"
                    >
                      Edit
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      
      {/* Pagination */}
      <div className="flex justify-between items-center mt-6">
        <div className="text-sm text-gray-500">
          Showing <span className="font-medium">1</span> to <span className="font-medium">{users.length}</span> of <span className="font-medium">{users.length}</span> users
        </div>
        <div className="flex space-x-2">
          <button className="px-3 py-1 border border-gray-300 rounded-md text-sm bg-white text-gray-500 hover:bg-gray-50">
            Previous
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded-md text-sm bg-white text-gray-500 hover:bg-gray-50">
            Next
          </button>
        </div>
      </div>
      
      {/* Edit User Modal (hidden by default) */}
      {modalOpen && selectedUser && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Edit User</h3>
              <button 
                onClick={() => setModalOpen(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <form className="space-y-4">
              <div>
                <label className="form-label">Name</label>
                <input 
                  type="text" 
                  className="input-field" 
                  defaultValue={selectedUser.name} 
                />
              </div>
              
              <div>
                <label className="form-label">Email</label>
                <input 
                  type="email" 
                  className="input-field" 
                  defaultValue={selectedUser.email} 
                  disabled 
                />
              </div>
              
              <div>
                <label className="form-label">Preferred Language</label>
                <select className="input-field" defaultValue={selectedUser.preferredLanguage}>
                  <option value="sindhi">سنڌي</option>
                  <option value="english">English</option>
                </select>
              </div>
              
              <div>
                <label className="form-label">Role</label>
                <select className="input-field" defaultValue={selectedUser.role}>
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              
              <div className="flex justify-end space-x-3 mt-6">
                <button 
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm bg-white text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button 
                  type="button"
                  className="btn-primary"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
