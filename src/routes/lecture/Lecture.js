import React, { Component } from 'react';

import { getLecture, toggleLectureFinish } from '../../api';

import Header from '../../components/header/Header';
import Item from '../../components/item/Item';
import NotFound from '../../routes/not-found/NotFound';

import '../../components/lecture/Lecture.scss';
import '../../components/item/Item.scss';

export default class Lecture extends Component {
  
  state = {
      lecture: getLecture(this.props.match.params.slug),
      check: '\u2713',
    }
  
  handleClick = slug => (e) => {
    const { target } = e;
    const isFinished = target.classList.contains('lecture__finish--finished');
    if (isFinished) {
      target.textContent = 'Klára fyrirlestur';
    } else {
      target.textContent = '✓ Fyrirlestur kláraður';
    }

    target.classList.toggle('lecture__finish--finished');
    toggleLectureFinish(slug, !isFinished);
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
                  lecture ? lecture.content.map((element, i) => {
                    return (<Item key={i} content={element}/>)
                  }) : <NotFound/>
                }
              </div>
            </div>
          </div>
        </section>
        <footer className="lecture__footer">
          <button onClick={this.handleClick(lecture.slug)} 
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
