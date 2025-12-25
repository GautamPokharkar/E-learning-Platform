import React, { useEffect } from 'react';
import { useUser, useClerk } from '@clerk/clerk-react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Example chart data
const chartData = {
  labels: ['Math', 'Science', 'English', 'History'],
  datasets: [
    {
      label: 'Course Progress',
      data: [85, 70, 90, 60], // Example data
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

// Options for the Bar chart
const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    tooltip: {
      callbacks: {
        label: function (tooltipItem) {
          return tooltipItem.dataset.label + ': ' + tooltipItem.raw + '%';
        },
      },
    },
  },
};

const UserDashboard = () => {
  const { user } = useUser(); // Access user info from Clerk
  const { signOut } = useClerk(); // Access signOut function from Clerk
  const navigate = useNavigate(); // Initialize useNavigate for redirection

  useEffect(() => {
    if (!user) {
      // If user is not authenticated, redirect to login page
      navigate('/login');
    }
  }, [user, navigate]); // Run the effect when 'user' changes

  const handleLogout = () => {
    signOut();
  };

  if (!user) {
    return null; // Return nothing while redirecting
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-800 text-white flex-shrink-0">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
          <nav>
            <ul className="space-y-4">
              <li>
                <Link to="/profile" className="block py-2 px-4 rounded hover:bg-blue-700">Profile</Link>
              </li>
              <li>
                <Link to="/courses" className="block py-2 px-4 rounded hover:bg-blue-700">My Courses</Link>
              </li>
              <li>
                <Link to="/grades" className="block py-2 px-4 rounded hover:bg-blue-700">Grades</Link>
              </li>
              <li>
                <Link to="/settings" className="block py-2 px-4 rounded hover:bg-blue-700">Settings</Link>
              </li>
              <li>
                <button 
                  onClick={handleLogout} 
                  className="block py-2 px-4 rounded hover:bg-blue-700 w-full text-left"
                >
                  Logout
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6">
        <section className="bg-white p-6 rounded-lg shadow-md mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Welcome, {user.firstName}!</h1>
            <p className="text-gray-600">Here’s an overview of your dashboard.</p>
          </div>
          <div className="relative">
            <button className="flex items-center space-x-2 bg-gray-300 p-2 rounded-full hover:bg-gray-400 focus:outline-none">
              {user.profileImageUrl ? (
                <img 
                  src={user.profileImageUrl} 
                  alt="Profile" 
                  className="w-12 h-12 rounded-full border-2 border-gray-500"
                />
              ) : (
                <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center text-white">
                  {user.firstName.charAt(0)}
                </div>
              )}
              <span className="text-gray-800">{user.firstName}</span>
            </button>
          </div>
        </section>

        {/* Stats and Recent Activities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {/* Course Progress */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Course Progress</h2>
            <Bar data={chartData} options={chartOptions} />
          </div>

          {/* Recent Activities */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
            <ul className="space-y-4">
              <li>
                <div className="flex items-center space-x-3">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                  <p className="text-gray-800">Completed "Math Algebra Basics" course.</p>
                </div>
              </li>
              <li>
                <div className="flex items-center space-x-3">
                  <div className="w-2.5 h-2.5 bg-blue-500 rounded-full"></div>
                  <p className="text-gray-800">Started "Introduction to Physics" course.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Upcoming Deadlines */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Upcoming Deadlines</h2>
            <ul className="space-y-4">
              <li>
                <div className="flex items-center space-x-3">
                  <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
                  <p className="text-gray-800">Math Homework - Due in 2 days</p>
                </div>
              </li>
              <li>
                <div className="flex items-center space-x-3">
                  <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div>
                  <p className="text-gray-800">Science Project - Due in 1 week</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;
