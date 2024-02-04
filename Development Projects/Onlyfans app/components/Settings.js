import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { updateProfile } from '../utils/api';

const Settings = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    displayName: '',
    bio: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(formData);
      router.push('/profile');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-semibold mb-4">Settings</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="displayName" className="block text-sm font-medium">
            Display Name
          </label>
          <input
            type="text"
            name="displayName"
            id="displayName"
            value={formData.displayName}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="bio" className="block text-sm font-medium">
            Bio
          </label>
          <textarea
            name="bio"
            id="bio"
            rows="4"
            value={formData.bio}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Settings;