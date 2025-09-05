const Footer = () => {
  return (
    <footer
      style={{
        background: "#f9fafb",
        padding: "32px 24px",
        borderTop: "1px solid #e5e7eb",
        marginTop: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gap: "24px",
        }}
      >
        <div>
          <h2
            style={{
              fontWeight: "700",
              fontSize: "20px",
              color: "#111827",
              marginBottom: "12px",
            }}
          >
            Uni<span style={{ color: "#3b82f6" }}>Trade</span>
          </h2>
          <p style={{ fontSize: "14px", color: "#6b7280", lineHeight: "1.6" }}>
            A modern marketplace for your trading needs.  
            Browse, buy, and sell with confidence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3
            style={{
              fontWeight: "600",
              fontSize: "16px",
              color: "#111827",
              marginBottom: "10px",
            }}
          >
            Quick Links
          </h3>
          <ul style={{ listStyle: "none", padding: 0, fontSize: "14px" }}>
            <li style={{ marginBottom: "8px" }}>
              <a href="/Browse" style={{ color: "#374151", textDecoration: "none" }}>Browse</a>
            </li>
            <li style={{ marginBottom: "8px" }}>
              <a href="/Dashboard" style={{ color: "#374151", textDecoration: "none" }}>Dashboard</a>
            </li>
            <li style={{ marginBottom: "8px" }}>
              <a href="/about" style={{ color: "#374151", textDecoration: "none" }}>About Us</a>
            </li>
            <li>
              <a href="/contact" style={{ color: "#374151", textDecoration: "none" }}>Contact</a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3
            style={{
              fontWeight: "600",
              fontSize: "16px",
              color: "#111827",
              marginBottom: "10px",
            }}
          >
            Support
          </h3>
          <ul style={{ listStyle: "none", padding: 0, fontSize: "14px" }}>
            <li style={{ marginBottom: "8px" }}>
              <a href="/faq" style={{ color: "#374151", textDecoration: "none" }}>FAQ</a>
            </li>
            <li style={{ marginBottom: "8px" }}>
              <a href="/help" style={{ color: "#374151", textDecoration: "none" }}>Help Center</a>
            </li>
            <li>
              <a href="/privacy" style={{ color: "#374151", textDecoration: "none" }}>Privacy Policy</a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3
            style={{
              fontWeight: "600",
              fontSize: "16px",
              color: "#111827",
              marginBottom: "10px",
            }}
          >
            Stay Updated
          </h3>
          <p style={{ fontSize: "14px", color: "#6b7280", marginBottom: "10px" }}>
            Subscribe to our newsletter for the latest deals and updates.
          </p>
          <div style={{ display: "flex", gap: "8px" }}>
            <input
              type="email"
              placeholder="Your email"
              style={{
                flex: 1,
                padding: "8px 12px",
                borderRadius: "8px",
                border: "1px solid #d1d5db",
                fontSize: "14px",
              }}
            />
            <button
              style={{
                background: "#3b82f6",
                color: "#fff",
                border: "none",
                padding: "8px 16px",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid #e5e7eb",
          marginTop: "24px",
          paddingTop: "16px",
          textAlign: "center",
          fontSize: "14px",
          color: "#6b7280",
        }}
      >
        © {new Date().getFullYear()} UniTrade. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
