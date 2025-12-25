import React from 'react';
import { useAuth } from '../context/AuthContext';

const TeacherDashboard = () => {
  const { user } = useAuth(); // Access user info from context

  if (!user) return <p>Please log in to view your dashboard.</p>;

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-800 text-white flex-shrink-0">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">Teacher Dashboard</h2>
          <nav>
            <ul className="space-y-4">
              <li>
                <Link to="/teacher/profile" className="block py-2 px-4 rounded hover:bg-blue-700">Profile</Link>
              </li>
              <li>
                <Link to="/teacher/courses" className="block py-2 px-4 rounded hover:bg-blue-700">My Courses</Link>
              </li>
              {/* Add more links as needed */}
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6">
        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h1 className="text-2xl font-bold">Welcome, {user.name}!</h1>
          <p className="text-gray-600">Here’s an overview of your dashboard.</p>
          {/* Add additional teacher-specific content here */}
        </section>

        {/* Stats and Recent Activities */}
        {/* Content goes here */}
      </main>
    </div>
  );
};

export default TeacherDashboard;
