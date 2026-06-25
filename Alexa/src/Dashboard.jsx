
export default function Dashboard({
  task,
  setTask,
  goToDashboard1,
}) {
  const handleEdit = () => {
    const newTitle = prompt(
      "Edit Reminder",
      task.title
    );

    if (newTitle !== null && newTitle !== "") {
      setTask({
        ...task,
        title: newTitle,
      });
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f6f9",
        padding: "20px",
      }}
    >
      
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <h1>Dashboard</h1>
        <h3>Welcome, Paul 👋</h3>
      </div>

      
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(200px,1fr))",
          gap: "20px",
        }}
      >
        <div style={cardStyle}>
          <h2>{task.title ? 1 : 0}</h2>
          <p>Total Reminders</p>
        </div>

        <div style={cardStyle}>
          <h2>{task.done ? 1 : 0}</h2>
          <p>Completed</p>
        </div>

        <div style={cardStyle}>
          <h2>
            {task.title && !task.done ? 1 : 0}
          </h2>
          <p>Pending</p>
        </div>
      </div>

      
      <div
        style={{
          marginTop: "30px",
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow:
            "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <h2>Reminder Details</h2>

        {task.title ? (
          <div>
            <h3
              style={{
                textDecoration: task.done
                  ? "line-through"
                  : "none",
              }}
            >
              {task.title}
            </h3>

            <p>
              <strong>Date:</strong>{" "}
              {task.date || "Not Selected"}
            </p>

            <p>
              <strong>Time:</strong>{" "}
              {task.time || "Not Selected"}
            </p>

            <p>
              <strong>Status:</strong>{" "}
              {task.status === "Working"
                ? "🔄 Working"
                : task.done
                ? "✅ Done"
                : "⏳ Pending"}
            </p>

            <button
              onClick={handleEdit}
              style={{
                backgroundColor: "orange",
                color: "white",
                border: "none",
                padding: "10px 15px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              ✏️ Edit
            </button>
          </div>
        ) : (
          <p>No Reminder Available</p>
        )}
      </div>

    
      <button
        onClick={goToDashboard1}
        style={{
          position: "fixed",
          right: "20px",
          bottom: "20px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          border: "none",
          backgroundColor: "#2568cd",
          color: "white",
          fontSize: "35px",
          cursor: "pointer",
          boxShadow:
            "0 4px 10px rgba(0,0,0,0.2)",
        }}
      >
        +
      </button>
    </div>
  );
}

const cardStyle = {
  background: "white",
  padding: "20px",
  borderRadius: "10px",
  textAlign: "center",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
};
