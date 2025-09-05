import { useState } from "react";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
 
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Search Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-blue-900 mb-4">
          Start Looking for Things
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Find the best deals on textbooks, electronics, furniture, and more!
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          className="border border-gray-300 rounded-full py-2 px-6 w-3/4 lg:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search for items..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white py-2 px-6 rounded-full font-semibold hover:bg-blue-700 ml-4"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {/* Categories */}
      <div className="text-center mb-10">
        <h2 className="text-2xl font-semibold mb-6">Browse Categories</h2>
        <div className="flex justify-center gap-6">
          <button className="bg-gray-100 border border-gray-300 rounded-xl py-3 px-6 text-sm text-gray-700 cursor-pointer">
            All items
          </button>
          <button className="bg-gray-100 border border-gray-300 rounded-xl py-3 px-6 text-sm text-gray-700 cursor-pointer">
            Electronics
          </button>
          <button className="bg-gray-100 border border-gray-300 rounded-xl py-3 px-6 text-sm text-gray-700 cursor-pointer">
            Furniture
          </button>
          <button className="bg-gray-100 border border-gray-300 rounded-xl py-3 px-6 text-sm text-gray-700 cursor-pointer">
            Textbooks
          </button>
          <button className="bg-gray-100 border border-gray-300 rounded-xl py-3 px-6 text-sm text-gray-700 cursor-pointer">
            Sports
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
