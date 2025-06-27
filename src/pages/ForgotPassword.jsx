import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleReset = (e) => {
    e.preventDefault();
    // TODO: Add password reset logic
    alert(`Reset link sent to ${email}`);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#f9f7f3] px-4 py-12">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-xl font-Prata border border-[#ece4d9]">
        <h2 className="text-3xl font-bold mb-6 text-[#1c130b] text-center font-serif">
          Forgot Password
        </h2>
        <form onSubmit={handleReset} className="space-y-5">
          <div>
            <label className="text-sm font-medium text-[#1c130b]">Email Address</label>
            <input
              type="email"
              required
              className="w-full mt-2 px-4 py-2 border rounded-lg text-sm focus:outline-none border-[#ddd5c7]"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#D3AB66] text-white py-2 rounded-lg font-semibold hover:bg-[#c29c4d] transition"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </section>
  );
};

export default ForgotPassword;
