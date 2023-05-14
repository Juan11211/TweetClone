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
        src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60"
      />
    </div>
  );
};

export default UserImage;
