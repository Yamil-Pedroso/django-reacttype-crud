import { useState, useEffect } from 'react';
import { loginUser } from '../../../api/auth';
import { toast } from 'react-hot-toast';

const LoginForm = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string>('');

  // Check if user ID exists in localStorage
  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      window.location.href = '/'; // Redirect to home page if user ID exists
    }
  }, []); // Empty dependency array means this effect runs only once

  const handleLogin = async () => {
    try {
      toast.loading('Logging in...'); // Show loading indicator while logging in
      const response = await loginUser({ username, email, password });
      console.log(response);
  
      // Assuming response.data contains the user ID after successful login
      const userId = response.data.id;
  
      // Store the user ID in localStorage
      localStorage.setItem('userId', userId);

      console.log(response.data);
  
      // Redirect to home page
      window.location.href = '/';
    } catch (error) {
      setError('Login failed. Please check your credentials.');
      toast.error('Login failed. Please check your credentials.');
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <h1>Login</h1>
        <p>{error}</p>
        <label htmlFor="username">Username</label>
        <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={handleLogin}>
            Login
        </button>
    </form>
  );
};

export default LoginForm;
