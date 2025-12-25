import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import TeacherDashboard from './pages/TeacherDashboard';
import UserDashboard from './pages/UserDashboard';
import CreateCoursePage from './pages/CreateCoursePage';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Header';
import Footer from './components/Footer';
import ProfilePage from './pages/ProfilePage';
import { SignedIn, SignedOut, SignIn, useUser } from '@clerk/clerk-react';

const App = () => {
  const { user } = useUser(); // Access the authenticated user

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CoursesPage />} />
            
            {/* Protected Routes */}
            <Route
              path="/teacher/dashboard"
              element={
                <SignedIn>
                  <TeacherDashboard />
                </SignedIn>
              }
            />
            <Route
              path="/user-dashboard"
              element={user ? <UserDashboard /> : <Navigate to="/login" />} // Redirect if user is not logged in
            />
            <Route
              path="/create-course"
              element={
                <SignedIn>
                  <CreateCoursePage />
                </SignedIn>
              }
            />
            <Route
              path="/profile"
              element={
                <SignedIn>
                  <ProfilePage />
                </SignedIn>
              }
            />

            {/* Login Page - Redirect to Dashboard if User is Already Logged In */}
            <Route
  path="/login"
  element={
    user ? (
      <Navigate to="/user-dashboard" />
    ) : (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <SignIn />
        </div>
      </div>
    )
  }
/>


            {/* 404 Page Not Found */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
