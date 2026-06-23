import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import Dashboard1 from "./Dashboard1";

function App() {
  const [page, setPage] = useState("login");

  const [task, setTask] = useState({
    title: "",
    date: "",
    time: "",
    done: false,
    status: "Pending",
  });

  const goToDashboard1 = () => {
    setTask({
      title: "",
      date: "",
      time: "",
      done: false,
      status: "Pending",
    });

    setPage("dashboard1");
  };

  return (
    <>
      {page === "login" && (
        <Login
          goToRegister={() => setPage("register")}
          goToDashboard={() => setPage("dashboard")}
        />
      )}

      {page === "register" && (
        <Register goToLogin={() => setPage("login")} />
      )}

      {page === "dashboard" && (
        <Dashboard
          task={task}
          goToDashboard1={goToDashboard1}
        />
      )}

      {page === "dashboard1" && (
        <Dashboard1
          task={task}
          setTask={setTask}
          goBack={() => setPage("dashboard")}
        />
      )}
    </>
  );
}

export default App;