import React, { useState, useEffect, useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import axios from 'axios';

const TutorialManagement = () => {
  const { translations } = useContext(LanguageContext);
  const [tutorials, setTutorials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTutorial, setSelectedTutorial] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  
  // Simulate fetching tutorials
  useEffect(() => {
    const fetchTutorials = async () => {
      try {
        // In a real implementation, this would be an API call
        // const response = await axios.get('/api/admin/tutorials');
        // setTutorials(response.data);
        
        // Simulate API response
        setTimeout(() => {
          setTutorials([
            {
              id: 1,
              title: 'Introduction to Sindhi Language',
              category: 'Beginner',
              author: 'Ahmed Khan',
              createdAt: '2025-05-10T08:00:00Z',
              updatedAt: '2025-05-15T10:30:00Z',
              published: true
            },
            {
              id: 2,
              title: 'Basic Sindhi Conversation',
              category: 'Beginner',
              author: 'Zainab Memon',
              createdAt: '2025-05-12T09:15:00Z',
              updatedAt: '2025-05-18T14:20:00Z',
              published: true
            },
            {
              id: 3,
              title: 'Sindhi Grammar Fundamentals',
              category: 'Intermediate',
              author: 'Karim Lashari',
              createdAt: '2025-05-20T11:45:00Z',
              updatedAt: '2025-05-25T16:10:00Z',
              published: true
            },
            {
              id: 4,
              title: 'Advanced Sindhi Literature',
              category: 'Advanced',
              author: 'Sara Jamali',
              createdAt: '2025-05-28T13:30:00Z',
              updatedAt: '2025-05-30T09:45:00Z',
              published: false
            }
          ]);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching tutorials:', error);
        setLoading(false);
      }
    };
    
    fetchTutorials();
  }, []);
  
  const handleEditTutorial = (tutorial) => {
    setSelectedTutorial(tutorial);
    setModalOpen(true);
  };
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-indigo-900">Tutorial Management</h2>
        <button className="btn-primary flex items-center">
          <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Add New Tutorial
        </button>
      </div>
      
      {loading ? (
        <div className="text-center py-8">
          <p>Loading tutorials...</p>
        </div>
      ) : (
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Author
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Updated
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tutorials.map(tutorial => (
                <tr key={tutorial.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{tutorial.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      tutorial.category === 'Beginner' ? 'bg-green-100 text-green-800' : 
                      tutorial.category === 'Intermediate' ? 'bg-blue-100 text-blue-800' : 
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {tutorial.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {tutorial.author}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatDate(tutorial.updatedAt)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {tutorial.published ? (
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Published
                      </span>
                    ) : (
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        Draft
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button 
                      onClick={() => handleEditTutorial(tutorial)}
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
          Showing <span className="font-medium">1</span> to <span className="font-medium">{tutorials.length}</span> of <span className="font-medium">{tutorials.length}</span> tutorials
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
      
      {/* Edit Tutorial Modal (hidden by default) */}
      {modalOpen && selectedTutorial && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-2xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Edit Tutorial</h3>
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
                <label className="form-label">Title</label>
                <input 
                  type="text" 
                  className="input-field" 
                  defaultValue={selectedTutorial.title} 
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="form-label">Category</label>
                  <select className="input-field" defaultValue={selectedTutorial.category}>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>
                
                <div>
                  <label className="form-label">Status</label>
                  <select className="input-field" defaultValue={selectedTutorial.published ? 'published' : 'draft'}>
                    <option value="published">Published</option>
                    <option value="draft">Draft</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="form-label">Content (English)</label>
                <textarea 
                  className="input-field" 
                  rows="4"
                  defaultValue="Tutorial content in English goes here..."
                ></textarea>
              </div>
              
              <div>
                <label className="form-label">Content (Sindhi)</label>
                <textarea 
                  className="input-field" 
                  rows="4"
                  defaultValue="سنڌي ۾ سبق جو مواد هتي لکو..."
                ></textarea>
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

export default TutorialManagement;
