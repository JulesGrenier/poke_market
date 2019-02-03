import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import Profile from '../../components/user/Profile';

class ProfileContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      newEmail: '',
      currentPassword: '',
      newPassword: '',
      newPasswordConf: '',
      message: {}
    };

    this.getUserInfos = this.getUserInfos.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    document.title = 'My Profile';
    this.getUserInfos();
  }

  getUserInfos() {
    const token = localStorage.getItem('token');
    if (!token) {
      const { history } = this.props;
      return history.push('/login');
    }
    const user = jwtDecode(token);
    return this.setState({ user });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
      message: {}
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const currToken = localStorage.getItem('token');
    const {
      user,
      newEmail,
      currentPassword,
      newPassword,
      newPasswordConf
    } = this.state;

    const {
      id,
      email,
      firstname,
      lastname
    } = user;

    const dataToSend = {
      id,
      firstname,
      lastname,
      email,
      newEmail,
      currentPassword,
      newPassword,
      newPasswordConf
    };

    axios.put('http://localhost:4000/auth/update', { ...dataToSend }, { headers: { Authorization: `bearer ${currToken}` } })
      .then(res => {
        const { message, token } = res.data;
        const newData = res.data.user;
        this.setState({ message });

        if (token) {
          localStorage.setItem('token', token);
        }

        if (newData) {
          this.setState({ user: { ...newData } });
        }

        this.setState({
          newEmail: '',
          currentPassword: '',
          newPassword: '',
          newPasswordConf: '',
          message
        });
      })
      .catch(error => {
        const { message } = error.response.data;
        this.setState({ message });
      });
  }

  render() {
    return (
      <Profile
        {...this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default ProfileContainer;
