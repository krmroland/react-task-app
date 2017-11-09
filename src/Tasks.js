import React, { Component } from "react";
import Task from "./Task";
import AddTask from "./AddTask";
class Tasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                { name: "Go to town", complete: false },
                { name: "Complete Tutorial", complete: true },
                { name: "Hang out on Laracasts", complete: false },
                { name: "Go to the bank", complete: true }
            ],
            isAdding: false
        };
        this.taskAdded = this.taskAdded.bind(this);
        this.closeTaskForm = this.closeTaskForm.bind(this);
        this.showTaskForm = this.showTaskForm.bind(this);
        this.remove = this.remove.bind(this);
        this.toggle = this.toggle.bind(this);
    }
    taskAdded(task) {
        this.state.tasks.push({ name: task, complete: false });
        this.closeTaskForm();
    }
    closeTaskForm() {
        this.setState({ isAdding: false });
    }
    showTaskForm() {
        this.setState({ isAdding: true });
    }
    remove(id) {
        let tasks = this.state.tasks;
        tasks.splice(id, 1);
        this.setState({ tasks });
    }
    toggle(id) {
        let tasks = this.state.tasks;
        tasks[id]["complete"] = !tasks[id]["complete"];

        this.setState({ tasks });
    }

    render() {
        if (this.state.isAdding) {
            return (
                <AddTask
                    taskAdded={this.taskAdded}
                    close={this.closeTaskForm}
                />
            );
        }
        return (
            <div className="card mx-auto col-md-6">
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <h1 className="card-title text-center text-primary">
                            Task APP
                        </h1>
                        <div>
                            <button
                                className="btn btn-outline-primary"
                                onClick={this.showTaskForm}
                            >
                                New Task
                            </button>
                        </div>
                    </div>
                    <ul className="list-group">
                        {this.state.tasks.map((task, index) =>
                            <Task
                                task={task}
                                key={index}
                                remove={this.remove}
                                toggle={this.toggle}
                                id={index}
                            />
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Tasks;
