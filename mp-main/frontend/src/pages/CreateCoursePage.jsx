import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormField from '../components/FormField';

const CreateCoursePage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Simulate image upload
  const uploadImageHandler = (e) => {
    const file = e.target.files[0];
    setLoading(true);

    // Simulate a delay for the image upload process
    setTimeout(() => {
      const simulatedImageUrl = URL.createObjectURL(file);
      setImageUrl(simulatedImageUrl);
      setLoading(false);
    }, 1500);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate a successful form submission
    setLoading(true);

    setTimeout(() => {
      setSuccess(true);
      setLoading(false);
      // Redirect or clear form after success
      setTimeout(() => {
        navigate('/courses'); // Redirect to courses page
      }, 1500);
    }, 1500);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Create New Course</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && <p className="text-green-500 mb-4">Course created successfully!</p>}
      <form onSubmit={handleSubmit}>
        <FormField
          label="Course Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <FormField
          label="Course Description"
          type="textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Course Image</label>
          <input
            type="file"
            onChange={uploadImageHandler}
            className="mt-1 block w-full"
          />
          {loading && <p>Uploading...</p>}
          {imageUrl && (
            <img src={imageUrl} alt="Course" className="mt-4 max-h-64 object-cover" />
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded"
          disabled={loading}
        >
          {loading ? 'Creating...' : 'Create Course'}
        </button>
      </form>
    </div>
  );
};

export default CreateCoursePage;
