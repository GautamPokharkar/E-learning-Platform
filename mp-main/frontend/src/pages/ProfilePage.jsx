import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const ProfilePage = () => {
  const { user } = useAuth(); // Access user info from context
  const [editing, setEditing] = useState(false);
  const [newProfile, setNewProfile] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Here you would normally send newProfile to the backend
    setEditing(false);
  };

  if (!user) return <p>Please log in to view your profile.</p>;

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center">
          <img
            src={user.profilePicture || "https://via.placeholder.com/100"}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-blue-500"
          />
          <div className="ml-6">
            {editing ? (
              <div className="mt-6">
                <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
                <form>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={newProfile.name}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={newProfile.email}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="bio">Bio</label>
                    <textarea
                      id="bio"
                      name="bio"
                      value={newProfile.bio}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleSave}
                    className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                  >
                    Save Changes
                  </button>
                </form>
              </div>
            ) : (
              <>
                <h1 className="text-2xl font-bold">{user.name}</h1>
                <p className="text-gray-600">{user.email}</p>
                <p className="text-gray-600">{user.bio}</p>
                <button
                  onClick={() => setEditing(true)}
                  className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 mt-6"
                >
                  Edit Profile
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
