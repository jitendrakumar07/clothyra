// src/context/ShopContext.jsx
import { createContext, useState, useEffect } from 'react';

// 1️⃣ Create the context
export const ShopContext = createContext();

// 2️⃣ Context Provider component
export const ShopProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState(null);

  // ✅ Clear cart function
  const clearCart = () => setCartItems([]);

  // 🧠 Load user from localStorage on app start
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        if (parsedUser && typeof parsedUser === 'object') {
          setUser(parsedUser);
        } else {
          throw new Error('Invalid user format');
        }
      }
    } catch (error) {
      console.error('Failed to parse user from localStorage:', error);
      localStorage.removeItem('user');
    }
  }, []);

  // 🌐 Fetch user orders when user logs in
  useEffect(() => {
    const fetchUserOrders = async () => {
      if (!user?.email) return;

      try {
        const res = await fetch(
          `https://fashion-backend-e6qs.onrender.com/api/orders?userId=${encodeURIComponent(user.email)}`
        );
        const data = await res.json();
        if (res.ok) {
          setOrders(data);
        } else {
          console.error('Order fetch failed:', data.message);
        }
      } catch (err) {
        console.error('Error fetching orders:', err);
      }
    };

    fetchUserOrders();
  }, [user]);

  // ✅ Add item to cart
  const addToCart = (product, size = null) => {
    const existingItem = cartItems.find(
      (item) => item.id === product.id && item.size === size
    );

    if (existingItem) {
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems((prev) => [...prev, { ...product, size, quantity: 1 }]);
    }
  };

  // ❌ Remove item from cart
  const removeFromCart = (productId, size = null) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.id === productId && item.size === size))
    );
  };

  // 🔁 Update quantity of item
  const updateQuantity = (productId, newQuantity, size = null) => {
    if (newQuantity < 1) return;

    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId && item.size === size
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  // 💰 Calculate total cart price
  const getTotalPrice = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // 🛍️ Get total cart item count
  const getCartCount = () =>
    cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <ShopContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        getTotalPrice,
        getCartCount,
        user,
        setUser,
        orders,
        setOrders,
        clearCart,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;
