// src/UserSettings.js
import { useContext } from 'react';
import UserContext from './UserContext';

function UserSettings() {
  const user = useContext(UserContext);

  if (!user) {
    return <p>No user data available</p>;
  }

  return (
    <div>
      <h2>User Settings</h2>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Website:</strong> {user.website}</p>
      <p><strong>Company:</strong> {user.company.name}</p>
      {/* Additional settings can go here */}
    </div>
  );
}

export default UserSettings;
