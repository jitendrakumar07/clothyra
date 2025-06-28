import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Collection from './pages/Collection';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import PlaceOrder from './pages/PlaceOrder';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Orders from './pages/Orders';
import { Analytics } from "@vercel/analytics/react"

// ✅ NEW: Import the new Admin
import AdminAddProduct from './pages/admin/AdminAddProduct';


const App = () => {
  return (
    <>
     <Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} />
    <Route path="collection" element={<Collection />} />
    <Route path="product/:id" element={<ProductDetail />} />
    <Route path="cart" element={<Cart />} />
    <Route path="place-order" element={<PlaceOrder />} />
    <Route path="login" element={<Login />} />
    <Route path="register" element={<Register />} />
    <Route path="forgot-password" element={<ForgotPassword />} />
    <Route path="orders" element={<Orders />} />  {/* ✅ NEW */}
    {/* ✅ This is now correct */}
    <Route path="admin/add-product" element={<AdminAddProduct />} />
     
  </Route>
</Routes>
  <Analytics />

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    </>
  );
};

export default App;
