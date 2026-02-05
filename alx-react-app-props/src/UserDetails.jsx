import { useContext } from 'react';
import UserContext from './UserContext';

function UserDetails() {
  const userData = useContext(UserContext);

  return (
    <div style={{ border: '1px solid gray', padding: '10px', width: '250px', margin: '20px auto' }}>
      <p><strong>Name:</strong> {userData.name}</p>
      <p><strong>Email:</strong> {userData.email}</p>
    </div>
  );
}

export default UserDetails;
