import React, { useContext, useEffect, useState } from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { ShopContext } from '../context/ShopContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// ✅ Use environment-based API URL
const API = import.meta.env.VITE_BACKEND_URL || 'https://fashion-backend-e6qs.onrender.com';

const Orders = () => {
  const { user, orders, setOrders } = useContext(ShopContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      toast.error('Please login to view your orders');
      navigate('/login');
      return;
    }

    const fetchOrders = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${API}/api/orders`, {
          params: { userId: user.email },
        });

        setOrders(res.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
        toast.error(error.response?.data?.message || 'Failed to fetch orders');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user, navigate, setOrders]);

  return (
    <section className="w-full min-h-screen bg-[#fffdfa] px-4 py-10 sm:px-8 md:px-16 lg:px-24 font-sans">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-[#1c130b]">
        Your <span className="text-[#D3AB66]">Orders</span>
      </h2>

      {loading ? (
        <p className="text-center text-gray-600">Loading your orders...</p>
      ) : orders.length === 0 ? (
        <p className="text-center text-gray-500">You haven't placed any orders yet.</p>
      ) : (
        <div className="overflow-x-auto bg-white shadow-xl rounded-2xl border border-[#ece4d9]">
          <table className="min-w-full table-auto text-sm text-left text-gray-700">
            <thead className="bg-[#f9f6f1] text-[#1c130b] uppercase tracking-wide text-xs border-b border-[#ece4d9]">
              <tr>
                <th className="px-6 py-4">Item</th>
                <th className="px-6 py-4">Product</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Total</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id} className="border-b hover:bg-[#fefbf8] transition duration-200">
                  <td className="px-6 py-4">
                    <img
                      src={order.items?.[0]?.image?.replace('/upload/', '/upload/w_100,h_100,c_fill,f_auto,q_auto/') || '/placeholder.jpg'}
                      alt={order.items?.[0]?.name}
                      className="w-16 h-16 object-cover rounded-lg border border-[#e6e0d6] shadow-sm"
                    />
                  </td>
                  <td className="px-6 py-4 font-medium text-[#1c130b]">
                    {order.items.length === 1
                      ? order.items[0].name
                      : `${order.items[0].name} + ${order.items.length - 1} more`}
                  </td>
                  <td className="px-6 py-4">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    {order.isDelivered ? (
                      <span className="flex items-center gap-2 text-green-600 font-semibold">
                        <FaCheckCircle /> Delivered
                      </span>
                    ) : (
                      <span className="flex items-center gap-2 text-red-500 font-semibold">
                        <FaTimesCircle /> Pending
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 font-bold text-[#1c130b]">
                    ₹{order.totalAmount?.toFixed(2) || '0.00'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default Orders;
