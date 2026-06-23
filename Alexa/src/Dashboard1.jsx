import React from "react";
import axios from "axios";

export default function Dashboard1({
  task,
  setTask,
  goBack,
}) {
  const handleSave = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/add-reminder",
        task
      );

      if (res.data.success) {
        alert("Reminder Saved");
      }
    } catch (error) {
      console.log(error);
      alert("Error Saving Reminder");
    }
  };

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

 const handleDelete = () => {
  setTask({
    title: "",
    date: "",
    time: "",
    done: false,
    status: "Pending",
  });
};

  const handleWorking = () => {
    setTask({
      ...task,
      done: false,
      status: "Working",
    });
  };

  const handleDone = () => {
    setTask({
      ...task,
      done: true,
      status: "Done",
    });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "20px",
        background: "#f4f6f9",
      }}
    >
      <button
        onClick={goBack}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          padding: "10px 15px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Back
      </button>

      <h1>Reminder Details</h1>

      <div style={{ marginTop: "20px" }}>
        <label>Select Date</label>
        <br />

        <input
          type="date"
          value={task.date}
          onChange={(e) =>
            setTask({
              ...task,
              date: e.target.value,
            })
          }
          style={{
            padding: "10px",
            marginTop: "10px",
            width: "220px",
          }}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
  <label>Select Time</label>
  <br />

  <input
    type="time"
    value={task.time}
    onChange={(e) =>
      setTask({
        ...task,
        time: e.target.value,
      })
    }
    style={{
      padding: "10px",
      marginTop: "10px",
      width: "220px",
    }}
  />
</div>

      <div style={{ marginTop: "20px" }}>
        <label>Enter Reminder</label>
        <br />

        <input
          type="text"
          placeholder="Enter Reminder"
          value={task.title}
          onChange={(e) =>
            setTask({
              ...task,
              title: e.target.value,
              done: false,
              status: "Pending",
            })
          }
          style={{
            padding: "10px",
            marginTop: "10px",
            width: "300px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      <div
        style={{
          marginTop: "30px",
          padding: "20px",
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <h3
          style={{
            textDecoration:
              task.done ? "line-through" : "none",
          }}
        >
          {task.title || "No Reminder Available"}
        </h3>

        <p>
          <strong>Date:</strong>{" "}
          {task.date || "Not Selected"}
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
          onClick={handleSave}
          style={{
            backgroundColor: "#2568cd",
            color: "white",
            border: "none",
            padding: "10px 15px",
            borderRadius: "5px",
            marginRight: "10px",
            cursor: "pointer",
          }}
        >
          💾 Save
        </button>

        <button
          onClick={handleEdit}
          style={{
            backgroundColor: "orange",
            color: "white",
            border: "none",
            padding: "10px 15px",
            borderRadius: "5px",
            marginRight: "10px",
            cursor: "pointer",
          }}
        >
          ✏️ Edit
        </button>

        <button
          onClick={handleDelete}
          style={{
            backgroundColor: "red",
            color: "white",
            border: "none",
            padding: "10px 15px",
            borderRadius: "5px",
            marginRight: "10px",
            cursor: "pointer",
          }}
        >
          🗑️ Delete
        </button>

        <button
          onClick={handleWorking}
          style={{
            backgroundColor: "blue",
            color: "white",
            border: "none",
            padding: "10px 15px",
            borderRadius: "5px",
            marginRight: "10px",
            cursor: "pointer",
          }}
        >
          🔄 Working
        </button>

        <button
          onClick={handleDone}
          style={{
            backgroundColor: "green",
            color: "white",
            border: "none",
            padding: "10px 15px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          ✅ Done
        </button>
      </div>
    </div>
  );
}