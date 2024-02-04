import React from 'react';

const ContentCard = ({ title, imageUrl, description, creator }) => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden max-w-sm mx-auto">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
        <div className="mt-4 flex items-center">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src={creator.profilePicture}
            alt={creator.name}
          />
          <div>
            <p className="text-sm font-semibold">{creator.name}</p>
            <p className="text-xs text-gray-500">{creator.username}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;