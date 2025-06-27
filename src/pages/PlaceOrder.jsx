import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const PlaceOrder = () => {
  const { cartItems, getTotalPrice, user, clearCart, setOrders } = useContext(ShopContext);
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const navigate = useNavigate();

  const subtotal = getTotalPrice();
  const shipping = 10;
  const total = subtotal + shipping;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      toast.error('Please login to place an order');
      navigate('/login');
      return;
    }

    const form = new FormData(e.target);
    const shippingAddress = {
      firstName: form.get('firstName'),
      lastName: form.get('lastName'),
      email: user.email,
      street: form.get('street'),
      city: form.get('city'),
      state: form.get('state'),
      zipcode: form.get('zipcode'),
      country: form.get('country'),
      phone: form.get('phone'),
    };

    const items = cartItems.map((item) => ({
      productId: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      size: item.size,
      image: item.images?.[0],
    }));

    const orderData = {
      items,
      shippingAddress,
      paymentMethod,
      subtotal,
      shippingFee: shipping,
      totalAmount: total,
    };

    try {
      const res = await fetch('https://fashion-backend-e6qs.onrender.com/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(`🎉 Order placed! Order ID: ${data.orderId || 'N/A'}`);
        clearCart();

        const updatedOrdersRes = await fetch(`https://fashion-backend-e6qs.onrender.com/api/orders?userId=${encodeURIComponent(user.email)}`);
        const updatedOrders = await updatedOrdersRes.json();
        if (updatedOrdersRes.ok) {
          setOrders(updatedOrders);
        }

        navigate('/orders');
      } else {
        toast.error(data.message || 'Failed to place order.');
      }
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="min-h-screen px-6 md:px-32 py-20 bg-gradient-to-b from-[#f9f7f3] to-white text-[#1c130b] font-sans"
    >
      <div className="grid md:grid-cols-3 gap-16">
        {/* Delivery Info */}
        <div className="md:col-span-2 bg-white p-10 rounded-3xl shadow-2xl border border-[#e0d6c3]">
          <h2 className="text-3xl font-bold mb-10 uppercase tracking-wider text-[#4b2f19] border-b pb-3 border-[#d3ab66]">
            Delivery <span className="text-[#d3ab66]">Information</span>
          </h2>

          <div className="grid grid-cols-2 gap-5 mb-4">
            <input name="firstName" type="text" placeholder="First Name" className="luxury-input" required />
            <input name="lastName" type="text" placeholder="Last Name" className="luxury-input" required />
          </div>
          <input name="email" type="email" placeholder="Email Address" className="luxury-input mb-4" required />
          <input name="street" type="text" placeholder="Street" className="luxury-input mb-4" required />
          <div className="grid grid-cols-2 gap-5 mb-4">
            <input name="city" type="text" placeholder="City" className="luxury-input" required />
            <input name="state" type="text" placeholder="State" className="luxury-input" required />
          </div>
          <div className="grid grid-cols-2 gap-5 mb-4">
            <input name="zipcode" type="text" placeholder="Zipcode" className="luxury-input" required />
            <input name="country" type="text" placeholder="Country" className="luxury-input" required />
          </div>
          <input name="phone" type="text" placeholder="Phone" className="luxury-input mb-4" required />
        </div>

        {/* Cart Summary + Payment */}
        <div className="bg-white border border-[#e0d6c3] p-8 rounded-3xl shadow-2xl">
          <h2 className="text-3xl font-bold mb-6 uppercase text-[#4b2f19] border-b pb-3 border-[#000000]">
            Cart <span className="text-[#000000]">Totals</span>
          </h2>

          <div className="text-sm mb-6 space-y-3">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-medium">Rs. {subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping Fee</span>
              <span className="text-green-600 font-medium">Rs. {shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold border-t pt-2 border-[#f0eae1]">
              <span>Total</span>
              <span className="text-black">Rs. {total.toFixed(2)}</span>
            </div>
          </div>

          <h3 className="text-sm font-semibold mb-3 uppercase border-b border-[#e5ddd0] pb-2">Payment Method</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {/* Stripe */}
            <label className="flex items-center gap-3 border border-[#e3d9c8] hover:border-[#d3ab66] px-4 py-3 rounded-lg shadow-sm cursor-pointer transition">
              <input
                type="radio"
                name="payment"
                value="stripe"
                checked={paymentMethod === 'stripe'}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="accent-[#d3ab66]"
              />
              <img src="https://www.vectorlogo.zone/logos/stripe/stripe-ar21.svg" alt="Stripe" className="h-5" />
            </label>

            {/* Razorpay */}
            <label className="flex items-center gap-3 border border-[#e3d9c8] hover:border-[#d3ab66] px-4 py-3 rounded-lg shadow-sm cursor-pointer transition">
              <input
                type="radio"
                name="payment"
                value="razorpay"
                checked={paymentMethod === 'razorpay'}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="accent-[#d3ab66]"
              />
              <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg" alt="Razorpay" className="h-5" />
            </label>

            {/* Cash on Delivery */}
            <label className="flex items-center gap-3 border border-[#e3d9c8] hover:border-[#d3ab66] px-4 py-3 rounded-lg shadow-sm cursor-pointer transition">
              <input
                type="radio"
                name="payment"
                value="cod"
                checked={paymentMethod === 'cod'}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="accent-[#d3ab66]"
              />
              <span className="text-green-700 font-semibold">Cash on Delivery</span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-[#1c130b] text-white py-3 rounded-full font-bold tracking-wide hover:bg-[#372213] transition"
          >
            Place Order
          </button>

          <p className="text-xs text-gray-400 mt-4 text-center">Secure & Encrypted SSL Checkout</p>

          <div className="mt-4 text-center">
            <Link to="/cart" className="text-sm text-[#d3ab66] hover:underline">
              ← Back to Cart
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
