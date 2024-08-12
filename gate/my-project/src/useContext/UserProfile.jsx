// src/UserProfile.js
import { useContext } from 'react';
import UserContext from './UserContext';

function UserProfile() {
  const user = useContext(UserContext);

  if (!user) {
    return <p>No user data available</p>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
    </div>
  );
}

export default UserProfile;
