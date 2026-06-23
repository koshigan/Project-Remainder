import React, { useState } from "react";
import axios from "axios";

export default function Register({ goToLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/register",
        {
          email,
          password,
        }
      );

      if (res.data.success) {
        alert("Registration Successful");
        goToLogin();
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      alert("Server Error");
    }
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
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
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
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
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