import PropTypes from 'prop-types';
import React from 'react';


module.exports = class extends React.Component {
  static displayName = "08-field-component-field";

  state = {
    value: this.props.value,
    error: false,
  }

  componentWillReceiveProps(update) {
    this.setState({ value: update.value });
  }

  //This is the field that is getting imported into the other componet
  static propTypes : {
    placeholder : PropTypes.string,
    name : PropTypes.string,
    value : PropTypes.string.isRequired,
    onChange : PropTypes.func.isRequired,
    validate : PropTypes.func,
  };

  onChange = (evt) => {
    const name = this.props.name;
    const value = evt.target.value;
    const error = this.props.validate ? this.props.validate(value) : false;

    this.setState({ value, error });

    this.props.onChange({ name, value, error });
  }

  render() {
    return (
      <div>
        <input
          placeholder={this.props.placeholder}
          value={this.state.value}
          onChange={this.onChange}
          />
        <span style={{ color: 'red'}}>{this.state.error}</span>
      </div>

    );
  }
};
