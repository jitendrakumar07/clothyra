import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LatestCollections = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchLatestProducts = async () => {
      try {
        const res = await fetch('https://fashion-backend-e6qs.onrender.com/api/products');
        const data = await res.json();

        const sorted = data
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 8);

        setProducts(sorted);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchLatestProducts();
  }, []);

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-8 md:px-16 lg:px-24 bg-[#fdfaf7] font-outfit not-italic">
      {/* Title */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-prata text-[#1c130b] tracking-wide uppercase relative inline-block">
          <span className="before:absolute before:w-10 sm:before:w-14 before:h-0.5 before:bg-[#d3ab66] before:-left-12 sm:before:-left-16 before:top-1/2 after:absolute after:w-10 sm:after:w-14 after:h-0.5 after:bg-[#d3ab66] after:-right-12 sm:after:-right-16 after:top-1/2">
            Latest <span className="text-[#d3ab66]">Collections</span>
          </span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-4 sm:mt-6 max-w-2xl mx-auto font-outfit">
          Explore our finest and most elegant styles curated just for you — a blend of royalty, comfort, and trend.
        </p>
      </div>

      {/* Products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-10 justify-center">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-xl shadow-md group transition-transform hover:-translate-y-1.5 duration-300 border border-transparent hover:border-[#d3ab66]"
          >
          <div className="w-full h-[240px] sm:h-[260px] md:h-[280px] overflow-hidden rounded-t-xl">
            <Link to={`/product/${product._id}`}>
              <img
                src={product.images?.[0]}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            </div>

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

export default LatestCollections;
