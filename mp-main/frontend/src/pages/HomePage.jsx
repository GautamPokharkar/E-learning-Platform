import React from 'react';

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to Our Learning Platform</h2>
          <p className="text-lg mb-8">Discover a variety of courses designed to enhance your skills and knowledge.</p>
          <a href="/courses" className="bg-white text-blue-700 py-2 px-4 rounded-lg font-semibold hover:bg-gray-200">
            Browse Courses
          </a>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sample Course Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/300"
                alt="Course"
                className="w-full h-32 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Course Title</h3>
              <p className="text-gray-600 mb-4">Short description of the course goes here.</p>
              <a href="/course-details" className="text-blue-600 hover:underline">Learn More</a>
            </div>
            {/* Repeat the above card for more courses */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
