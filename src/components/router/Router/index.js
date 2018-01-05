// @flow
import * as React from "react";
import PropTypes from "prop-types";

type Props = {
  children: React.Node,
};

type State = {
  route: string,
};

const getCurrentPath = () => {
  const path = document.location.pathname;
  return path.substring(path.lastIndexOf('/'));
};

export class Router extends React.Component<Props, State, > {
  state = {
    route: getCurrentPath(),
  }

  handleLinkClick = (route: string) => {
    this.setState({ route });
    window.history.pushState(null, '', route);
  }

  static childContextTypes = {
    route: PropTypes.string,
    linkHandler: PropTypes.func,
  };

  getChildContext() {
    return {
      route: this.state.route,
      linkHandler: this.handleLinkClick,
    }
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}
