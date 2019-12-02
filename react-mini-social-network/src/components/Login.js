import React, { useState, Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import { connect } from 'react-redux';
import { loginUser } from '../actions/index';
import PropTypes from 'prop-types';


class Login extends Component {
  // const[email, setEmail] = useState("");
  // const[password, setPassword] = useState("");
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/posts');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/posts');
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    // e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  // validateForm() {
  //   return email.length > 0 && password.length > 0;
  // }

  // handleSubmit(event) {
  //   event.preventDefault();
  // }
  render() {
    const {errors} = this.state;
    return (
      <div className="Login container">
        <form onSubmit={this.onSubmit}>
          <FormGroup controlId="email">
            <label>Email</label>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.onChange}
            />
          </FormGroup>
          <FormGroup controlId="password">
            <label>Password</label>
            <FormControl
              value={this.state.password}
              onChange={this.onChange}
              type="password"
            />
          </FormGroup>
          <Button block type="submit">
            Login
          </Button>
        </form>
      </div>
    );

  }
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  // errors: PropTypes.object.isRequired
};


const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);
