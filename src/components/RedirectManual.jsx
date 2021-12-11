import React, { Component } from 'react';

export default class redirect extends Component {
  constructor(props) {
      super(props);

      window.location.replace('/login')
  }

  render() {
      return (
        <>
        </>
      )
  }
}
