import React, { Component } from 'react';
import Profile from '../../components/user/Profile';

class ProfileContainer extends Component {

  constructor(props){
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      currentPassword: "",
      newPassword: "",
      repeatNewPassword: ""
    };
  }

  componentWillMount(){
    document.title = "My Profile";
    window.scroll(0, 0);
  }

  render() {
    return (
      <Profile />
    );
  }
}

export default ProfileContainer;