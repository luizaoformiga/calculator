import Button from "../button/Button";
import { Component } from "react";
import PropTypes from "prop-types";
import "./ButtonPanel.css";

type MyProps = {
  clickHandler?: any;
  orange?: string;
}

type MyStates = {

}

export default class ButtonPanel extends Component<MyProps, MyStates> {
  static propTypes = {
    clickHandler: PropTypes.func,
  };

  handleClick = (buttonName: any) => {
    this.props.clickHandler(buttonName);
  };

  render() {
    return (
      <div className="component-button-panel">
        <div>
          <Button name="AC" clickHandler={this.handleClick} />
          <Button name="+/-" clickHandler={this.handleClick} />
          <Button name="%" clickHandler={this.handleClick} />
          <Button name="÷" clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button name="7" clickHandler={this.handleClick} />
          <Button name="8" clickHandler={this.handleClick} />
          <Button name="9" clickHandler={this.handleClick} />
          <Button name="x" clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button name="4" clickHandler={this.handleClick} />
          <Button name="5" clickHandler={this.handleClick} />
          <Button name="6" clickHandler={this.handleClick} />
          <Button name="-" clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button name="1" clickHandler={this.handleClick} />
          <Button name="2" clickHandler={this.handleClick} />
          <Button name="3" clickHandler={this.handleClick} />
          <Button name="+" clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button name="0" clickHandler={this.handleClick} wide />
          <Button name="." clickHandler={this.handleClick} />
          <Button name="=" clickHandler={this.handleClick} orange />
        </div>
      </div>
    );
  }
}
