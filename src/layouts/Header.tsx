import { FaHeart, FaBell, FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "14px 32px",
        background: "#ffffff",
        borderBottom: "1px solid #e5e7eb",
        boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
        <a
          href="/Browse"
          style={{
            fontSize: "30px",
            fontWeight: "700",
            color: "#111827",
            textDecoration: "none",
          }}
        >
          Uni<span style={{ color: "#3b82f6" }}>Trade</span>
        </a>

        <nav style={{ display: "flex", gap: "20px" }}>
          <a
            href="/Browse"
            style={{ color: "#374151", fontSize: "15px", textDecoration: "none" }}
          >
            Browse
          </a>
          <a
            href="/Dashboard"
            style={{ color: "#374151", fontSize: "15px", textDecoration: "none" }}
          >
            Dashboard
          </a>
          <a
            href="/Contact"
            style={{ color: "#374151", fontSize: "15px", textDecoration: "none" }}
          >
            Contact 
          </a>
        </nav>
      </div>

      <div style={{ flex: 1, maxWidth: "420px" }}>
        <input
          type="text"
          placeholder="Search products..."
          style={{
            width: "100%",
            padding: "10px 14px",
            borderRadius: "9999px",
            border: "1px solid #d1d5db",
            outline: "none",
            fontSize: "14px",
            transition: "all 0.2s",
          }}
          onFocus={(e) => (e.target.style.border = "1px solid #3b82f6")}
          onBlur={(e) => (e.target.style.border = "1px solid #d1d5db")}
        />
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
        <div style={{ position: "relative", cursor: "pointer" }}>
          <FaHeart size={20} color="#374151" />
        </div>

        <div style={{ position: "relative", cursor: "pointer" }}>
          <FaBell size={20} color="#374151" />
          <span
            style={{
              position: "absolute",
              top: "-6px",
              right: "-6px",
              background: "#ef4444",
              color: "#fff",
              fontSize: "11px",
              fontWeight: "600",
              padding: "2px 6px",
              borderRadius: "9999px",
            }}
          >
            3
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            background: "#eff6ff",
            padding: "6px 12px",
            borderRadius: "9999px",
            cursor: "pointer",
          }}
        >
          <FaUser size={20} color="#2563eb" />
          <span style={{ fontSize: "14px", color: "#374151" }}>Username</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
