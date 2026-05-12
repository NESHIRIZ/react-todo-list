import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  // Add todo
  const addTodo = () => {
    if (task.trim() === "") return;

    setTodos([...todos, task]);
    setTask("");
  };

  // Delete todo
  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div style={styles.container}>
      <h1>Todo List App</h1>

      <div style={styles.inputSection}>
        <input
          style={styles.input}
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task..."
        />

        <button style={styles.button} onClick={addTodo}>
          Add
        </button>
      </div>

      <ul style={styles.list}>
        {todos.map((todo, index) => (
          <li key={index} style={styles.item}>
            {todo}
            <button
              style={styles.delete}
              onClick={() => deleteTodo(index)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial",
  },
  inputSection: {
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    width: "200px",
    marginRight: "10px",
  },
  button: {
    padding: "10px 15px",
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  item: {
    margin: "10px 0",
    fontSize: "18px",
  },
  delete: {
    marginLeft: "10px",
    padding: "5px 10px",
    cursor: "pointer",
  },
};

export default App;
