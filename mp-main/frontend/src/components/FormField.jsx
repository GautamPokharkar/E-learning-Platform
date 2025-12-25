import React from 'react';

const FormField = ({ label, value, onChange, type = 'text' }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      {type === 'textarea' ? (
        <textarea
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          type={type}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default FormField;

