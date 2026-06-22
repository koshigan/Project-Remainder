import React, { useState } from "react";

export default function Login({ goToRegister, goToDashboard }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Login Successful");
    goToDashboard();
  };

  return (
    <div
      style={{
        backgroundColor: "#b7cef0",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "10px",
          width: "300px",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#0066cc" }}>
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        />

        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? "Hide" : "Show"}
        </button>

        <button
          type="submit"
          style={{
            width: "100%",
            marginTop: "10px",
            padding: "10px",
            backgroundColor: "#0066cc",
            color: "white",
            border: "none",
          }}
        >
          Login
        </button>

        <p style={{ textAlign: "center" }}>
          Don't have an account?{" "}
          <span
            onClick={goToRegister}
            style={{
              color: "#0066cc",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Register
          </span>
        </p>
      </form>
    </div>
  );
}