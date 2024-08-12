// src/App.js
import UserProvider from './UserProvider';
import UserProfile from './UserProfile';
import UserSettings from './UserSettings';

function App() {
  return (
    <UserProvider>
      <div>
        <UserProfile />
        <UserSettings />
      </div>
    </UserProvider>
  );
}

export default App;
