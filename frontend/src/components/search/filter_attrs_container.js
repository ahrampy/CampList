import { connect } from "react-redux";
import FilterAttrs from "./filter_attrs";

const mSTP = (state, ownProps) => ({
  attrs: ownProps.attrs,
  onCheck: ownProps.onCheck,
  unCheck: ownProps.unCheck
});

export default connect(mSTP)(FilterAttrs);
