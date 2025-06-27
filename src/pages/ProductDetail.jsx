import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useContext(ShopContext);

  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedSize, setSelectedSize] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://fashion-backend-e6qs.onrender.com/api/products/${id}`);

        const data = await res.json();
        setProduct(data);
        setSelectedImage(data.images?.[0] || data.image);
        setLoading(false);
      } catch (err) {
        console.error('Product fetch failed:', err);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size before adding to cart.');
      return;
    }

    addToCart(
      {
        id: product._id,
        name: product.name,
        image: selectedImage || product.image,
        price: product.price,
      },
      selectedSize
    );
  };

  if (loading) {
    return (
      <div className="p-20 text-center text-lg font-medium text-gray-600">
        Loading product details...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="p-20 text-center text-xl text-gray-600 font-serif">
        Product not found.
      </div>
    );
  }

  return (
    <section className="px-6 md:px-24 py-10 bg-white font-Prata text-[#1c130b]">
      {/* Heading */}
    <div className="text-left mb-10">
  <h1 className="text-4xl md:text-4xl font-extrabold uppercase">
    Explore <span className="text-[#D3AB66]">Details</span>
  </h1>
  <p className="mt-4 text-gray-600 text-base max-w-xl">
    Premium fashion crafted for your signature moments.
  </p>
</div>


      {/* Product Layout */}
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Images */}
        <div className="lg:w-1/2 flex gap-6">
          {/* Thumbnails */}
          <div className="flex flex-col gap-4 h-[500px] overflow-y-auto w-20">
            {(product.images || [product.image]).map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`thumb-${idx}`}
                className={`w-full h-20 object-cover rounded-md border cursor-pointer transition-all ${
                  selectedImage === img ? 'border-[#D3AB66]' : 'border-gray-300'
                } hover:border-black`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1">
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full h-[500px] object-cover rounded-2xl shadow-xl border border-[#ece4d9]"
            />
          </div>
        </div>

        {/* Info */}
        <div className="lg:w-1/2 space-y-7">
          <h2 className="text-3xl md:text-4xl font-bold">{product.name}</h2>

          {/* Rating */}
          <div className="flex items-center gap-1 text-yellow-400 text-lg">
            {'★★★★★'.split('').map((_, i) => (
              <span key={i}>★</span>
            ))}
            <span className="ml-2 text-sm text-gray-500">(122 reviews)</span>
          </div>

          {/* Price */}
          <div className="text-2xl font-semibold text-[#1c130b]">Rs. {product.price}</div>

          {/* Description */}
          <p className="text-gray-700 text-[15px] leading-relaxed">
            {product.description || 'No description available for this product.'}
          </p>

          {/* Size Selector */}
          <div>
            <h4 className="text-sm font-medium mb-2">Select Size</h4>
            <div className="flex flex-wrap gap-3">
              {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 rounded-full border text-sm transition-all duration-200 ${
                    selectedSize === size
                      ? 'bg-[#1c130b] text-white border-[#1c130b]'
                      : 'text-[#1c130b] border-gray-400 hover:bg-[#1c130b] hover:text-white'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            className="mt-6 bg-[#1c130b] text-white px-8 py-3 rounded-full uppercase font-semibold hover:bg-[#372213] transition-all"
          >
            Add to Cart
          </button>

          {/* Offers */}
          <ul className="mt-6 space-y-2 text-sm text-gray-600">
            <li>✅ 100% Original Product</li>
            <li>✅ Cash on Delivery Available</li>
            <li>✅ Easy 7-Day Return & Exchange</li>
          </ul>

          {/* Tabs */}
          <div className="pt-10">
            <div className="flex gap-10 border-b pb-2 font-semibold text-sm text-gray-800">
              <button className="border-b-2 border-[#D3AB66] pb-1">Description</button>
              <button className="hover:text-black">Reviews (122)</button>
            </div>
            <p className="mt-4 text-sm text-gray-700 leading-relaxed">
              {product.longDescription ||
                'Tailored with premium materials to deliver lasting comfort and timeless elegance.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
