import React, { Component } from "react";
import IconCheck from "./icons/IconCheck";
import IconClose from "./icons/IconClose";
import IconTrash from "./icons/IconTrash";
import { deleteTask, toggleTaskIsComplete } from "./state/actions/TaskActions";

import { connect } from "react-redux";
class Task extends Component {
    constructor(props) {
        super(props);
        this.remove = this.remove.bind(this);
        this.toggleIsComplete = this.toggleIsComplete.bind(this);
    }
    toggleIsComplete(e) {
        e.preventDefault();
        this.props.toggleIsComplete(this.props.task.id);
    }
    remove(e) {
        e.preventDefault();

        if (window.confirm("The task will be removed")) {
            this.props.remove(this.props.task.id);
        }
    }
    style() {
        return this.props.task.isComplete
            ? {
                  textDecoration: "line-through rgba(0,0,0,0.4)"
              }
            : {};
    }
    render() {
        return (
            <tr className="task">
                <td className="task-icon">
                    <a href="" onClick={this.toggleIsComplete}>
                        {this.props.task.isComplete ? (
                            <IconClose className="fill-danger" />
                        ) : (
                            <IconCheck />
                        )}
                    </a>
                </td>
                <td style={this.style()}>{this.props.task.name}</td>
                <td className="task-actions">
                    <a href="" onClick={this.remove}>
                        <IconTrash />
                    </a>
                </td>
            </tr>
        );
    }
}

const mapDispatchToActions = dispatch => ({
    remove: id => dispatch(deleteTask(id)),
    toggleIsComplete: id => dispatch(toggleTaskIsComplete(id))
});

export default connect(state => ({}), mapDispatchToActions)(Task);
