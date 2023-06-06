import React, { Component } from "react";
import { connect } from "react-redux";
import AddTask from "../components/AddTask/AddTask";
import styles from "./Main.style.js";
import TaskItem from "../components/TaskItem/TaskItem";
import { addTask } from "../redux/action";

export class Main extends Component {
  render() {
    console.log(this.props.taskItems)
    return (
      <div style={styles.appContainer}>
        <div style={styles.container}>
          <h1 style={styles.title}>Infrastructure Tasks</h1>
          <div style={styles.inputWrapper}>
            <AddTask addTask={(task) => { this.props.addTask(task) }} />
            <hr style={styles.separator}/>
          </div>
          {this.props.taskItems.map((task) => {
            return (
              <TaskItem task={task}/> 
            )
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  taskItems : state.taskItems
});

const mapDispatchToProps = (dispatch) => ({
  addTask: (task) => dispatch(addTask(task))
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
