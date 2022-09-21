import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Title extends Component {
  render() {
    const { Headline } = this.props;
    return (
      <h2>{Headline}</h2>
    );
  }
}
Title.propTypes = { Headline: PropTypes.string.isRequired };
