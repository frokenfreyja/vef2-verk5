import React, {Component} from 'react';

import './Lectures.scss';

/* todo taka við mynd */
export default class Lectures extends Component {

  state = {
    check: '\u2713',
  }

  render() {
    const { lecture } = this.props;
    const { check } = this.state;

    return (
      <React.Fragment>
        <div className="list__col">
          <a className="listItem" href={"lecture/" + lecture.slug}>
              <div className="listItem__image">
              {
                (lecture.thumbnail) ? <img src={lecture.thumbnail} alt="Lecture" /> : null
              }
              </div>
              <div className="listItem__bottom">
                  <div className="listItem__texts">
                      <span className="listItem__category"> {lecture.category} </span>
                      <h2 className="listItem__title"> {lecture.title} </h2>
                  </div>
                  {
                    lecture.finished && <div className="listItem__finished">{check}</div>
                  }
              </div>
          </a>
        </div>
      </React.Fragment>
    );
  }
}
