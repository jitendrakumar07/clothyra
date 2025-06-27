import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import login from '../assets/login/login.jpg';
import { toast } from 'react-toastify';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

// Set axios defaults
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL || 'https://fashion-backend-e6qs.onrender.com';
axios.defaults.headers.common['Content-Type'] = 'application/json';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useContext(ShopContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !password) {
      toast.error('Please enter both email and password');
      return;
    }
    
    setLoading(true);

    try {
      console.log('Attempting login with:', { email }); // Debug log
      
      const response = await axios.post('/api/auth/login', {
        email: email.trim(),
        password: password
      });

      const { token, user } = response.data;
      
      if (!token || !user) {
        throw new Error('Invalid response from server');
      }

      // Save to localStorage and context
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      setUser(user);

      toast.success('Login successful!');
      navigate('/');
    } catch (error) {
      console.error('Login error:', error);
      
      let errorMessage = 'Login failed. Please try again.';
      
      if (error.response) {
        // Server responded with error status code
        errorMessage = error.response.data?.message || errorMessage;
        console.error('Response data:', error.response.data);
        console.error('Status code:', error.response.status);
      } else if (error.request) {
        // Request was made but no response received
        errorMessage = 'No response from server. Please check your connection.';
        console.error('No response received:', error.request);
      }
      
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 font-Prata bg-white">
      {/* Left Image Section */}
      <div className="hidden md:block h-screen">
        <img
          src={login}
          alt="Luxury Fashion"
          className="w-full h-full object-cover object-[50%_35%] rounded-l-2xl shadow-lg"
        />
      </div>

      {/* Right Login Form Section */}
      <div className="flex items-center justify-center bg-[#fffdfa] px-6 py-10 md:px-12 lg:px-20">
        <div className="w-full max-w-md space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c130b] tracking-wide">
              Welcome <span className="text-[#D3AB66]">Back</span>
            </h2>
            <p className="text-sm text-gray-600">
              Sign in to continue your royal shopping journey.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="text-sm font-medium text-[#1c130b]">Email Address</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-1 px-4 py-2 text-sm border border-[#d6cfc1] rounded-full focus:outline-none focus:ring-2 focus:ring-[#D3AB66] bg-white"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-[#1c130b]">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-1 px-4 py-2 text-sm border border-[#d6cfc1] rounded-full focus:outline-none focus:ring-2 focus:ring-[#D3AB66] bg-white"
                placeholder="••••••••"
              />
            </div>

            <div className="flex justify-between items-center text-sm text-gray-600">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-[#D3AB66]" />
                Remember me
              </label>
              <Link to="/forgot-password" className="text-[#D3AB66] hover:underline">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#1c130b] text-white py-3 rounded-full font-semibold hover:bg-[#372213] transition"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <p className="text-sm text-center text-gray-600 pt-3">
            Don’t have an account?{' '}
            <Link to="/register" className="text-[#D3AB66] font-semibold hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
