import { useState } from "react";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="p-6 font-sans">
      <h1 className="text-2xl font-bold mb-4">🎓 Student App</h1>

      {/* Navigation */}
      <nav className="space-x-4 mb-6">
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("profile")}>Profile</button>
        <button onClick={() => setPage("courses")}>Courses</button>
        <button onClick={() => setPage("assignments")}>Assignments</button>
      </nav>

      {/* Pages */}
      {page === "home" && <Home />}
      {page === "profile" && <Profile />}
      {page === "courses" && <Courses />}
      {page === "assignments" && <Assignments />}
    </div>
  );
}

function Home() {
  return <p>Welcome to the Student App! 📚</p>;
}

function Profile() {
  return (
    <div>
      <h2 className="text-xl font-semibold">My Profile</h2>
      <p>Name: John Doe</p>
      <p>Roll No: 12345</p>
      <p>Class: 10th Grade</p>
    </div>
  );
}

function Courses() {
  const courses = ["Math", "Science", "History"];
  return (
    <div>
      <h2 className="text-xl font-semibold">My Courses</h2>
      <ul>
        {courses.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </div>
  );
}

function Assignments() {
  const [tasks, setTasks] = useState(["Math Homework", "Science Project"]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask) {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold">Assignments</h2>
      <ul>
        {tasks.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
      <input
        className="border p-1 mr-2"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="New Assignment"
      />
      <button onClick={addTask}>Add</button>
    </div>
  );
}
