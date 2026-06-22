import React from "react";

export default function Dashboard() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <h1 style={{ padding: "20px" }}>Dashboard</h1>

      <button
        style={{
          position: "fixed",
          right: "20px",
          bottom: "20px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          border: "none",
          backgroundColor: "#0066ff",
          color: "white",
          fontSize: "35px",
          cursor: "pointer",
        }}
      >
        +
      </button>
    </div>
  );
}