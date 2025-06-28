import React, { useState } from 'react';
import { toast } from 'react-toastify';


const categories = ['Men', 'Women', 'Kids'];
const subCategories = ['Topwear', 'Bottomwear', 'Winterwear'];
const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

const AdminAddProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
    subCategory: '',
    sizes: [],
    popular: false,
    images: [null, null, null, null],
  });

  const handleTextChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSizeChange = (e) => {
    const value = e.target.value;
    const updatedSizes = formData.sizes.includes(value)
      ? formData.sizes.filter((size) => size !== value)
      : [...formData.sizes, value];
    setFormData({ ...formData, sizes: updatedSizes });
  };

  const handleImageChange = (index, file) => {
    const updatedImages = [...formData.images];
    updatedImages[index] = file;
    setFormData({ ...formData, images: updatedImages });
  };

  const removeImage = (index) => {
    const updatedImages = [...formData.images];
    updatedImages[index] = null;
    setFormData({ ...formData, images: updatedImages });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formPayload = new FormData();
    formPayload.append('name', formData.name);
    formPayload.append('price', formData.price);
    formPayload.append('description', formData.description);
    formPayload.append('category', formData.category);
    formPayload.append('subCategory', formData.subCategory);
    formPayload.append('popular', formData.popular);
    formData.sizes.forEach((size) => formPayload.append('sizes[]', size));
    formData.images.forEach((img) => {
      if (img) formPayload.append('images', img);
    });

    try {
      const res = await fetch('https://fashion-backend-e6qs.onrender.com/api/products', {
        method: 'POST',
        body: formPayload,
      });

      const data = await res.json();

      if (res.ok) {
        toast.success('✅ Product added successfully!');
        setFormData({
          name: '',
          price: '',
          description: '',
          category: '',
          subCategory: '',
          sizes: [],
          popular: false,
          images: [null, null, null, null],
        });
      } else {
        toast.error(data.message || '❌ Failed to add product');
      }
    } catch (err) {
      console.error('Add product error:', err);
      toast.error('❌ Server error. Please try again.');
    }
  };

  return (
    <section className="p-8 max-w-3xl mx-auto bg-[#fffdfa] font-Prata min-h-screen">
      <h2 className="text-3xl font-bold text-[#1c130b] mb-6 text-center">
        Add <span className="text-[#D3AB66]">New Product</span>
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-5 bg-white p-8 rounded-xl shadow-md border border-[#ece4d9]"
        encType="multipart/form-data"
      >
        {/* Product Name */}
        <div>
          <label className="block text-sm font-medium mb-1">Product Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleTextChange}
            className="w-full border px-4 py-2 rounded-md border-[#d6cfc1]"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium mb-1">Price (₹)</label>
          <input
            type="number"
            name="price"
            required
            value={formData.price}
            onChange={handleTextChange}
            className="w-full border px-4 py-2 rounded-md border-[#d6cfc1]"
          />
        </div>

        {/* Category Dropdown */}
        <div>
          <label className="block text-sm font-medium mb-1">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleTextChange}
            className="w-full border px-4 py-2 rounded-md border-[#d6cfc1]"
          >
            <option value="">-- Select Category --</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Sub Category Dropdown */}
        <div>
          <label className="block text-sm font-medium mb-1">Subcategory</label>
          <select
            name="subCategory"
            value={formData.subCategory}
            onChange={handleTextChange}
            className="w-full border px-4 py-2 rounded-md border-[#d6cfc1]"
          >
            <option value="">-- Select Subcategory --</option>
            {subCategories.map((sub) => (
              <option key={sub} value={sub}>
                {sub}
              </option>
            ))}
          </select>
        </div>

        {/* Size Checkboxes */}
        <div>
          <label className="block text-sm font-medium mb-1">Available Sizes</label>
          <div className="flex gap-4 flex-wrap">
            {sizes.map((size) => (
              <label key={size} className="flex items-center gap-1 text-sm">
                <input
                  type="checkbox"
                  value={size}
                  checked={formData.sizes.includes(size)}
                  onChange={handleSizeChange}
                />
                {size}
              </label>
            ))}
          </div>
        </div>

        {/* Popular Checkbox */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="popular"
            checked={formData.popular}
            onChange={handleTextChange}
          />
          <label className="text-sm font-medium">Mark as Popular</label>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            name="description"
            required
            rows="4"
            value={formData.description}
            onChange={handleTextChange}
            className="w-full border px-4 py-2 rounded-md border-[#d6cfc1]"
          ></textarea>
        </div>

        {/* Image Uploads with Previews */}
        <div>
          <label className="block text-sm font-medium mb-2">Upload 4 Images</label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {formData.images.map((img, index) => (
              <div key={index} className="relative group">
                {img ? (
                  <>
                    <img
                      src={URL.createObjectURL(img)}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-32 object-cover rounded-md border border-[#d6cfc1]"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-1 right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center hover:bg-red-700"
                      title="Remove"
                    >
                      ✕
                    </button>
                  </>
                ) : (
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageChange(index, e.target.files[0])}
                    className="w-full border px-4 py-10 text-center text-sm rounded-md border-[#d6cfc1] cursor-pointer"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#1c130b] text-white py-3 rounded-full font-semibold hover:bg-[#372213] transition"
        >
          Add Product
        </button>
      </form>
    </section>
  );
};

export default AdminAddProduct;
