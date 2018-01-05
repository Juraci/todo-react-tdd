// @flow
import * as React from "react";
import PropTypes from "prop-types";

type Props = {
  to: string,
  children: React.Node,
};

class Link extends React.Component<Props> {
  static contextTypes = {
    route: PropTypes.string,
    linkHandler: PropTypes.func,
  };

  handleClick = (evt: SyntheticEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    this.context.linkHandler(this.props.to);
  }

  render() {
    return (<a onClick={this.handleClick} href="#">{this.props.children}</a>);
  }
}

export { Link };
