import React, { useState } from 'react';
import { searchUsers } from '../services/githubApi';
import UserCard from './UserCard';

function SearchForm() {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;
    const results = await searchUsers(query);
    setUsers(results);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input 
          type="text" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Search GitHub users..." 
        />
        <button type="submit">Search</button>
      </form>

      <div>
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default SearchForm;
