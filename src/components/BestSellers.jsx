import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BestSellers = () => {
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    const fetchBestSellers = async () => {
      try {
        const res = await fetch('https://fashion-backend-e6qs.onrender.com/api/products');
        const data = await res.json();

        const popularProducts = data.filter((product) => product.popular === true);
        setBestSellers(popularProducts.slice(0, 5));
      } catch (error) {
        console.error('Failed to load best sellers:', error);
      }
    };

    fetchBestSellers();
  }, []);

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-8 md:px-16 lg:px-24 bg-[#fdfaf7] font-outfit not-italic">
      {/* Section Title */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-prata text-[#1c130b] uppercase tracking-wide relative inline-block">
          <span className="before:absolute before:w-10 sm:before:w-14 before:h-0.5 before:bg-[#d3ab66] before:-left-12 sm:before:-left-16 before:top-1/2 after:absolute after:w-10 sm:after:w-14 after:h-0.5 after:bg-[#d3ab66] after:-right-12 sm:after:-right-16 after:top-1/2">
            Best <span className="text-[#d3ab66]">Sellers</span>
          </span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-4 sm:mt-6 max-w-2xl mx-auto font-outfit">
          These pieces are flying off the shelves — get yours before they’re gone!
        </p>
      </div>

      {/* Product Grid */}
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-10">
        {bestSellers.map((product) => (
          <div
            key={product._id}
            className="w-[180px] sm:w-[200px] md:w-[220px] bg-white rounded-xl shadow-md group transition-transform hover:-translate-y-1.5 duration-300 border border-transparent hover:border-[#d3ab66]"
          >
           <Link to={`/product/${product._id}`}>
  <div className="w-full h-[240px] sm:h-[260px] md:h-[280px] overflow-hidden rounded-t-xl">
    <img
      src={product.images?.[0] || '/placeholder.jpg'}
      alt={product.name}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
    />
  </div>
</Link>


            <div className="px-3 py-2 space-y-1">
              <h3 className="text-[13px] sm:text-sm md:text-base font-medium text-[#1c130b] truncate">
                {product.name}
              </h3>

              <div className="flex items-center justify-between text-xs sm:text-sm text-[#4b2f19]">
                <span className="font-semibold">₹{product.price}</span>
                <Link
                  to={`/product/${product._id}`}
                  className="text-[#d3ab66] hover:underline underline-offset-4"
                >
                  View
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
