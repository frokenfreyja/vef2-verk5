import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Lecture.scss';

/* todo taka við mynd */

export default class Lecture extends Component {

  static propTypes = {
    content: PropTypes.any,
  }

  
  youtube = data => <iframe className="item__iframe" title="bahh" src={data} allowFullScreen={true} frameBorder="0"></iframe>

  text = data => 
  data.split('\n').map((element, i) => {
    return (<p key={i} className="item__text">{element}</p>)
  })

  quote = (data, { attribute }) => 
  <blockquote>
    <p className="item__quote">{data}</p>
    <p className="item__attribute">{attribute}</p>
  </blockquote>

  image = (data, { caption }) =>
  <div>
    <img className="image__img" src={"../" + data} alt=""/>
    <p className="item__attribute">{caption}</p>
  </div>

  heading = data =>
  <h3 className="item__heading">{data}</h3>

  list = data =>
  <div className="item__ul">
    {console.info(data[0])}
      {data.map((element, i) => {
      return (<li key={i} className="item__li">{element}</li>)
    })}
  </div>

  code = data =>
  <pre className="item__code">{data}</pre>
  
  types = [
    {type: "youtube", html: this.youtube},
    {type: "text", html: this.text},
    {type: "quote", html: this.quote},
    {type: "image", html: this.image},
    {type: "heading", html: this.heading},
    {type: "list", html: this.list},
    {type: "code", html: this.code},
  ];

  render() {
    const { content } = this.props;
    const { type, data, ...rest} = content;

    return (
      <React.Fragment>
        <div className={(type === 'quote') ? "item item--blockquote" :  "item item--" + type}>
          <div className="item__content">
            {
              ((obj) => obj.html(data, rest))(this.types.find(obj => obj.type === type))
            }
          </div>
        </div>
      </React.Fragment>
    );
  }
}
