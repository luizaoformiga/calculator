import { Component } from "react";
import PropTypes from "prop-types";

import "./Display.css";

type MyProps = {
  value: any;
}

export default class Display extends Component<MyProps> {
  static propTypes = {
    value: PropTypes.string,
  };

  render() {
    return (
      <div className="component-display">
        <div>{this.props.value}</div>
      </div>
    );
  }
}
