import React from "react";
export default function Header() {
  return (
    <header style={{
      background: "#222",
      color: "#fff",
      fontSize: "0.95rem",
      padding: "0.4rem 0"
    }}>
      <div style={{
        maxWidth: "1100px",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
      }}>
        <div style={{ flex: 1, textAlign: "center" }}>
          Summer Sale For All Swim Suits And Free Express Delivery – OFF 50%! 
          <a href="#" style={{ color: "#fff", textDecoration: "underline", marginLeft: "0.3rem", fontWeight: "bold"  }}><strong></strong>ShopNow</a>
        </div>
        <span style={{ marginLeft: "auto" }}>
          English <span style={{ fontSize: "0.8rem", marginLeft: "0.3rem" }}>▼</span>
        </span>
      </div>
    </header>
  );
}
