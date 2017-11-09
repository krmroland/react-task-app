import React, { Component } from "react";

class Task extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.remove = this.remove.bind(this);
    }
    toggle() {
        this.props.toggle(this.props.id);
    }
    remove() {
        this.props.remove(this.props.id);
    }
    textSyle() {
        if (this.props.task.complete) {
            return { textDecoration: "line-through", color: "blue" };
        }

        return {};
    }
    render() {
        return (
            <li className="list-group-item m-0 d-flex justify-content-between">
                <label className="custom-control custom-checkbox m-0">
                    <input
                        type="checkbox"
                        className="custom-control-input"
                        onChange={this.toggle}
                        value={this.props.task.complete}
                        checked={this.props.task.complete}
                    />
                    <span className="custom-control-indicator" />
                    <span
                        className="custom-control-description"
                        style={this.textSyle()}
                    >
                        {this.props.task.name}
                    </span>
                </label>
                <button
                    className="btn btn-outline-danger"
                    onClick={this.remove}
                >
                    remove
                </button>
            </li>
        );
    }
}
export default Task;
