// src/services/githubApi.js
import axios from 'axios';

export const searchUsers = async (query) => {
  const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
  return response.data.items; // returns array of GitHub users
};
