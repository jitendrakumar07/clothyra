import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaFilter } from 'react-icons/fa';

const Collection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState('All');
  const [priceRange, setPriceRange] = useState('All');
  const [sortOption, setSortOption] = useState('Relevant');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://fashion-backend-e6qs.onrender.com/api/products');
        const data = await res.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (err) {
        console.error('Error fetching products:', err);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    let filtered = [...products];

    if (searchQuery.trim()) {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (category !== 'All') {
      filtered = filtered.filter((p) => p.category === category);
    }

    if (priceRange !== 'All') {
      filtered = filtered.filter((p) => {
        const price = p.price;
        if (priceRange === 'Under 1000') return price < 1000;
        if (priceRange === '1000-3000') return price >= 1000 && price <= 3000;
        if (priceRange === 'Above 3000') return price > 3000;
        return true;
      });
    }

    if (sortOption === 'Price: Low to High') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'Price: High to Low') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'Newest') {
      filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    setFilteredProducts(filtered);
  }, [searchQuery, category, priceRange, sortOption, products]);

  return (
    <section className="bg-[#fffdfa] min-h-screen px-4 sm:px-6 md:px-12 lg:px-24 py-10 text-[#1c130b]">
      {/* Filters Toggle Button for Mobile */}
      <div className="lg:hidden flex justify-end mb-4">
        <button
          onClick={() => setShowMobileFilters(!showMobileFilters)}
          className="flex items-center gap-2 text-sm font-semibold border border-[#d3ab66] px-4 py-2 rounded-md"
        >
          <FaFilter />
          Filters
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Sidebar Filters */}
        <aside
          className={`${
            showMobileFilters ? 'block' : 'hidden'
          } lg:block w-full lg:w-72 space-y-6 bg-white p-5 rounded-xl border border-[#e7dbc7] shadow-sm sticky top-24 h-fit z-20`}
        >
          <h2 className="text-xl font-extrabold uppercase border-b pb-2 border-[#d3ab66]">Filters</h2>

          {/* Search */}
          <div>
            <h3 className="font-semibold mb-2">Search</h3>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search luxury wear..."
              className="w-full border border-gray-300 px-4 py-2 rounded-full mb-3 focus:outline-none focus:ring-2 focus:ring-[#d3ab66]"
            />
            <button
              onClick={() => setSearchQuery('')}
              className="w-full bg-[#1c130b] text-white py-2 rounded-full hover:bg-[#372213] text-sm font-semibold transition"
            >
              Clear Search
            </button>
          </div>

          {/* Category */}
          <div>
            <h3 className="font-semibold mb-2">Category</h3>
            {['All', 'Men', 'Women', 'Kids'].map((cat) => (
              <label key={cat} className="block mb-2">
                <input
                  type="radio"
                  name="category"
                  value={cat}
                  checked={category === cat}
                  onChange={() => setCategory(cat)}
                  className="mr-2 accent-[#d3ab66]"
                />
                {cat}
              </label>
            ))}
          </div>

          {/* Price Range */}
          <div>
            <h3 className="font-semibold mb-2">Price</h3>
            {['All', 'Under 1000', '1000-3000', 'Above 3000'].map((range) => (
              <label key={range} className="block mb-2">
                <input
                  type="radio"
                  name="price"
                  value={range}
                  checked={priceRange === range}
                  onChange={() => setPriceRange(range)}
                  className="mr-2 accent-[#d3ab66]"
                />
                {range}
              </label>
            ))}
          </div>
        </aside>

        {/* Products Section */}
        <div className="flex-1">
          <div className="flex flex-col-2 md:flex-row justify-between items-center mb-10 gap-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wide">
              All <span className="text-[#d3ab66]">Collections</span>
            </h2>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="border border-[#ddd] px-4 py-2 rounded-md text-sm focus:outline-none focus:ring-[#d3ab66]"
            >
              <option>Relevant</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div
                  key={product._id}
                  className="bg-white p-3 rounded-2xl border border-[#ece4d9] hover:shadow-xl transition duration-300 group"
                >
                  <Link to={`/product/${product._id}`}>
                    <img
                      src={product.images?.[0]}
                      alt={product.name}
                      className="w-full h-[240px] sm:h-[260px] object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                    />
                  </Link>
                  <h3 className="text-[14px] md:text-[16px] font-medium text-left px-1 mt-2 truncate">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between text-sm font-medium px-1 mt-1">
                    <span className="text-lg font-semibold text-black">₹{product.price}</span>
                    <Link
                      to={`/product/${product._id}`}
                      className="hover:underline text-[#d3ab66] font-medium hover:text-[#1c130b] transition"
                    >
                      View
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center col-span-full">No products found.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
