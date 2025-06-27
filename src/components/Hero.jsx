import bgImage from '../assets/imgbg.jpg';
import { Link } from 'react-router-dom';
import { BsFire } from 'react-icons/bs';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section
      className="relative w-full h-[75vh] sm:h-[85vh] md:h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark Gradient for Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/100 via-black/20 to-transparent"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center h-full px-4 sm:px-8 md:px-16">
        <div className="text-white space-y-4 sm:space-y-6 max-w-md sm:max-w-xl md:max-w-2xl">

          {/* 🔥 Section Tag */}
          <div className="flex items-center-top   gap-2 text-red-500 uppercase tracking-widest text-xs sm:text-sm md:text-base">
            <BsFire className="text-base sm:text-xl" />
            Modern Collection
          </div>

          {/* 🧠 Main Heading */}
          <h1 className="text-5xl sm:text-5xl md:text-6xl font-extrabold leading-snug sm:leading-tight drop-shadow-xl">
            Every click brings you<br className="hidden sm:block" />
            closer to perfection.
          </h1>

          {/* 🌟 Tagline */}
          <p className="text-md sm:text-base md:text-lg text-gray-200 drop-shadow-sm leading-relaxed font-outfit max-w-[90vw] sm:max-w-lg">
            Discover signature silhouettes and timeless designs — made for confidence, crafted for elegance.
          </p>

          {/* 🛍️ Call to Action */}
          <Link
            to="/collection"
            className="inline-flex items-center gap-2 border border-white px-5 py-2 sm:px-6 sm:py- text-md sm:text-base md:text-lg hover:bg-white hover:text-black transition duration-300 font-outfit"
          >
            Shop Now <FaArrowRight className="mt-[1px]" />
          </Link>

        </div>
      </div>
    </section>
  );
};

export default Hero;
