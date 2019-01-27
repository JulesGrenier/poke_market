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
  }

  componentWillMount() {
    document.title = 'Login';
    window.scroll(0, 0);
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

    axios.post('http://localhost:4000/api/users/login', {
      email,
      password
    })
      .then(res => {
        this.setState({ message: res.data.message });
      })
      .catch(error => this.setState({
        message: error.message.text,
        type: error.message.type
      }));

    return null;
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
