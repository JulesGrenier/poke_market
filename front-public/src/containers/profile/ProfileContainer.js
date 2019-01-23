import React, { Component } from 'react';
import Profile from '../../components/profile/Profile';

class ProfileContainer extends Component {

  componentWillMount(){
    document.title = "My Profile";
  }

  render() {
    return (
      <Profile />
    );
  }
}

export default ProfileContainer;