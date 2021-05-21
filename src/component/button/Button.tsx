import { Component } from "react";
import PropTypes from "prop-types";
import "./Button.css";

type MyProps = {
  clickHandler?: any;
  name?: string;
  orange?: any;
  wide?: any;
}

type MyStates = {
 name: string;
}

export default class Button extends Component<MyProps, MyStates> {
  static propTypes = {
    name: PropTypes.string,
    orange: PropTypes.bool,
    wide: PropTypes.bool,
    clickHandler: PropTypes.func,
  };

  handleClick = () => {
    this.props.clickHandler(this.props.name);
  };

  render() {
    const className = [
      "component-button",
      this.props.orange ? "orange" : "",
      this.props.wide ? "wide" : "",
    ];

    return (
      <div className={className.join(" ").trim()}>
        <button onClick={this.handleClick}>{this.props.name}</button>
      </div>
    );
  }
}
