import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        background: "#fff",
        borderBottom: "1px solid #eee",
        padding: "0.8rem 0",
        width: "100%",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ fontWeight: "bold", fontSize: "1.3rem" }}>Exclusive</div>
        <div style={{ display: "flex", gap: "2rem", fontSize: "1rem" }}>
          <Link href="/" legacyBehavior>
            <a style={{ color: "#222", textDecoration: "none" }}>Home</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a style={{ color: "#222", textDecoration: "none" }}>Contact</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a style={{ color: "#222", textDecoration: "none" }}>About</a>
          </Link>
          <Link href="/signupPage" legacyBehavior>
            <a style={{ color: "#DB4444", textDecoration: "none", fontWeight: "bold" }}>
              Sign Up
            </a>
          </Link>
        </div>

        <div style={{ marginLeft: "1rem" }}>
          <input
            type="text"
            placeholder="What are you looking for?"
            style={{
              padding: "0.5rem",
              borderRadius: "5px",
              border: "1px solid #ccc",
              width: "230px",
            }}
          />
        </div>
      </div>
    </nav>
  );
}
