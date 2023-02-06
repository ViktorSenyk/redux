import React, { Component } from 'react';
import AvailableOptions from './AvailableOptions';
import SelectedOptions from './SelectedOptions';

export default class TransferList extends Component {
  render = () => (
    <div className="transfer-list">
      <AvailableOptions />
      <SelectedOptions />
    </div>
  );
}
