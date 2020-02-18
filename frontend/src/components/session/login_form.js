import React from "react";
import { withRouter } from "react-router-dom";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn === true) {
      this.props.closeModal();
    }

    this.setState({ errors: nextProps.errors });
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user);
  }

  handleDemo(e) {
    e.preventDefault();
    this.setState({ email: "camper@demo.com", password: "password" });
    this.props.login({ email: "camper@demo.com", password: "password" });
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>{this.state.errors[error]}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="entry-form-container">
        <form onSubmit={this.handleSubmit} className="entry-form">
          <h2>Log In</h2>
          <div className="entry-form-input-container">
            <br />
            <input
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
              placeholder="Email"
            />
            <br />
            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Password"
            />
            <br />
            <input type="submit" value="Log In" className="entry-form-button" />
            <div className="entry-form-errors">{this.renderErrors()}</div>
            <div className="entry-form-demo-button-container">
              <button
                className="entry-form-button"
                id="entry-form-demo-button"
                onClick={this.handleDemo}
              >
                Demo
              </button>
            </div>
          </div>
        </form>
        <div className="entry-form-switch-button-container">
          <h3>{this.props.otherForm}</h3>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);
