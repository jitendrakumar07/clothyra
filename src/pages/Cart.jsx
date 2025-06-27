import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';



const Cart = () => {
    const navigate = useNavigate(); // Inside Cart component
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useContext(ShopContext);
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);
  const [applied, setApplied] = useState(false);

  const handleApplyCoupon = () => {
    if (coupon.trim().toLowerCase() === 'luxury10') {
      setDiscount(10); // 10% discount
      setApplied(true);
    } else {
      setDiscount(0);
      setApplied(false);
      alert('Invalid coupon code');
    }
  };

  const subtotal = getTotalPrice();
  const discountAmount = (subtotal * discount) / 100;
  const total = subtotal - discountAmount;

  return (
   <section className="px-4 md:px-28 py-10 bg-gradient-to-b from-[#f9f7f3] to-white min-h-screen font-Prata text-[#1c130b]">

     <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 uppercase tracking-wide font-serif">
  Your <span className="text-[#D3AB66]">Shopping Cart</span>
</h1>

      {cartItems.length === 0 ? (
        <div className="text-center text-lg text-gray-600">
          Your cart is currently empty.{' '}
          <Link
            to="/collection"
            className="text-[#D3AB66] font-semibold underline hover:text-[#1c130b] transition"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-16">
          {/* 🛒 Cart Items */}
          <div className="md:col-span-2 space-y-10">
            {cartItems.map((item) => (
              <div
                key={`${item.id}-${item.size || 'default'}`}
                className="flex flex-col md:flex-row items-center gap-8 p-6 rounded-2xl border border-[#ece4d9] bg-white shadow-md hover:shadow-lg transition duration-300"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-32 h-32 object-cover rounded-xl border"
                />
                <div className="flex-1 space-y-2 w-full">
                  <h3 className="text-xl font-semibold flex justify-between items-center">
                    {item.name}
                    <button
                      className="text-sm text-[#D3AB66] border border-[#D3AB66] px-3 py-1 rounded-full hover:bg-[#D3AB66] hover:text-white transition"
                      title="Add to Wishlist"
                    >
                      ♥ Wishlist
                    </button>
                  </h3>
                  {item.size && (
                    <p className="text-sm text-gray-500">Size: <strong>{item.size}</strong></p>
                  )}
                  <div className="flex items-center gap-5 mt-4 flex-wrap">
                    <span className="text-lg font-bold text-[#4b2f19]">Rs. {item.price}</span>

                    {/* Quantity Controls */}
                    <div className="flex items-center border rounded-full overflow-hidden shadow-sm bg-[#faf9f7]">
                      <button
                        className="px-4 py-1 text-lg text-gray-700 hover:bg-[#f3f0ea] disabled:opacity-40"
                        onClick={() => updateQuantity(item.id, item.quantity - 1, item.size)}
                        disabled={item.quantity <= 1}
                      >
                        –
                      </button>
                      <span className="px-4 text-md">{item.quantity}</span>
                      <button
                        className="px-4 py-1 text-lg text-gray-700 hover:bg-[#f3f0ea]"
                        onClick={() => updateQuantity(item.id, item.quantity + 1, item.size)}
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id, item.size)}
                      className="ml-auto text-sm text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 📦 Order Summary */}
          <div className="bg-white border border-[#ece4d9] rounded-3xl p-8 shadow-xl sticky top-24 h-fit transition duration-300">
            <h2 className="text-2xl font-semibold mb-6 border-b pb-3 border-[#f0eae1]">
              Order Summary
            </h2>

            {/* 💳 Coupon Input */}
            <div className="mb-6">
              <label htmlFor="coupon" className="text-sm font-medium text-[#1c130b]">
                Enter Coupon Code
              </label>
              <div className="flex mt-2 gap-2">
                <input
                  type="text"
                  id="coupon"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  className="w-full border border-[#ddd5c7] rounded-full px-4 py-2 text-sm focus:outline-none"
                  placeholder="e.g., LUXURY10"
                />
                <button
                  onClick={handleApplyCoupon}
                  className="px-5 py-2 bg-[#D3AB66] text-white rounded-full font-semibold hover:bg-[#c29c4d] transition"
                >
                  Apply
                </button>
              </div>
              {applied && <p className="text-sm text-green-600 mt-1">Coupon applied successfully!</p>}
            </div>

            {/* 🧾 Pricing Breakdown */}
            <div className="text-sm text-gray-600 space-y-3 mb-6">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-[#1c130b] font-medium">Rs. {subtotal.toFixed(2)}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-green-700">
                  <span>Discount ({discount}%)</span>
                  <span>- Rs. {discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-green-600 font-medium">Free</span>
              </div>
            </div>

            <hr className="border-[#f0eae1] my-4" />

            <div className="flex justify-between text-lg font-bold text-[#1c130b] mb-8">
              <span>Total</span>
              <span>Rs. {total.toFixed(2)}</span>
            </div>

            <button
  onClick={() => navigate('/place-order')}
  className="w-full bg-[#1c130b] text-white py-3 rounded-full font-semibold tracking-wide hover:bg-[#372213] transition duration-300"
>
  Proceed to Checkout
</button>
            <p className="text-xs text-gray-400 mt-4 text-center">Safe & Secure Checkout</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
