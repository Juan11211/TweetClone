import React from 'react';

const UserImage = ({ image, size = '60px' }) => {
  return (
    <div className={`w-${size} h-${size}`}>
      <img
        style={{ objectFit: 'cover', borderRadius: '50%' }}
        className={`w-${size} h-${size}`}
        alt="user"
        src='https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3BpZGVybWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60'
      />
    </div>
  );
};

export default UserImage;
