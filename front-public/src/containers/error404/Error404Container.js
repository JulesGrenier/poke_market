import React, { Component } from 'react';
import Error404 from '../../components/error404/Error404';

class Error404Container extends Component {
  componentWillMount() {
    document.title = 'Page Not Found';
    window.scroll(0, 0);
  }

  render() {
    return (
      <Error404 />
    );
  }
}

export default Error404Container;