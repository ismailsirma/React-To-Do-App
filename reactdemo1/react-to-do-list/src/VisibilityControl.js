// Child component
import React, {Component} from 'react';

export class VisibilityControl extends Component
{
    // checkbox decides whether to show the content inside html
    render = () =>
     <div className="form-check">
        <input className="form-check-input" type="checkbox"
            checked={this.props.isChecked}
            onChange={(e) => this.props.callback(e.target.checked)} />

        {/* used props to get value of description from parent component  */}            
        <label className="form-check-label">
            Show {this.props.description}
        </label>


     </div>
}