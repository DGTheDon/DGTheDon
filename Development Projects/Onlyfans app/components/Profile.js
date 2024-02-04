import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { fetchUserProfile } from '../utils/api';

const Profile = () => {
  const router = useRouter();
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profile = await fetchUserProfile();
        setUserProfile(profile);
      } catch (error) {
        console.error('Error fetching user profile:', error);
        router.push('/login');
      }
    };

    fetchData();
  }, []);

  if (!userProfile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <p className="text-gray-700 text-sm" id="userProfile">{userProfile.username}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <p className="text-gray-700 text-sm" id="userProfile">{userProfile.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;