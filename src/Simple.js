import React, { Fragment } from 'react';

import { Async } from 'react-select';

import { getData } from './getData';

export default class AsyncSimple extends React.Component {

  state = {
    value: ''
  }

  handleChange = value => this.setState({ value });

  render() {
    return (
      <Fragment>
        <h2>Async simple</h2>
        <Async
          loadOptions={getData}
          value={this.state.value}
          onChange={x => this.handleChange(x == null ? null : x.value)}
        />
        <p>{this.state.value}</p>
      </Fragment>
    );
  }
}
