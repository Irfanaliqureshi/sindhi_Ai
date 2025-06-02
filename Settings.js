import React, { useContext, useState } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import { AuthContext } from '../../context/AuthContext';

const Settings = () => {
  const { language, toggleLanguage, translations } = useContext(LanguageContext);
  const { user, updateLanguage } = useContext(AuthContext);
  
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    preferredLanguage: language,
    notifications: true,
    emailUpdates: false
  });
  
  const [message, setMessage] = useState({
    type: '',
    text: ''
  });
  
  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };
  
  const handleLanguageChange = async e => {
    const newLanguage = e.target.value;
    setFormData({
      ...formData,
      preferredLanguage: newLanguage
    });
    
    // Update language in context
    if (newLanguage !== language) {
      toggleLanguage();
    }
    
    // Update language preference in backend
    if (user) {
      try {
        const result = await updateLanguage(newLanguage);
        if (result.success) {
          setMessage({
            type: 'success',
            text: 'Language preference updated successfully!'
          });
        } else {
          setMessage({
            type: 'error',
            text: result.error
          });
        }
      } catch (err) {
        setMessage({
          type: 'error',
          text: 'Failed to update language preference.'
        });
      }
    }
  };
  
  const handleSubmit = e => {
    e.preventDefault();
    
    // In a real implementation, this would update user profile
    setMessage({
      type: 'success',
      text: 'Settings updated successfully!'
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-indigo-900 mb-6">{translations.settings}</h2>
      
      {message.text && (
        <div className={`p-4 mb-6 rounded-md ${message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {message.text}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Profile Settings */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Profile Settings</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="form-label">{translations.name}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="input-field"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="form-label">{translations.email}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input-field"
                disabled
              />
              <p className="text-xs text-gray-500 mt-1">Email cannot be changed</p>
            </div>
          </div>
        </div>
        
        {/* Language Preferences */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Language Preferences</h3>
          
          <div>
            <label className="form-label">Preferred Language</label>
            <div className="mt-2">
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <input
                    id="sindhi"
                    name="preferredLanguage"
                    type="radio"
                    value="sindhi"
                    checked={formData.preferredLanguage === 'sindhi'}
                    onChange={handleLanguageChange}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                  />
                  <label htmlFor="sindhi" className="ml-2 block text-sm text-gray-900">
                    سنڌي
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="english"
                    name="preferredLanguage"
                    type="radio"
                    value="english"
                    checked={formData.preferredLanguage === 'english'}
                    onChange={handleLanguageChange}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                  />
                  <label htmlFor="english" className="ml-2 block text-sm text-gray-900">
                    English
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Notification Settings */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Notification Settings</h3>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="notifications"
                  name="notifications"
                  type="checkbox"
                  checked={formData.notifications}
                  onChange={handleChange}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="notifications" className="font-medium text-gray-700">In-app Notifications</label>
                <p className="text-gray-500">Receive notifications about your progress and new content.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="emailUpdates"
                  name="emailUpdates"
                  type="checkbox"
                  checked={formData.emailUpdates}
                  onChange={handleChange}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="emailUpdates" className="font-medium text-gray-700">Email Updates</label>
                <p className="text-gray-500">Receive email updates about new features and learning resources.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Submit Button */}
        <div className="flex justify-end">
          <button type="submit" className="btn-primary">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Settings;
