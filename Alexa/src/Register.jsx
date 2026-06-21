import React from "react";

export default function Register({ goToLogin }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Registration Successful");
    goToLogin();
  };

  return (
    <div
      style={{
        backgroundColor: "#e6f0ff",
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
          Register
        </h2>

        <input
          type="text"
          placeholder="Username"
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#0066cc",
            color: "white",
            border: "none",
          }}
        >
          Register
        </button>

        <p style={{ textAlign: "center" }}>
          Already have an account?{" "}
          <span
            onClick={goToLogin}
            style={{
              color: "#0066cc",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
}