import React, { useState, useEffect, useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import axios from 'axios';

const MessageManagement = () => {
  const { translations } = useContext(LanguageContext);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  
  // Simulate fetching messages
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        // In a real implementation, this would be an API call
        // const response = await axios.get('/api/admin/messages');
        // setMessages(response.data);
        
        // Simulate API response
        setTimeout(() => {
          setMessages([
            {
              id: 1,
              name: 'Rahul Menghwar',
              email: 'r.menghwar@example.com',
              subject: 'Question about Sindhi Grammar',
              message: 'I have a question about the use of postpositions in Sindhi. Could you provide more examples in the tutorials?',
              createdAt: '2025-06-01T10:30:00Z',
              isRead: true
            },
            {
              id: 2,
              name: 'Aisha Baloch',
              email: 'aisha.b@example.com',
              subject: 'Technical Issue with AI Tools',
              message: 'I\'m experiencing some issues with the pronunciation coach tool. The audio feedback isn\'t working properly on my device.',
              createdAt: '2025-06-01T14:45:00Z',
              isRead: true
            },
            {
              id: 3,
              name: 'Kamran Soomro',
              email: 'kamran.s@example.com',
              subject: 'Suggestion for New Content',
              message: 'I would love to see more content about Sindhi poetry and literature. It would be a great addition to the platform.',
              createdAt: '2025-06-02T09:15:00Z',
              isRead: false
            },
            {
              id: 4,
              name: 'Nadia Pathan',
              email: 'nadia.p@example.com',
              subject: 'Thank You for the Platform',
              message: 'I just wanted to express my gratitude for creating this platform. It has been incredibly helpful for me to learn Sindhi while living abroad.',
              createdAt: '2025-06-02T11:20:00Z',
              isRead: false
            }
          ]);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching messages:', error);
        setLoading(false);
      }
    };
    
    fetchMessages();
  }, []);
  
  const handleViewMessage = (message) => {
    setSelectedMessage(message);
    setModalOpen(true);
    
    // Mark as read in a real implementation
    // axios.put(`/api/admin/messages/${message.id}/read`);
    
    // Update local state
    if (!message.isRead) {
      setMessages(messages.map(m => 
        m.id === message.id ? { ...m, isRead: true } : m
      ));
    }
  };
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-indigo-900 mb-6">Message Management</h2>
      
      {loading ? (
        <div className="text-center py-8">
          <p>Loading messages...</p>
        </div>
      ) : (
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sender
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Subject
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
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
              {messages.map(message => (
                <tr key={message.id} className={message.isRead ? '' : 'bg-blue-50'}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                        <span className="text-indigo-800 font-medium">
                          {message.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{message.name}</div>
                        <div className="text-sm text-gray-500">{message.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {!message.isRead && <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-2"></span>}
                      {message.subject}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatDate(message.createdAt)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {message.isRead ? (
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                        Read
                      </span>
                    ) : (
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        Unread
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button 
                      onClick={() => handleViewMessage(message)}
                      className="text-indigo-600 hover:text-indigo-900 mr-3"
                    >
                      View
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
      
      {/* Message View Modal */}
      {modalOpen && selectedMessage && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-2xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">{selectedMessage.subject}</h3>
              <button 
                onClick={() => setModalOpen(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <span className="font-medium">From:</span> {selectedMessage.name} ({selectedMessage.email})
                </div>
                <div className="text-sm text-gray-500">
                  {formatDate(selectedMessage.createdAt)}
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-4">
              <p className="whitespace-pre-line">{selectedMessage.message}</p>
            </div>
            
            <div className="mt-6 border-t border-gray-200 pt-4">
              <h4 className="font-medium mb-2">Reply</h4>
              <textarea 
                className="input-field" 
                rows="4"
                placeholder="Type your reply here..."
              ></textarea>
              
              <div className="flex justify-end space-x-3 mt-4">
                <button 
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm bg-white text-gray-700 hover:bg-gray-50"
                >
                  Close
                </button>
                <button className="btn-primary">
                  Send Reply
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessageManagement;
