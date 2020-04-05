// Child component

import React, {Component} from 'react';

export class ToDoBanner extends Component
{
    render = () =>
        <h4 className="bg-primary text-white text-center p-2">
            { this.props.name }'s  To Do List
            ({this.props.tasks.filter(t=>!t.done).length} items remaining to do)
        </h4>
}