import { Component } from "react";
import Display from "../display/Display";
import ButtonPanel from "../buttonPanel/ButtonPanel";
import calculate from "../../logic/calculate";
import "./App.css";

export default class App extends Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };

  handleClick = (buttonName: any) => {
    this.setState(calculate(this.state, buttonName));
  };

  render() {
    return (
      <div className="component-app">
        <Display value={this.state.next || this.state.total || "0"} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
