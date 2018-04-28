import React, { Component } from "react";
import IconSave from "./icons/IconSave";
import { connect } from "react-redux";
import { storeTask } from "./state/actions/TaskActions";
class CreateTask extends Component {
    constructor(props) {
        super(props);
        this.updateName = this.updateName.bind(this);
        this.submit = this.submit.bind(this);
        this.state = {
            name: "",
            error: null
        };
    }
    updateName(e) {
        const value = e.currentTarget.value;
        this.setState(state => ({ ...state, name: value }));
    }
    submit(e) {
        e.preventDefault();
        this.validateName(done => {
            if (this.state.error) {
                return;
            }

            this.props.submit({ name: this.state.name, isComplete: false });
        });
    }
    validateName(callback = () => {}) {
        let error = null;
        const name = String(this.state.name).trim();
        if (!name) {
            error = "Task name is required";
        } else if (name.length < 3) {
            error = "Task name must be at least 3 characters ";
        }

        this.setState({ name, error }, callback);
    }
    render() {
        return (
            <div className="card">
                <div className="p-1">
                    <form onSubmit={this.submit}>
                        <div className="flex">
                            <input
                                type="text"
                                className="control"
                                placeholder="Tasks Name"
                                onInput={this.updateName}
                            />
                            <button className="button">
                                <IconSave />
                            </button>
                        </div>
                        {this.state.error && (
                            <p className="form-error">{this.state.error}</p>
                        )}
                    </form>
                </div>
            </div>
        );
    }
}
const mapsStateToProps = state => ({});
const mapDispatchToActions = dispatch => ({
    submit: task => dispatch(storeTask(task))
});
export default connect(mapsStateToProps, mapDispatchToActions)(CreateTask);
