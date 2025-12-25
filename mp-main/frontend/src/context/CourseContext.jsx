import React, { createContext, useState, useContext } from 'react';

// Create a context for courses
const CourseContext = createContext();

// Create a provider component
export const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState([]); // Initialize with an empty array or fetch from an API

  // Function to add a course
  const addCourse = (course) => {
    setCourses((prevCourses) => [...prevCourses, course]);
  };

  // Function to remove a course
  const removeCourse = (courseId) => {
    setCourses((prevCourses) => prevCourses.filter(course => course.id !== courseId));
  };

  // Function to update a course
  const updateCourse = (updatedCourse) => {
    setCourses((prevCourses) => 
      prevCourses.map(course => 
        course.id === updatedCourse.id ? updatedCourse : course
      )
    );
  };

  return (
    <CourseContext.Provider value={{ courses, addCourse, removeCourse, updateCourse }}>
      {children}
    </CourseContext.Provider>
  );
};

// Custom hook to use the CourseContext
export const useCourses = () => useContext(CourseContext);

