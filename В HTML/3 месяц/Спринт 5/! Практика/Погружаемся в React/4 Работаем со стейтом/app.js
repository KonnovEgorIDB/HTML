import React, { Component, PureComponent, memo } from "react";

const Close = memo(() => {
  return <button style={{ marginLeft: 16 }}>Очистить</button>;
});

class Input extends PureComponent {
  render() {
    return (
      <label>
        <input />
        <Close />
      </label>
    );
  }
}

export default class App extends Component {
  state = {
    value: ""
  };

  render() {
    const { value } = this.state;

    return (
      <React.Fragment>
        <h1>Value is [{value}]</h1>
        <Input/>
      </React.Fragment>
    );
  }
}