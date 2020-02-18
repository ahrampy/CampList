import { connect } from "react-redux";
import { fetchSite, editSite } from "../../actions/site_actions";
import EditSiteForm from "./edit_site_form";
import { openModal } from "../../actions/modal";

const mapStateToProps = (state, ownProps) => {
  return {
    site: state.entities.sites[ownProps.match.params.siteId],
    authorId: state.session.user.id
  };
};

const mapDispatchToProps = dispatch => ({
  editSite: site => dispatch(editSite(site)),
  fetchSite: id => dispatch(fetchSite(id)),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditSiteForm);
