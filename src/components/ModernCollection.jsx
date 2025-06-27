import { BsFire } from 'react-icons/bs';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ModernCollection = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-20 px-4 sm:px-8 md:px-20 font-serif text-center">
      {/* 🔥 Section Tag */}
      <div className="flex justify-center items-center gap-2 sm:gap-3 mb-4 text-red-600 text-sm sm:text-base font-semibold uppercase tracking-wider">
        <BsFire className="text-lg sm:text-xl" />
        <span>Modern Collection</span>
      </div>

      {/* 🖋️ Main Headline */}
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-black leading-snug sm:leading-tight mb-4 max-w-3xl mx-auto">
        Every click brings you <br className="hidden sm:block" /> closer to perfection.
      </h1>

      {/* 🛍️ CTA Button */}
      <Link
        to="/collection"
        className="mt-6 inline-flex items-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg border border-black px-5 sm:px-6 py-2 hover:bg-black hover:text-white transition font-outfit"
      >
        Shop Now <FaArrowRight className="text-sm mt-[2px]" />
      </Link>
    </section>
  );
};

export default ModernCollection;
