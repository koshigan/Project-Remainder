import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";

function App() {
  const [page, setPage] = useState("login");

  return (
    <>
      {page === "login" && (
        <Login
          goToRegister={() => setPage("register")}
          goToDashboard={() => setPage("dashboard")}
        />
      )}

      {page === "register" && (
        <Register
          goToLogin={() => setPage("login")}
        />
      )}

      {page === "dashboard" && <Dashboard />}
    </>
  );
}

export default App;