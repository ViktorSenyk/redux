import React, { Component } from 'react';
import { connect } from 'react-redux';
import { availableOptionsSelector } from './options.selectors';
import Options from './Options';
import { toggleOption } from './options.actions';

class AvailableOptions extends Component {
  render = () => (
    <Options
      title="Available options"
      options={this.props.availableOptions}
      moveOptions={this.props.moveOption}
    />
  );
}

const mapState = state => ({
  availableOptions: availableOptionsSelector(state),
});

const mapDispatch = {
  moveOption: toggleOption,
};

export default connect(mapState, mapDispatch)(AvailableOptions);
