import React from "react";

class AddTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: "", error: null };
        this.save = this.save.bind(this);
        this.updateInput = this.updateInput.bind(this);
    }
    save(event) {
        event.preventDefault();
        if (this.isValid()) {
            this.props.taskAdded(this.state.value);
        }
    }
    isValid() {
        if (!this.state.value) {
            this.setState({ error: "Please type in something" });
            return false;
        }
        if (this.state.value.length < 3) {
            this.setState({ error: "Task must atleast be 3 characters" });
            return false;
        }
        if (this.state.value.length > 100) {
            this.setState({
                error: "Task cannot  be more than 100 characters"
            });
            return false;
        }
        return true;
    }
    updateInput(event) {
        //we will check if the given value is valid asynchronously
        this.setState({ value: event.target.value }, () => {
            if (this.isValid()) {
                this.setState({ error: null });
            }
        });
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
                            {this.state.error &&
                                <p className="form-text text-danger">
                                    {this.state.error}
                                </p>}
                        </div>
                        <div className="form-group">
                            <button
                                className="btn btn-primary"
                                onClick={this.save}
                                disabled={this.state.error}
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
