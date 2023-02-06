import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectedOptionsSelector } from './options.selectors';
import Options from './Options';
import { toggleOption } from './options.actions'

class AvailableOptions extends Component {
  render = () => (
    <Options
      title="Selected options"
      options={this.props.selectedOptions}
      moveOptions={this.props.moveOption}
    />
  );
}

const mapState = state => ({
  selectedOptions: selectedOptionsSelector(state),
});

const mapDispatch = {
  moveOption: toggleOption,
};

export default connect(mapState, mapDispatch)(AvailableOptions);
