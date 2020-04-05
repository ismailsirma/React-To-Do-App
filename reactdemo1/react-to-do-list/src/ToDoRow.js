// Child component

import React, {Component} from 'react';

export class ToDoRow extends Component
{
    // callback function is called when user changes the input value of checkbox on click
    render = () =>
       <tr>
            <td>{this.props.item.action}</td>
            <td>
                <input type="checkbox" checked={this.props.item.done} 
                    onChange={() => this.props.callback(this.props.item)} />
            </td>
       </tr>
}