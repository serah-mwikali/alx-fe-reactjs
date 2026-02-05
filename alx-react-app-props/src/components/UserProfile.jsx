import { useContext } from 'react';
import UserContext from '../UserContext';

const UserProfile = () => {
  const userData = useContext(UserContext);

  return (
    <div style={{ border: '1px solid gray', padding: '10px', width: '250px', margin: '20px auto' }}>
      <h2>{userData.name}</h2>
      <p>Email: {userData.email}</p>
    </div>
  );
};

export default UserProfile;

