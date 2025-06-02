import React, { useContext, useState } from 'react';
import { LanguageContext } from '../../context/LanguageContext';

const Progress = () => {
  const { translations } = useContext(LanguageContext);
  
  // Sample progress data
  const [progressData, setProgressData] = useState({
    totalLessons: 20,
    completedLessons: 8,
    totalQuizzes: 15,
    completedQuizzes: 6,
    averageScore: 82,
    learningTime: 12.5,
    streakDays: 7
  });
  
  // Sample activity data
  const [activityData, setActivityData] = useState([
    { day: 'Mon', hours: 1.5 },
    { day: 'Tue', hours: 2.0 },
    { day: 'Wed', hours: 0.5 },
    { day: 'Thu', hours: 1.0 },
    { day: 'Fri', hours: 2.5 },
    { day: 'Sat', hours: 3.0 },
    { day: 'Sun', hours: 2.0 }
  ]);

  return (
    <div>
      <h2 className="text-2xl font-bold text-indigo-900 mb-6">{translations.myProgress}</h2>
      
      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <h3 className="text-sm text-gray-500 mb-1">Lessons Completed</h3>
          <div className="flex items-end">
            <span className="text-2xl font-bold">{progressData.completedLessons}</span>
            <span className="text-gray-500 ml-1">/ {progressData.totalLessons}</span>
          </div>
          <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-red-700 h-2 rounded-full" 
              style={{ width: `${(progressData.completedLessons / progressData.totalLessons) * 100}%` }}
            ></div>
          </div>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <h3 className="text-sm text-gray-500 mb-1">Quizzes Completed</h3>
          <div className="flex items-end">
            <span className="text-2xl font-bold">{progressData.completedQuizzes}</span>
            <span className="text-gray-500 ml-1">/ {progressData.totalQuizzes}</span>
          </div>
          <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-indigo-600 h-2 rounded-full" 
              style={{ width: `${(progressData.completedQuizzes / progressData.totalQuizzes) * 100}%` }}
            ></div>
          </div>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <h3 className="text-sm text-gray-500 mb-1">Average Score</h3>
          <div className="flex items-end">
            <span className="text-2xl font-bold">{progressData.averageScore}%</span>
          </div>
          <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-green-600 h-2 rounded-full" 
              style={{ width: `${progressData.averageScore}%` }}
            ></div>
          </div>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <h3 className="text-sm text-gray-500 mb-1">Learning Streak</h3>
          <div className="flex items-end">
            <span className="text-2xl font-bold">{progressData.streakDays}</span>
            <span className="text-gray-500 ml-1">days</span>
          </div>
          <div className="mt-2 flex items-center">
            <svg className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
            </svg>
            <span className="ml-1 text-sm text-gray-600">Keep it up!</span>
          </div>
        </div>
      </div>
      
      {/* Weekly Activity */}
      <h3 className="text-xl font-semibold mb-4">Weekly Activity</h3>
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm mb-8">
        <div className="flex justify-between items-end h-40 mb-2">
          {activityData.map((day, index) => (
            <div key={index} className="flex flex-col items-center">
              <div 
                className="w-8 bg-indigo-600 rounded-t-md" 
                style={{ height: `${day.hours * 20}px` }}
              ></div>
            </div>
          ))}
        </div>
        <div className="flex justify-between">
          {activityData.map((day, index) => (
            <div key={index} className="text-xs text-gray-500 w-8 text-center">
              {day.day}
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">Total learning time this week: <span className="font-semibold">{progressData.learningTime} hours</span></p>
        </div>
      </div>
      
      {/* Skills Progress */}
      <h3 className="text-xl font-semibold mb-4">Skills Progress</h3>
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Reading</span>
              <span className="text-sm text-gray-500">75%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-red-700 h-2 rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Writing</span>
              <span className="text-sm text-gray-500">60%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-red-700 h-2 rounded-full" style={{ width: '60%' }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Speaking</span>
              <span className="text-sm text-gray-500">45%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-red-700 h-2 rounded-full" style={{ width: '45%' }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Listening</span>
              <span className="text-sm text-gray-500">80%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-red-700 h-2 rounded-full" style={{ width: '80%' }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Vocabulary</span>
              <span className="text-sm text-gray-500">65%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-red-700 h-2 rounded-full" style={{ width: '65%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
