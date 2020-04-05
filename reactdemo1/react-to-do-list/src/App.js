import React, {Component} from 'react';
import './App.css';

// import the child components
import { ToDoBanner} from "./ToDoBanner";
import { ToDoRow} from "./ToDoRow";
import { ToDoCreator} from "./ToDoCreator";
import { VisibilityControl } from "./VisibilityControl";

export default class App extends Component
{
  constructor(props)
  {
    super(props);
    this.state=
    {
      userName : "Erdem",
      toDoItems : [{action : "Buy an iPhone", done : false},
                  {action : "Do Workout", done : true},
                  {action : "Study Programming", done : false},
                  {action : "Call gf", done : true}],
                  showCompleted : true                  
      // newItemText : ""
    }
  }

  updateNewItemTextValue=(event) =>
  {
    // event.target.value retrieves whatever input it was called on
    this.setState({newItemText : event.target.value});
  }

  // add new to do task
  createNewToDo=(task) =>
  {
    if(!this.state.toDoItems
              .find(item => item.action === task))
    {
        this.setState({
          // ... is spread operator in ES6
          // {...this.props} spreads out the "own" enumerable properties in props
          // as discrete properties wherever you use it.
          // <Modal {...this.props} title='Modal heading'> would be same as:
          // <Modal a={this.props.a} b={this.props.b} title=''>
          
          // ... : all the previous values of to do items
            toDoItems : [ ...this.state.toDoItems, 
                        { action : task, 
                          done : false}]
                          //,newItemText : ""
        });
    }
  }  
 
  // change note item status boolean wheter it is done or not
  toggleTodo = (todo) => this.setState({ toDoItems : this.state.toDoItems
                  .map(item => item.action === todo.action ? 
                          { ...item, done: !item.done } : item )}
                      );

 // use map function to generate to do items for displaying
 // add child component ToDoRow
  todoTableRows =(isDone) => this.state.toDoItems
                  .filter(item => item.done === isDone)
                  .map( item => 
                        <ToDoRow key={item.action}  item={item}
                            callback={this.toggleTodo} />
                    );                      

  // render = () => {}  new style arrow function, below is old style:
  render()
  {
    return(
    <div>
      <ToDoBanner name={this.state.userName}
                  tasks={this.state.toDoItems} />

      <div className="container-fluid">
          <ToDoCreator callback={this.createNewToDo} />

        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>To Do Task Name</th>
              <th>Is It Done</th>
            </tr>
          </thead>
          <tbody>
            {/* Show incomplete tasks */}
            {this.todoTableRows(false)}
          </tbody>
        </table>

        <div className="bg-danger text-white text-center p-2">
            {/* Calling Child Component */}
            <VisibilityControl description="Completed Tasks"
              isChecked={this.state.showCompleted}
              callback={ (checked) =>
                this.setState({showCompleted: checked})
              } />
        </div>

        {
            this.state.showCompleted && 
            <table className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <td>Task Name</td>
                    <td>Status</td>
                  </tr>
                </thead>
                <tbody>
                  {/* show completed tasks */}
                  {this.todoTableRows(true)}
                </tbody>
            </table>

        }

      </div>
    </div>
    )
  };
}
