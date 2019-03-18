import React from 'react';
import PropTypes from 'prop-types';

import './Item.scss';

/* todo taka við mynd */

export default class Item extends React.Component {

  static propTypes = {
    category: PropTypes.string,
    title: PropTypes.string,
  }

  render() {
    const { category, title } = this.props;

    return (
      <header className="heading heading--main">
        <span className="heading__category">{category}</span>
        <h1 className="heading__title">{title}</h1>
      </header>
    );
  }
}
