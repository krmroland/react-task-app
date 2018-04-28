import React, { Component } from "react";

import { connect } from "react-redux";
import Task from "./Task";
class Tasks extends Component {
    render() {
        return (
            <div className="card">
                <table className="tasks">
                    <tbody>
                        {this.props.tasks.map(task => (
                            <Task task={task} key={task.id} />
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => ({ tasks: state.tasks });
const mapActionsToDispatch = () => {
    return {};
};

export default connect(mapStateToProps, mapActionsToDispatch)(Tasks);
