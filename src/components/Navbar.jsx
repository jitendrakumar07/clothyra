import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingBag, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems, user, setUser } = useContext(ShopContext);

  // 🛒 Cart items count
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  // 🧠 Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) setUser(JSON.parse(storedUser));
  }, [setUser]);

  // 🚪 Logout handler
  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setIsMenuOpen(false);
  };

  // 🔗 Nav Links
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Collection', path: '/collection' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-black shadow-sm font-sans">
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 text-[#1c130b]">
        
        {/* Logo */}
      {/* Logo */}
      <div className="group relative">
  <Link 
    to="/" 
    className="flex items-center"
  >
    <span className="relative inline-block">
      {/* Main Logo Text */}
      <span className="text-4xl font-bold tracking-tight bg-clip-text text-transparent 
        bg-gradient-to-r from-[#1c130b] via-[#D3AB66] to-[#1c130b] 
        group-hover:from-[#D3AB66] group-hover:via-[#F4D03F] group-hover:to-[#D3AB66] 
        transition-all duration-700 ease-out">
        Clothyra
      </span>
      
      {/* Shimmer Effect */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
        opacity-0 group-hover:opacity-100 -rotate-3 translate-x-[-100%] group-hover:translate-x-[100%]
        transition-all duration-1000"></span>
      
      {/* Animated Underline */}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#D3AB66] to-[#F4D03F] 
        group-hover:w-full transition-all duration-700 ease-out"></span>
    </span>
    
    
  </Link>
</div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-base">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.path} className="hover:text-[#D3AB66] transition-all duration-200">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-5 text-xl relative">
          <FaSearch className="cursor-pointer hover:text-[#D3AB66] transition" />

          {/* Cart */}
          <div className="relative">
            <Link to="/cart">
              <FaShoppingBag className="cursor-pointer hover:text-[#D3AB66] transition" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 text-xs font-semibold text-[#1c130b]">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* User Dropdown */}
          <div className="hidden md:block relative group">
            <FaUser className="cursor-pointer hover:text-[#D3AB66] transition" />
            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-md opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transform origin-top-right transition-all duration-300 z-50">
              {!user ? (
                <Link
                  to="/login"
                  className="block px-4 py-2 text-sm hover:bg-[#f5f2ee] transition"
                >
                  Login
                </Link>
              ) : (
                <>
                  <Link
                    to="/orders"
                    className="block px-4 py-2 text-sm hover:bg-[#f5f2ee] transition"
                  >
                    My Orders
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-[#f5f2ee] transition"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setIsMenuOpen(true)} className="md:hidden">
            <FaBars className="text-2xl" />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[70%] bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden shadow-lg`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
          <span className="text-xl font-bold text-[#1c130b]">Clothyra</span>
          <button onClick={() => setIsMenuOpen(false)}>
            <FaTimes className="text-2xl text-[#1c130b]" />
          </button>
        </div>

        <div className="px-6 py-6 space-y-4 text-base text-[#1c130b]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className="block font-medium hover:text-[#D3AB66] transition"
            >
              {link.name}
            </Link>
          ))}

          {!user ? (
            <Link
              to="/login"
              onClick={() => setIsMenuOpen(false)}
              className="block font-medium hover:text-[#D3AB66] transition"
            >
              Login
            </Link>
          ) : (
            <>
              <Link
                to="/orders"
                onClick={() => setIsMenuOpen(false)}
                className="block font-medium hover:text-[#D3AB66] transition"
              >
                My Orders
              </Link>
              <button
                onClick={handleLogout}
                className="block w-full text-left font-medium hover:text-[#D3AB66] transition"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed top-0 left-0 w-full h-full bg-black/30 z-40 md:hidden"
        ></div>
      )}
    </header>
  );
};

export default Navbar;
