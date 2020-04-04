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
      course : "React initial"
    }
  }

  // fat arrows eliminates requirement for the return keyword
  changeStateData = () =>
  {
    this.setState(
      {userName : this.state.userName === "Erdem" ? "Ismail" : "Erdem" }
    )
  }
 
  // render = () => {}  new style arrow function, below is old style:
  render()
  {
    return(
    <div>
      <h4 className="bg-primary text-white text-center p-2">
          <button className="btn btn-danger m-2"
            onClick={this.changeStateData}>
            Change The State
          </button>
            { this.state.userName } şu kursu çalışıyor { this.state.course}
        </h4>
    </div>
    )
  };
}
