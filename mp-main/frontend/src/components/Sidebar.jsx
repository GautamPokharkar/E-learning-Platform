import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-100 p-4">
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>
      <ul>
        <li>
          <Link to="/admin" className="block py-2 px-4 hover:bg-gray-200">Admin Dashboard</Link>
        </li>
        <li>
          <Link to="/create-course" className="block py-2 px-4 hover:bg-gray-200">Create Course</Link>
        </li>
        <li>
          <Link to="/courses" className="block py-2 px-4 hover:bg-gray-200">Courses</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
