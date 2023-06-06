import React, { Component } from "react";
import { connect } from "react-redux";
import AddTask from "../components/AddTask/AddTask";
import styles from "./Main.style.js";
import TaskItem from "../components/TaskItem/TaskItem";

export class Main extends Component {
  render() {
    return (
      <div style={styles.appContainer}>
        <div style={styles.container}>
          <h1 style={styles.title}>Infrastructure Tasks</h1>
          <div style={styles.inputWrapper}>
            <AddTask />
          </div>
          <TaskItem />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
