import React from "react";

class ErrorBoundry extends React.Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Oh, This is not good!</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundry;
