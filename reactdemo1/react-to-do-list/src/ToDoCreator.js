// Child component
// Create a new to do item

import React, {Component} from 'react';

export class ToDoCreator extends Component
{
    constructor(props)
    {
        super(props);
        this.state = { newItemText : " "}
    }

    // js event
    updateNewTextValue = (event) => 
    {
        this.setState({ newItemText : event.target.value});
    }

    createNewTodo = () =>
    {
        this.props.callback(this.state.newItemText)
        this.setState({newItemText : ""});
    }

    render = () =>
        <div className="m-1">
            <input className="form-control" value={this.state.newItemText}
                onChange={this.updateNewTextValue} />
                <button className="btn btn-primary mt-1"
                    onClick={this.createNewTodo}>
                    Add new task
                </button>
        </div>
}