import React from 'react';

const CourseCard = ({ course }) => {
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden">
      <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold">{course.title}</h3>
        <p className="text-gray-600">{course.description}</p>
        <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded">View Details</button>
      </div>
    </div>
  );
};

export default CourseCard;
