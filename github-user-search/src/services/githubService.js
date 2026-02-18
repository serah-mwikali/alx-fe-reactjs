import axios from 'axios';

// Function to fetch user data from GitHub API
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data; // Returns user data object
  } catch (error) {
    throw new Error('User not found'); // Will be caught in component
  }
};
