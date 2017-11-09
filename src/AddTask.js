import React from "react";

class AddTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: "" };
        this.save = this.save.bind(this);
        this.updateInput = this.updateInput.bind(this);
    }
    save(event) {
        event.preventDefault();
        this.props.taskAdded(this.state.value);
    }
    updateInput(event) {
        this.setState({ value: event.target.value });
    }
    render() {
        return (
            <div className="card col-md-6 mx-auto">
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <h2 className="text-center text-primary">
                            Create A new Task
                        </h2>
                        <div>
                            <button
                                className="btn btn-outline-primary"
                                onClick={this.props.close}
                            >
                                close
                            </button>
                        </div>
                    </div>
                    <form>
                        <div className="form-group">
                            <label>Task Name </label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.value}
                                onChange={this.updateInput}
                            />
                        </div>
                        <div className="form-group">
                            <button
                                className="btn btn-primary"
                                onClick={this.save}
                            >
                                Save Task
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddTask;
