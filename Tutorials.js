import React, { useContext, useState } from 'react';
import { LanguageContext } from '../../context/LanguageContext';

const Tutorials = () => {
  const { translations } = useContext(LanguageContext);
  const [tutorials, setTutorials] = useState([
    {
      id: 1,
      title: 'Introduction to Sindhi Language',
      category: 'Beginner',
      progress: 100,
      imageUrl: 'https://example.com/sindhi-intro.jpg'
    },
    {
      id: 2,
      title: 'Basic Sindhi Conversation',
      category: 'Beginner',
      progress: 75,
      imageUrl: 'https://example.com/sindhi-conversation.jpg'
    },
    {
      id: 3,
      title: 'Sindhi Grammar Fundamentals',
      category: 'Intermediate',
      progress: 30,
      imageUrl: 'https://example.com/sindhi-grammar.jpg'
    },
    {
      id: 4,
      title: 'Sindhi Cultural Expressions',
      category: 'Intermediate',
      progress: 0,
      imageUrl: 'https://example.com/sindhi-culture.jpg'
    }
  ]);

  return (
    <div>
      <h2 className="text-2xl font-bold text-indigo-900 mb-6">{translations.myTutorials}</h2>
      
      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button className="px-4 py-2 bg-indigo-900 text-white rounded-md">All</button>
        <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">In Progress</button>
        <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">Completed</button>
        <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">Not Started</button>
      </div>
      
      {/* Tutorials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tutorials.map(tutorial => (
          <div key={tutorial.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-40 bg-gray-300 ajrak-pattern flex items-center justify-center">
              <span className="text-white text-xl font-bold">Sindhi AI</span>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold">{tutorial.title}</h3>
                <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded">{tutorial.category}</span>
              </div>
              
              <div className="mt-4">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Progress</span>
                  <span>{tutorial.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-red-700 h-2 rounded-full" 
                    style={{ width: `${tutorial.progress}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="mt-4 flex justify-end">
                <button className="btn-primary text-sm">
                  {tutorial.progress === 0 ? 'Start' : tutorial.progress === 100 ? 'Review' : 'Continue'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Explore More */}
      <div className="mt-8 text-center">
        <button className="btn-secondary">
          Explore More Tutorials
        </button>
      </div>
    </div>
  );
};

export default Tutorials;
