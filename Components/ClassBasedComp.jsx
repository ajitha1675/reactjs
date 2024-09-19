import { Component } from "react";

export default class ClassBasedComp extends Component {
  
  constructor(){
    super();

    this.state ={
      count : 0,
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this); 
  }
  
  increment(){
       this.setState({ count: this.state.count +1});
  }

  decrement(){
    this.setState({ count: this.state.count -1});
  }
  
  render() {
    return <div>
      <p className="text-center mb-5 font-bold">{this.state.count}</p>
      <div className="flex gap=4">
      <button onclick={this.decrement} 
       className="px-4 py=1.5rounded bg-blue-200">
        Decrement</button>
      <button onclick={this.increment} 
       className="px-4 py=1.5rounded bg-green-200">
        Increment</button>
      </div>

    </div>;
  }
}