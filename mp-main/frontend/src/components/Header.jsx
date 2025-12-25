import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isTeacherMode, setIsTeacherMode] = useState(false);

  const toggleMode = () => {
    setIsTeacherMode(!isTeacherMode);
  };

  return (
    <header className="bg-blue-600 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">LMS</Link>
          <nav>
            <Link to="/" className="px-4">Home</Link>
            <Link to="/courses" className="px-4">Courses</Link>
            {isTeacherMode ? (
              <>
                <Link to="/teacher/dashboard" className="px-4">Dashboard</Link>
                <Link to="/teacher/profile" className="px-4">Profile</Link>
              </>
            ) : (
              <>
                <Link to="/user-dashboard" className="px-4">Dashboard</Link>
                <Link to="/profile" className="px-4">Profile</Link>
              </>
            )}
            <button
              onClick={toggleMode}
              className="px-4 py-2 bg-white text-blue-600 rounded hover:bg-gray-200"
            >
              {isTeacherMode ? 'Student Mode' : 'Teacher Mode'}
            </button>
            <Link to="/login" className="px-4">Login</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
