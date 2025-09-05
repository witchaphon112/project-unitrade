import { useState } from "react";

const ProductCreate = () => {
  const [productTitle, setProductTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [condition, setCondition] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to API)
    alert("Product posted!");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Post New Item</h2>
      <form onSubmit={handleSubmit}>
        {/* Product Images */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Product Images</label>
          <div className="border-2 border-gray-300 p-6 rounded-lg text-center">
            <input
              type="file"
              accept="image/png, image/jpeg, image/gif"
              onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
              className="hidden"
              id="file-upload"
            />
            <label htmlFor="file-upload" className="cursor-pointer text-blue-600">
              Click to upload or drag and drop
            </label>
            <p className="text-sm text-gray-500">PNG, JPG, GIF up to 10MB</p>
          </div>
        </div>

        {/* Product Title */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Product Title</label>
          <input
            type="text"
            value={productTitle}
            onChange={(e) => setProductTitle(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="Enter product title"
            required
          />
        </div>

        {/* Price */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Price ($)</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="Enter price"
            required
          />
        </div>

        {/* Category */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          >
            <option value="">Select a Category</option>
            <option value="electronics">Electronics</option>
            <option value="furniture">Furniture</option>
            <option value="textbooks">Textbooks</option>
            <option value="sports">Sports</option>
          </select>
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            rows={4}
            placeholder="Enter product description"
            required
          />
        </div>

        {/* Condition */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Condition</label>
          <select
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          >
            <option value="">Select Condition</option>
            <option value="new">New</option>
            <option value="used">Used</option>
          </select>
        </div>

        {/* Location */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="Enter location"
            required
          />
        </div>

        <div className="flex justify-center gap-4">
          <button
            type="button"
            onClick={() => alert("Form Cancelled")}
            className="bg-gray-300 text-gray-700 py-2 px-6 rounded-full font-semibold"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-6 rounded-full font-semibold hover:bg-blue-700"
          >
            Post Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductCreate;
