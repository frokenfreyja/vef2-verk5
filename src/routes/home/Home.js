import React, { Component } from 'react';

import { getLectureList } from '../../api';

import Header from '../../components/header/Header';

export default class Home extends Component {

  state = {
    lectures: getLectureList(),
  }

  render() {
    const { lectures } = this.state;

    console.log(lectures);

    return (
      <React.Fragment>
        <Header category="Vefforritun" title="Fyrirlestrar" />
      </React.Fragment>
    );
  }
}
