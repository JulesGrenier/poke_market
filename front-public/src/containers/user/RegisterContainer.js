import React, { Component } from 'react';
import axios from 'axios';
import Register from '../../components/user/Register';

class RegisterContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      message: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    document.title = "Register";
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
      firstname,
      lastname,
      email,
      password
    } = this.state;

    if (firstname.length < 1) {
      this.setState({
        message: {
          text: "You need to provide your first name",
          type: "error"
        }
      });
      return null;
    }
    if (lastname.length < 1) {
      this.setState({
        message: {
          text: "You need to provide your last name",
          type: "error"
        }
      });
      return null;
    }
    if (email.length < 1) {
      this.setState({
        message: {
          text: "You need to provide an email address",
          type: "error"
        }
      });
      return null;
    }
    if (password.length < 1) {
      this.setState({
        message: {
          text: "You need to provide a password",
          type: "error"
        }
      });
      return null;
    }

    axios.post("http://localhost:4000/api/users/register", {
      firstname,
      lastname,
      email,
      password
    })
    .then(res => {
      this.setState({ message: res.data.message})
    })

    this.props.history.push('/api/login');
  }

  render() {
    return (
      <Register
        {...this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default RegisterContainer;