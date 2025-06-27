import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import registerImage from '../assets/login/login.jpg';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('https://fashion-backend-e6qs.onrender.com/api/auth/register', {

        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('token', data.token);
        toast.success('Account created successfully!');
        navigate('/');
      } else {
        toast.error(data.message || 'Registration failed!');
      }
    } catch (err) {
      console.error('Register error:', err);
      toast.error('Something went wrong. Please try again.');
    }

    setLoading(false);
  };

  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 font-Prata bg-white">
      {/* Left Image */}
      <div className="hidden md:block h-screen">
        <img
          src={registerImage}
          alt="Luxury Registration"
          className="w-full h-full object-cover object-[50%_35%] rounded-l-2xl shadow-lg"
        />
      </div>

      {/* Right Form */}
      <div className="flex items-center justify-center bg-[#fffdfa] px-6 py-10 md:px-12 lg:px-20">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c130b] tracking-wide">
              Create Your <span className="text-[#D3AB66]">Account</span>
            </h2>
            <p className="text-sm text-gray-600">
              Start your luxurious shopping experience now.
            </p>
          </div>

          <form onSubmit={handleRegister} className="space-y-5">
            {/* First Name */}
            <div>
              <label className="text-sm font-medium text-[#1c130b]">First Name</label>
              <input
                type="text"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 text-sm border border-[#d6cfc1] rounded-full focus:outline-none focus:ring-2 focus:ring-[#D3AB66] bg-white"
                placeholder="First name"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="text-sm font-medium text-[#1c130b]">Last Name</label>
              <input
                type="text"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 text-sm border border-[#d6cfc1] rounded-full focus:outline-none focus:ring-2 focus:ring-[#D3AB66] bg-white"
                placeholder="Last name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium text-[#1c130b]">Email Address</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 text-sm border border-[#d6cfc1] rounded-full focus:outline-none focus:ring-2 focus:ring-[#D3AB66] bg-white"
                placeholder="you@example.com"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium text-[#1c130b]">Password</label>
              <input
                type="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 text-sm border border-[#d6cfc1] rounded-full focus:outline-none focus:ring-2 focus:ring-[#D3AB66] bg-white"
                placeholder="••••••••"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#1c130b] text-white py-3 rounded-full font-semibold hover:bg-[#372213] transition"
            >
              {loading ? 'Creating...' : 'Register'}
            </button>
          </form>

          <p className="text-sm text-center text-gray-600 pt-3">
            Already have an account?{' '}
            <Link to="/login" className="text-[#D3AB66] font-semibold hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
