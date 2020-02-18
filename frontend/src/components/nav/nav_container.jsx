import { connect } from "react-redux";
import Nav from "./nav";
import { logout } from "../../actions/session_actions";
import { openModal } from "../../actions/modal";

const mapStateToProps = state => {
  let userId;
  if (state.session.isAuthenticated) {
    userId = state.session.user.id;
  }

  return {
    loggedIn: state.session.isAuthenticated,
    userId
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
