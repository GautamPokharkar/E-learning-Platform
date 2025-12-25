import React, { useState, useEffect } from 'react';

// Dummy data for courses
const dummyCourses = [
  {
    id: 1,
    title: 'Introduction to React',
    description: 'Learn the basics of React, including components, hooks, and state management.',
    imageUrl: 'https://via.placeholder.com/150', // Placeholder image
  },
  {
    id: 2,
    title: 'Advanced JavaScript',
    description: 'Dive deep into JavaScript concepts like closures, promises, and async/await.',
    imageUrl: 'https://via.placeholder.com/150', // Placeholder image
  },
  {
    id: 3,
    title: 'CSS for Beginners',
    description: 'A comprehensive guide to CSS, covering everything from Flexbox to Grid.',
    imageUrl: 'https://via.placeholder.com/150', // Placeholder image
  },
];

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Simulate fetching courses from an API
    const fetchCourses = async () => {
      // Here, you would typically make an API call to fetch courses
      // const { data } = await axios.get('/api/courses');
      // setCourses(data);

      // Using dummy data for now
      setCourses(dummyCourses);
    };

    fetchCourses();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Available Courses</h1>
      {courses.length === 0 ? (
        <p>No courses available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course) => (
            <div key={course.id} className="border rounded-lg p-4 shadow-lg">
              <img
                src={course.imageUrl}
                alt={course.title}
                className="h-32 w-full object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
              <p className="text-gray-700">{course.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CoursesPage;
