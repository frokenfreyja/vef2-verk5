import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Filters.scss';

/* todo taka við mynd */

export default class Filters extends Component {

  static propTypes = {
    filter: PropTypes.func,
  }

  state = {
    categories: [
      {id:'html', isOn: false, css: 'html', text: 'HTML'},
      {id:'css', isOn: false, css: 'css', text: 'CSS'},
      {id:'javascript', isOn: false, css: 'javascript', text: 'JavaScript'},
    ],
  }

  handleClick = id => (e) => {
    const { categories } = this.state;
    const { filter } = this.props;

    ((category) => {
      if (category) {
        category.isOn = !category.isOn;
        if (category.isOn) category.css = 'active';
        else category.css = category.id;
      }
    })(categories.find(obj => obj.id === id));

    const filters = [];
    categories.filter(obj => obj.isOn)
      .forEach(obj => {
        filters.push(obj.id);
      });

    this.setState({ categories }, (() => filter(filters)));
  }

  render() {
    const { categories } = this.state;

    return (
      <React.Fragment>
          <ul className="filters">
            {categories.map((element, i) => {
              return <button 
                key={i} 
                onClick={this.handleClick(element.id)}
                className={"filters__filter filters__filter--" + element.css}>
                {element.text}</button>
            })}
        </ul>
      </React.Fragment>
    );
  }

}
