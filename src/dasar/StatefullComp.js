// rce
import React, { Component } from "react";

export class StatefullComp extends Component {
  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    return (
      <div className="container">
        StatefullComp Hal
        <button>Tes</button>
      </div>
    );
  }
}

export default StatefullComp;
