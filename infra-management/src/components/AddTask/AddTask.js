import React, { useState } from "react";
import styles from "./AddTask.style.js";

export default function AddTask({ addTask }) {
  let [task, setTask] = useState("");
  return (
    <div>
      <input
        style={styles.inputField}
        placeholder="Enter Task"
        onChange={(event) => {
          setTask(event.target.value);
        }}
        value={task}
      />
      <button
        style={styles.submitButton}
        onClick={() => {
          addTask(task);
          setTask('')
        }}
      >
        Add
      </button>
    </div>
  );
}
