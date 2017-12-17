import React, { Fragment } from 'react';

import { Async } from 'react-select';

import t from 'tcomb-form';

import { getData } from './getData';

const myTextbox = t.form.Form.templates.textbox.clone({
  renderInput(locals) {
    return (
      <Async
        loadOptions={getData}
        value={locals.value}
        onChange={x => locals.onChange(x == null ? null : x.value)}
      />
    );
  }
});

const options = {
  template: myTextbox
}

export default class AsyncWithTcombForm extends React.Component {

  state = {
    value: ''
  }

  handleChange = value => this.setState({ value });

  render() {
    return (
      <Fragment>
        <h2>Async with tcomb-form</h2>
        <t.form.Form type={t.String} options={options} value={this.state.value} onChange={this.handleChange} />
        <p>{this.state.value}</p>
      </Fragment>
    );
  }
}
