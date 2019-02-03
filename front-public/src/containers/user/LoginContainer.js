import React, { Component } from 'react';
import axios from 'axios';
import Login from '../../components/user/Login';

class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      message: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkUserToken = this.checkUserToken.bind(this);
  }

  componentWillMount() {
    document.title = 'Login';
    window.scroll(0, 0);
    this.checkUserToken();
  }

  checkUserToken() {
    const token = localStorage.getItem('token');
    if (token) {
      const { history } = this.props;
      return history.push('/profile');
    }
    return null;
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
      message: {}
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const {
      email,
      password
    } = this.state;

    if (email.length < 1 || password.length < 1) {
      this.setState({
        message: {
          text: 'Email or password is incorrect',
          type: 'error'
        }
      });
      return null;
    }

    return axios.post('http://localhost:4000/auth/login', {
      email,
      password
    })
      .then(res => {
        const { message, token } = res.data;
        this.setState({ message });

        if (token) {
          localStorage.setItem('token', token);
          setTimeout(() => {
            const { history } = this.props;
            return history.push('/profile');
          }, 500);
        }
      })
      .catch(error => {
        const { message } = error.response.data;
        this.setState({ message });
      });
  }

  render() {
    return (
      <Login
        {...this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default LoginContainer;
