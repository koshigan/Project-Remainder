import { useEffect, useState } from "react";
import axios from "axios";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import Dashboard1 from "./Dashboard1";

const API_BASE = "http://localhost:5000";
const EMPTY_TASK = {
  title: "",
  date: "",
  time: "",
  done: false,
  status: "Pending",
};

function App() {
  const [page, setPage] = useState("login");
  const [userEmail, setUserEmail] = useState("");
  const [task, setTask] = useState(EMPTY_TASK);

  useEffect(() => {
    if (!userEmail) {
      return;
    }

    const loadReminders = async () => {
      try {
        const res = await axios.get(
          `${API_BASE}/reminders/${encodeURIComponent(userEmail)}`
        );

        if (res.data.length > 0) {
          setTask(res.data[0]);
        } else {
          setTask(EMPTY_TASK);
        }
      } catch (error) {
        console.log(error);
      }
    };

    loadReminders();
  }, [userEmail]);

  const goToDashboard = (email) => {
    setUserEmail(email);
    setPage("dashboard");
  };

  const goToDashboard1 = () => {
    setTask(EMPTY_TASK);
    setPage("dashboard1");
  };

  return (
    <>
      {page === "login" && (
        <Login
          goToRegister={() => setPage("register")}
          goToDashboard={goToDashboard}
        />
      )}

      {page === "register" && (
        <Register goToLogin={() => setPage("login")} />
      )}

      {page === "dashboard" && (
        <Dashboard
          task={task}
          setTask={setTask}
          goToDashboard1={goToDashboard1}
        />
      )}

      {page === "dashboard1" && (
        <Dashboard1
          task={task}
          setTask={setTask}
          userEmail={userEmail}
          goBack={() => setPage("dashboard")}
        />
      )}
    </>
  );
}

export default App;
