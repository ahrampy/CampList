import React from "react";
import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import LoginForm from "./login_form";
import { openModal, closeModal } from "../../actions/modal";

const mapStateToProps = state => {
  return {
    errors: state.errors.session,
    loggedIn: state.session.isAuthenticated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(login(user)),
    closeModal: () => dispatch(closeModal()),
    otherForm: (
      <div>
        New to CampList?
        <button
          id="entry-form-switch-button"
          onClick={() => dispatch(openModal("signup"))}
        >
          Sign Up
        </button>
      </div>
    )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
