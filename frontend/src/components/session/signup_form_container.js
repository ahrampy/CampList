import React from "react";
import { connect } from "react-redux";
import { signup, login } from "../../actions/session_actions";
import SignupForm from "./signup_form";
import { openModal, closeModal } from "../../actions/modal";

const mapStateToProps = state => {
  return {
    loggedIn: state.session.isAuthenticated,
    errors: state.errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: user => dispatch(signup(user)),
    login: user => dispatch(login(user)),
    closeModal: () => dispatch(closeModal()),
    otherForm: (
      <div>
        Have an account?
        <button
          id="entry-form-switch-button"
          onClick={() => dispatch(openModal("login"))}
        >
          Log In
        </button>
      </div>
    )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
