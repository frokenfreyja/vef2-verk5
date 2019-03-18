import React, { Component } from 'react';

import Header from '../../components/header/Header';

export default class NotFound extends Component {

  render() {

    return (
      <React.Fragment>
        <Header category="404" title="Síða fannst ekki" />
        <footer className="error__footer">
          <a className="error__back" href="/">Til baka</a>
        </footer>
      </React.Fragment>
    );
  }
}