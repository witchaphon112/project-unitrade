import { FaEdit, FaTrash, FaLaptop, FaCouch, FaBook, FaFootballBall } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Define types for Listing and Message
interface Listing {
  id: number;
  title: string;
  img: string;
  desc: string;
  price: number;
}

interface Message {
  id: number;
  title: string;
  desc: string;
  category: string;
}

// Define prop types for StatBox and FeatureBox
interface StatBoxProps {
  label: string;
  value: string | number;
}

interface FeatureBoxProps {
  label: string;
  desc: string;
}

const Browse = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    setListings([
      { id: 1, title: "Laptop", img: "laptop.jpg", desc: "A used laptop", price: 5000 },
      { id: 2, title: "Sofa", img: "sofa.jpg", desc: "A comfortable sofa", price: 3000 },
    ]);
    setMessages([
      { id: 1, title: "Message 1", desc: "This is a test message", category: "General" },
      { id: 2, title: "Message 2", desc: "Another test message", category: "Inquiry" },
    ]);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-blue-900 mb-4">
          Trade with <br /> <span className="text-blue-600">Fellow Students</span>
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          A simple, trusted marketplace for university students to buy and sell
          textbooks, electronics, and more.
        </p>
        <div className="flex justify-center gap-6 mb-12">
      <button className="bg-blue-600 text-white py-2 px-6 rounded-full font-semibold hover:bg-blue-700">
  <Link to="/ProductCreate">+ Sell something</Link>
</button>
          <button className="bg-gray-200 text-blue-600 py-2 px-6 rounded-full font-semibold hover:bg-gray-300">
             <Link to="/Search">+ Start looking for things</Link>
            
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="flex justify-center gap-10 mb-12">
        <StatBox label="ACTIVE LISTING" value={listings.length} />
        <StatBox label="STUDENTS" value="24" />
        <StatBox label="RATING" value="4.8" />
      </div>

      {/* Categories */}
      <h2 className="text-2xl font-semibold mb-6 text-center">Browse Categories</h2>
      <div className="flex justify-center gap-6 mb-12">
        {[
          { name: "All items", icon: <FaLaptop /> },
          { name: "Electronics", icon: <FaLaptop /> },
          { name: "Furniture", icon: <FaCouch /> },
          { name: "Textbooks", icon: <FaBook /> },
          { name: "Sports", icon: <FaFootballBall /> },
        ].map((cat) => (
          <button
            key={cat.name}
            className="bg-gray-100 border border-gray-300 rounded-xl py-3 px-6 text-sm text-gray-700 cursor-pointer flex items-center gap-3"
          >
            {cat.icon}
            {cat.name}
          </button>
        ))}
      </div>

      {/* Latest Listings */}
      <h2 className="text-2xl font-semibold mb-6 text-center">Latest Listings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-12">
        {listings.map((item) => (
          <div
            key={item.id}
            className="border border-gray-300 rounded-xl p-6 bg-white shadow-lg hover:shadow-xl"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-cover rounded-lg mb-6"
            />
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{item.desc}</p>
            <p className="font-semibold text-blue-600 mb-4">
              {item.price.toLocaleString()} บาท
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-100 rounded-md p-2">
                <FaEdit />
              </button>
              <button className="bg-red-100 rounded-md p-2">
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Messages */}
      <h2 className="text-2xl font-semibold mb-6 text-center">Recent Messages</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className="border border-gray-300 rounded-xl p-6 bg-white shadow-sm"
          >
            <h4 className="font-semibold text-lg mb-2">{msg.title}</h4>
            <p className="text-sm text-gray-600 mb-2">{msg.desc}</p>
            <span className="text-sm text-blue-600">{msg.category}</span>
          </div>
        ))}
      </div>

      {/* Safe & Trusted Trading */}
      <h2 className="text-2xl font-semibold mb-6 text-center">Safe & Trusted Trading</h2>
      <div className="flex justify-center gap-10 flex-wrap mb-12">
        <FeatureBox label="Verified Students" desc="All users are verified university students." />
        <FeatureBox label="Quick Responses" desc="Connect with sellers instantly on campus." />
        <FeatureBox label="Community Driven" desc="Built by students, for students." />
      </div>
    </div>
  );
};

// Components
const StatBox: React.FC<StatBoxProps> = ({ label, value }) => (
  <div className="text-center">
    <p className="text-3xl font-semibold text-gray-900">{value}</p>
    <p className="text-sm text-gray-600">{label}</p>
  </div>
);

const FeatureBox: React.FC<FeatureBoxProps> = ({ label, desc }) => (
  <div className="text-center max-w-xs">
    <p className="text-xl font-semibold text-gray-900 mb-2">{label}</p>
    <p className="text-sm text-gray-600">{desc}</p>
  </div>
);

export default Browse;
