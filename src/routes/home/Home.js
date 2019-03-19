import React, { Component } from 'react';

import { getLectureList } from '../../api';

import Header from '../../components/header/Header';
import Filters from '../../components/filters/Filters';
import Lectures from '../../components/lectures/Lectures';

export default class Home extends Component {

  state = {
    lectures: getLectureList(),
  }
  
  render() {
    const { lectures } = this.state;
    
    return (
      <React.Fragment>
        <Header category="Vefforritun" title="Fyrirlestrar" />
        <Filters filter={(filters = []) => {
          this.setState({ lectures: getLectureList(filters) });
        }}/>
        <div className="list">
            <div className="list__row">
              {lectures.map((element, i) => {
                return (<Lectures key={i} lecture={element} />)
              })}
            </div>
        </div>
      </React.Fragment>
    );
  }
}
