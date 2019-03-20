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
      {id:'html', filterOn: false, css: 'html', text: 'HTML'},
      {id:'css', filterOn: false, css: 'css', text: 'CSS'},
      {id:'javascript', filterOn: false, css: 'javascript', text: 'JavaScript'},
    ],
  }

  onClickHandler = id => (e) => {
    const { categories } = this.state;
    const { filter } = this.props;

    ((category) => {
      if (category) {
        category.filterOn = !category.filterOn;
        if (category.filterOn) {
          category.css = 'active';
        } else {
          category.css = category.id;
        } 
      }
    })(categories.find(obj => obj.id === id));

    const filters = [];
    categories.filter(obj => obj.filterOn)
      .forEach(obj => { filters.push(obj.id); });

    this.setState({ categories }, (() => filter(filters)));
  }

  render() {
    const { categories } = this.state;

    return (
      <React.Fragment>
          <ul className="filters">
            {categories.map((element, i) => {
              return <button key={i} onClick={this.onClickHandler(element.id)} className={"filters__filter filters__filter--" + element.css}>{element.text}</button>
            })}
        </ul>
      </React.Fragment>
    );
  }
}
