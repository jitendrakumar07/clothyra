import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import visa from '../assets/payments/visa.png';
import card from '../assets/payments/card.png';
import gpay from '../assets/payments/gpay.png';

const Footer = () => {
  return (
    <footer className="bg-[#fdfaf7] text-[#372213] px-4 sm:px-6 md:px-12 lg:px-20 pt-14 pb-8 font-outfit">
      {/* Top Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 border-b border-gray-300 pb-12">
        
        {/* Brand */}
        <div>
          <div className="group relative">
            <Link to="/" aria-label="Clothyra Home" className="flex items-center">
              <span className="relative inline-block overflow-hidden">
                <span className="text-4xl font-bold tracking-tight bg-clip-text text-transparent 
                  bg-gradient-to-r from-[#1c130b] via-[#D3AB66] to-[#1c130b] 
                  group-hover:from-[#D3AB66] group-hover:via-[#F4D03F] group-hover:to-[#D3AB66] 
                  transition-all duration-700 ease-out">
                  Clothyra
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                  opacity-0 group-hover:opacity-100 -rotate-3 translate-x-[-100%] group-hover:translate-x-[100%]
                  transition-all duration-1000"></span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#D3AB66] to-[#F4D03F] 
                  group-hover:w-full transition-all duration-700 ease-out"></span>
              </span>
            </Link>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed max-w-sm mt-2">
            From bodycon to elegance — premium fits, bold styles, and confidence stitched in every thread.
          </p>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-base sm:text-lg font-semibold text-[#1c130b] mb-3 sm:mb-4 uppercase tracking-wide">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-[#d3ab66] transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#d3ab66] transition">About Us</Link></li>
            <li><Link to="/delivery" className="hover:text-[#d3ab66] transition">Delivery Info</Link></li>
            <li><Link to="/privacy" className="hover:text-[#d3ab66] transition">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-base sm:text-lg font-semibold text-[#1c130b] mb-3 sm:mb-4 uppercase tracking-wide">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/faq" className="hover:text-[#d3ab66] transition">FAQs</Link></li>
            <li><Link to="/returns" className="hover:text-[#d3ab66] transition">Return Policy</Link></li>
            <li><Link to="/terms" className="hover:text-[#d3ab66] transition">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-base sm:text-lg font-semibold text-[#1c130b] mb-3 sm:mb-4 uppercase tracking-wide">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              <span className="font-semibold text-[#1c130b]">Phone:</span>{' '}
              <a href="tel:7780076976" className="hover:text-[#d3ab66] transition">7780076976</a>
            </li>
            <li>
              <span className="font-semibold text-[#1c130b]">Email:</span>{' '}
              <a href="mailto:jitendrakumar77800@gmail.com" className="hover:text-[#d3ab66] transition">
                jitendrakumar77800@gmail.com
              </a>
            </li>
            <li>
              <span className="font-semibold text-[#1c130b]">Address:</span><br />
              Laxmi Nagar, New Delhi - 110092
            </li>
          </ul>
        </div>

        {/* Social + Payment */}
        <div className="flex flex-col justify-between">
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-[#1c130b] mb-3 sm:mb-4 uppercase tracking-wide">Follow Us</h4>
            <div className="flex gap-4 text-xl sm:text-2xl text-[#d3ab66] flex-wrap">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:scale-110 transition"><FaInstagram /></a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:scale-110 transition"><FaFacebookF /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="hover:scale-110 transition"><FaTwitter /></a>
            </div>
          </div>

          <div className="mt-6 sm:mt-8">
            <h4 className="text-sm font-semibold mb-2 text-[#1c130b]">We Accept</h4>
            <div className="flex gap-3 items-center flex-wrap sm:flex-nowrap">
              <img src={visa} alt="Visa" className="w-10" loading="lazy" />
              <img src={card} alt="Card" className="w-10" loading="lazy" />
              <img src={gpay} alt="Google Pay" className="w-10" loading="lazy" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="mt-10 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600 gap-2 sm:gap-4 text-center sm:text-left">
        <p className="text-black">
          © 2025 <span className="font-semibold">Clothyra</span> – All Rights Reserved.
        </p>
        <p className="text-[#1c130b] font-medium">
          Elevate your look. Own your story.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
