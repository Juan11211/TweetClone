import React from 'react';

const UserImage = ({ image, size = '60px' }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        overflow: 'hidden',
        borderRadius: '50%',
      }}
    >
      <img
        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        alt="user"
        src={`http://localhost:9000/assets/${image}`}      />
    </div>
  );
};

export default UserImage;
