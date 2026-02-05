const UserProfile = (props) => {
  return (
    <div style={{
      border: '2px solid gray',
      borderRadius: '10px',
      padding: '15px',
      width: '250px',
      margin: '10px auto',
      boxShadow: '2px 2px 10px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ color: 'blue', marginBottom: '10px' }}>{props.name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
      <p>Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfile;

