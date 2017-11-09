import React, { Component } from "react";
import Tasks from "./Tasks";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
class TaskApp extends Component {
  render() {
    return (
      <div>
        <Tasks />
      </div>
    );
  }
}

export default TaskApp;
