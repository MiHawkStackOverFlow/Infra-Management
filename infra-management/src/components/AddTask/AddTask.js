import React from 'react'
import styles from './AddTask.style.js'

export default function AddTask() {
  return (
    <div>
      <input style={styles.inputField} placeholder='Enter Task'/>
      <button style={styles.submitButton}>Add</button>
    </div>
  )
}
