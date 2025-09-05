import React from 'react';

const Dashboard = () => {
  return (
    <div className="bg-white p-6">
      {/* Dashboard Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Your Dashboard</h1>
      </div>

      {/* Dashboard Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* My Listings Section */}
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">My Listings</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Calculus Textbook</span>
              <span className="text-sm text-gray-500">$120.00</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Physics Lab Equipment</span>
              <span className="text-sm text-gray-500">$79.00</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Organic Chemistry S</span>
              <span className="text-sm text-gray-500">$135.00</span>
            </div>
          </div>
        </div>

        {/* Favorites Section */}
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Favorites</h2>
          <p className="text-gray-500">No items added</p>
        </div>

        {/* Quick Stats Section */}
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Quick Stats</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Active Listings</span>
              <span className="font-medium">3</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Total Views</span>
              <span className="font-medium">54</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Favorites</span>
              <span className="font-medium">0</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Rating</span>
              <span className="font-medium">4.0</span>
            </div>
          </div>
        </div>
      </div>

      {/* All My Products Section */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-4">All My Products</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src="https://via.placeholder.com/150"
                alt="product"
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <h3 className="font-medium">MacBook Pro 13" (2020) - M1 Chip</h3>
                <p className="text-gray-500">Excellent condition, barely used. Perfect for coding and design work.</p>
              </div>
            </div>
            <div className="text-right">
              <span className="block text-lg font-medium">10,000 un</span>
              <span className="block text-sm text-gray-500">21m ago</span>
            </div>
          </div>

          {/* Repeat the same for other products */}
          <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src="https://via.placeholder.com/150"
                alt="product"
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <h3 className="font-medium">MacBook Pro 13" (2020) - M1 Chip</h3>
                <p className="text-gray-500">Excellent condition, barely used. Perfect for coding and design work.</p>
              </div>
            </div>
            <div className="text-right">
              <span className="block text-lg font-medium">10,000 un</span>
              <span className="block text-sm text-gray-500">21m ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
