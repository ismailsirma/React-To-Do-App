import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { directive } from '@babel/types';


export default class App extends Component
{
  constructor(props)
  {
    super(props);
    this.state=
    {
      userName : "Erdem",
      toDoItems : [{action : "Buy a flower", done : false},
                  {action : "Do Workout", done : true},
                  {action : "Study Programming", done : false},
                  {action : "Call a friend", done : true}],
      newItemText : ""
    }
  }

  updateNewItemTextValue=(event) =>
  {
    // event.target.value retrieves whatever input it was called on
    this.setState({newItemText : event.target.value});
  }

  // add new to do task
  createNewToDo=() =>
  {
    if(!this.state.toDoItems
              .find(item => item.action === this.state.newItemText))
    {
        this.setState({
          // ... is spread operator in ES6
          // {...this.props} spreads out the "own" enumerable properties in props
          // as discrete properties wherever you use it.
          // <Modal {...this.props} title='Modal heading'> would be same as:
          // <Modal a={this.props.a} b={this.props.b} title=''>
          
            toDoItems : [ ...this.state.toDoItems, // all the previous values of to do items
                        { action : this.state.newItemText, 
                          done : false}],
                          newItemText : ""
        });
    }
  }  
 
  // render = () => {}  new style arrow function, below is old style:
  render()
  {
    return(
    <div>
      <h4 className="bg-primary text-white text-center p-2">
            { this.state.userName }'s  To Do List 
            ({this.state.toDoItems.filter(t=> !t.done).length}) items remaining to do
      </h4>
      <div className="container-fluid">
        <div className="m-1">
          <input className="form-control" 
              value = {this.newItemText}
              onChange={this.updateNewItemTextValue} />

              <button className="btn btn-danger mt-1"
                    onClick={this.createNewToDo}>
                    Add a New Task
              </button>
        </div>
      </div>
    </div>
    )
  };
}
