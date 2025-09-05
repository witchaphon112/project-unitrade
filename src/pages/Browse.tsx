import { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { listingsData } from "../mockdata/listings";
import { messagesData } from "../mockdata/messages";
import { Link } from "react-router-dom";



const Browse = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    setListings(listingsData);
    setMessages(messagesData); 
  }, []);

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.heroSection}>
        <h1 style={styles.heroTitle}>
          Trade with <br /> <span style={styles.heroTitleAccent}>Fellow Students</span>
        </h1>
        <p style={styles.heroSubtitle}>
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
      <div style={styles.statsContainer}>
        <StatBox label="ACTIVE LISTING" value={listings.length} />
        <StatBox label="STUDENTS" value="24" />
        <StatBox label="RATING" value="4.8" />
      </div>

      {/* Categories */}
      <h2 style={styles.sectionTitle}>Browse Categories</h2>
      <div style={styles.categoriesContainer}>
        {["All items", "Electronics", "Furniture", "Textbooks", "Sports"].map(
          (cat) => (
            <button key={cat} style={styles.categoryButton}>
              {cat}
            </button>
          )
        )}
      </div>

      {/* Latest Listings */}
  <div style={styles.latestHeader}>
    <div style={{ textAlign: "center" }}>
      <h2 style={styles.sectionTitle}>Latest Listings</h2>
      <p style={{ color: "#6b7280", marginBottom: "20px" }}>
        Recently posted by students
      </p>
    </div>
    <span style={{position: "absolute",right: 0,bottom: 0, color: "#9ca3af", fontSize: "14px",}}>
      {listings.length} items found
    </span>
  </div>

  <div style={styles.listingsGrid}>
  {listings.map((item) => (
    <div key={item.id} style={styles.listingCard}>
      <div style={{ position: "relative" }}>
        <img
  src={item.img}
  alt={item.title}
  style={{
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "20px 20px 0 0", 
    display: "block", 
    margin: 0,
    padding: 0 
  }}
/>
        <span
          style={{
            position: "absolute",
            top: "8px",
            left: "8px",
            background:
              item.category === "Electronic"
                ? "#a855f7"
                : item.category === "Furniture"
                ? "#f59e0b"
                : "#22c55e",
            color: "#fff",
            fontSize: "12px",
            padding: "4px 10px",
            borderRadius: "999px",
          }}
        >
          {item.category}
        </span>
      </div>

      {/* เนื้อหา */}
      <h3 style={styles.listingTitle}>{item.title}</h3>
      <p style={styles.listingDesc}>{item.desc}</p>

      <p style={styles.listingPrice}>
        {item.price.toLocaleString()} บาท
      </p>

      {/* footer */}
      <div style={styles.listingFooter}>
        <span>⏱ {item.time}</span>
        <span>📍 {item.distance}</span>
      </div>
      <div style={styles.listingUser}>👤 {item.user}</div>
    </div>
  ))}
  
</div>

      {/* Recent Messages */}
      <h2 style={styles.sectionTitle}>Recent Messages</h2>
      <p>Student looking for something</p>
      <div style={styles.messagesGrid}>
        {messages.map((msg) => (
          <div key={msg.id} style={styles.messageCard}>
            <h4 style={styles.messageTitle}>{msg.title}</h4>
            <p style={styles.messageDesc}>{msg.desc}</p>
            <span style={styles.messageCategory}>{msg.category}</span>
          </div>
        ))}
      </div>

      {/* Safe & Trusted Trading */}
      <h2 style={styles.sectionTitle}>Safe & Trusted Trading</h2>
      <div style={styles.featuresContainer}>
        <FeatureBox label="Verified Students" desc="All users are verified university students." />
        <FeatureBox label="Quick Responses" desc="Connect with sellers instantly on campus." />
        <FeatureBox label="Community Driven" desc="Built by students, for students." />
      </div>
    </div>
  );
};

/* Components */
const StatBox: React.FC<StatBoxProps> = ({ label, value }) => (
  <div style={styles.statBox}>
    <p style={styles.statValue}>{value}</p>
    <p style={styles.statLabel}>{label}</p>
  </div>
);

const FeatureBox: React.FC<FeatureBoxProps> = ({ label, desc }) => (
  <div style={styles.featureBox}>
    <p style={styles.featureLabel}>{label}</p>
    <p style={styles.featureDesc}>{desc}</p>
  </div>
);

/* Styles */
const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "32px 16px",
  },
  
  heroSection: {
    textAlign: "center" as const,
    marginBottom: "40px",
  },
  
  heroTitle: {
    fontSize: "36px",
    fontWeight: "700",
    color: "#1e3a8a",
    marginBottom: "12px",
  },
  
  heroTitleAccent: {
    color: "#2563eb",
  },
  
  heroSubtitle: {
    color: "#6b7280",
    marginTop: "12px",
  },
  
  statsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    marginBottom: "40px",
  },
  listingFooter: {
  display: "flex",
  justifyContent: "space-between",
  fontSize: "12px",
  color: "#6b7280",
  marginTop: "8px",
},

listingUser: {
  fontSize: "12px",
  color: "#6b7280",
  marginTop: "4px",
},
  statBox: {
    textAlign: "center" as const,
  },
  
  statValue: {
    fontSize: "22px",
    fontWeight: "700",
    color: "#111827",
  },
  
  statLabel: {
    fontSize: "14px",
    color: "#6b7280",
  },
  
  sectionTitle: {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "20px",
    textAlign: "center" as const,
  },

  latestHeader: {
  position: "relative",
  marginBottom: "20px",
},
  
  categoriesContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "16px",
    marginBottom: "40px",
  },
  
  categoryButton: {
    background: "#f9fafb",
    border: "1px solid #e5e7eb",
    borderRadius: "12px",
    padding: "12px 16px",
    cursor: "pointer",
  },
  
  listingsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
    gap: "20px",
    marginBottom: "40px",
  },
  
  listingCard: {
    border: "1px solid #e5e7eb",
    borderRadius: "20px",
    padding: "0px",
    background: "#fff",
    boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
  },
  
  listingTitle: {
    fontWeight: "600",
    marginBottom: "6px",
  },
  
  listingDesc: {
    color: "#6b7280",
    fontSize: "14px",
  },
  
  listingPrice: {
    fontWeight: "700",
    color: "#2563eb",
    marginTop: "6px",
  },
  
  listingActions: {
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  },
  
  iconButton: {
    background: "#f3f4f6",
    border: "none",
    padding: "6px 10px",
    borderRadius: "8px",
    cursor: "pointer",
  },
  
  messagesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "20px",
    marginBottom: "40px",
  },
  
  messageCard: {
    border: "1px solid #e5e7eb",
    borderRadius: "12px",
    padding: "16px",
    background: "#fff",
  },
  
  messageTitle: {
    fontWeight: "600",
    marginBottom: "6px",
  },
  
  messageDesc: {
    fontSize: "14px",
    color: "#6b7280",
  },
  
  messageCategory: {
    fontSize: "12px",
    color: "#2563eb",
  },
  
  featuresContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    marginBottom: "40px",
    flexWrap: "wrap" as const,
  },
  
  featureBox: {
    textAlign: "center" as const,
    maxWidth: "260px",
  },
  
  featureLabel: {
    fontSize: "18px",
    fontWeight: "700",
    color: "#111827",
    marginBottom: "8px",
  },
  
  featureDesc: {
    fontSize: "14px",
    color: "#6b7280",
  },
};

export default Browse;