import React, { Component } from "react";
import IconListAdd from "./icons/IconListAdd";
import IconClose from "./icons/IconClose";
import CreateTask from "./CreateTask";
import { connect } from "react-redux";
import { createTask } from "./state/actions/TaskActions";
class AddTask extends Component {
    render() {
        return (
            <div>
                <div className="flex jcb acc p-1 flex-wrap">
                    <h1>Task Application</h1>
                    <a
                        href=""
                        className="tasks-add"
                        title="Add task"
                        onClick={this.props.createTask}
                    >
                        <i>
                            {this.props.isCreating ? (
                                <IconClose />
                            ) : (
                                <IconListAdd />
                            )}
                        </i>
                    </a>
                </div>
                {this.props.isCreating && <CreateTask />}
            </div>
        );
    }
}

const mapStateToProps = state => ({ isCreating: state.isCreatingTask });

const mapDispatchToProps = dispatch => ({
    createTask: e => {
        e.preventDefault();
        dispatch(createTask());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
