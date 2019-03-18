import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import './Header.scss';

/* todo taka við mynd */

export default class Header extends React.Component {

  static defaultProps = {
    image: "img/header.jpg"
  }

  static propTypes = {
    category: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string,
  }

  state = {
    background: this.props.image,
  }

  render() {
    const { category, title, image } = this.props;

    return (
      <>
      <Helmet title={title}/>
      <header className="heading heading--main" style = {{backgroundImage: `url(${"../" + image})`}}>
        <span className="heading__category">{category}</span>
        <h1 className="heading__title">{title}</h1>
      </header>
      </>
    );
  }
}
