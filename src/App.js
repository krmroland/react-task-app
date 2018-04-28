import React, { Component } from "react";
import Tasks from "./Tasks";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./state/store";
import SearchTasks from "./SearchTasks";
import TasksHeader from "./TasksHeader";
class TaskApp extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="card">
                    <TasksHeader />
                    <SearchTasks />
                    <Tasks />
                </div>
            </Provider>
        );
    }
}

export default TaskApp;
