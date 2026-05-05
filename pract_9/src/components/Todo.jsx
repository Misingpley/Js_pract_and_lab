import { useState } from "react";

export default function Todo() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTask = () => {
    if (!text.trim()) return;

    setTasks([
      ...tasks,
      { id: Date.now(), text, done: false }
    ]);

    setText("");
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t =>
      t.id === id ? { ...t, done: !t.done } : t
    ));
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const filtered = tasks.filter(t =>
    filter === "all"
      ? true
      : filter === "done"
      ? t.done
      : !t.done
  );

  return (
    <div>
      <h3>ToDo</h3>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTask}>Add</button>

      <div>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("done")}>Done</button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {filtered.map(task => (
          <li key={task.id}>
            <span
              onClick={() => toggleTask(task.id)}
              style={{
                cursor: "pointer",
                textDecoration: task.done
                  ? "line-through"
                  : "none"
              }}
            >
              {task.text}
            </span>

            <button onClick={() => removeTask(task.id)}>
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}