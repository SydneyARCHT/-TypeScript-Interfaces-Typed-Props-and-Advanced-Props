import React from 'react';
import { UserInfoProps } from '../interfaces/UserInfoProps';

const UserInfo: React.FC<UserInfoProps> = ({ name, age, email }) => {
  return (
    <div className="user-info">
      <h1>User Information</h1>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Email:</strong> {email}</p>
    </div>
  );
};

export default UserInfo;