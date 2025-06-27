const API = import.meta.env.VITE_BACKEND_URL || 'https://fashion-backend-e6qs.onrender.com';

// 📝 Register API
export const registerUser = async (formData) => {
  const res = await fetch(`${API}/api/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });

  if (!res.ok) throw new Error('Failed to register user');
  return res.json();
};

// 🔐 Login API
export const loginUser = async (formData) => {
  const res = await fetch(`${API}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });

  if (!res.ok) throw new Error('Invalid login credentials');
  return res.json();
};
