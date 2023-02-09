import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isFetchingSelector, userDataSelector } from './users.selectors';

class UserInfo extends Component {
  render = () =>
    this.props.isFetching ? (
      <span className="spinner" />
    ) : !this.props.userData ? null : (
      <div className="user">
        <img alt="User Avatar" src={this.props.userData.avatar_url} className="user__avatar" />
        <div className="user__info">
          <span className="user__name">{this.props.userData.name}</span>
          <span className="user__location">{this.props.userData.location}</span>
        </div>
      </div>
    );
}

const mapState = state => ({
  isFetching: isFetchingSelector(state),
  userData: userDataSelector(state),
});

export default connect(mapState)(UserInfo);
