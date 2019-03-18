import React, { Component } from 'react';

import { getLecture, toggleLectureFinish } from '../../api';

import Header from '../../components/header/Header';
import LectureSingle from '../../components/lecture/Lecture';
import NotFound from '../../routes/not-found/NotFound'

export default class Lecture extends Component {

  constructor(props) {
    super(props);
    
    const { slug } = this.props.match.params;

    this.state = {
      lecture: getLecture(slug),
      check: '\u2713',
    };
  }

  handleClick = slug => (e) => {
    toggleLectureFinish(slug)
    this.setState({ lecture: getLecture(slug) });
  }

  render() {
    const { lecture, check } = this.state;

    return (
      <React.Fragment>
        <Header category={lecture.category} title={lecture.title} image={lecture.image}/>
        <section className="lecture">
          <div className="lecture__content">
            <div className="lecture__row">
              <div className="lecture__col">
                {
                  lecture ?
                  lecture.content.map((element, i) => {
                    return (<LectureSingle key={i} content={element}/>)
                  })
                  : 
                  <NotFound/>
                }
              </div>
            </div>
          </div>
        </section>
        <footer className="lecture__footer">
          <button 
            onClick={this.handleClick(lecture.slug)} 
            className={lecture.finished ? "lecture__finish lecture__finish--finished" : "lecture__finish"}>
            {
              (lecture.finished) ? `${check} Fyrirlestur kláraður` : "Klára fyrirlestur"
            }
          </button>
          <a className="lecture__back" href="/">Til baka</a>
        </footer>
      </React.Fragment>
    );
  }
}
