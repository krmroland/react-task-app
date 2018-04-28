import React, { Component } from "react";
import { connect } from "react-redux";
import IconSearch from "./icons/IconSearch";
import { filterTasks } from "./state/actions/TaskActions";
class SearchTasks extends Component {
    constructor(props) {
        super(props);
        this.filterTasks = this.filterTasks.bind(this);
    }
    filterTasks(e) {
        const name = e.currentTarget.value;
        this.props.filterTasks(name);
    }
    render() {
        return (
            !this.props.isCreatingTask && (
                <div className="search">
                    <input
                        type="text"
                        className="control search-control"
                        placeholder="Search ...."
                        onInput={this.filterTasks}
                    />
                    <i className="search-icon">
                        <IconSearch />
                    </i>
                </div>
            )
        );
    }
}

const mapStateToProps = state => state;

const mapActionsToDispatch = dispatch => ({
    filterTasks: name => dispatch(filterTasks(name))
});
export default connect(mapStateToProps, mapActionsToDispatch)(SearchTasks);
