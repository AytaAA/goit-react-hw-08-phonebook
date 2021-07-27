import React from "react";
import style from "./Filter.module.css";
import { connect } from "react-redux";
import { resetFilter } from "../../redux/contacts/contacts-actions";
import { getFilter } from "../../redux/contacts/contacts-selectors";

const Filter = ({ value, onChange }) => (
  <label className={style.filter_label}>
    Find contacts by name
    <br />
    <input type="text" value={value} onChange={onChange} />
  </label>
);

const mapStateToProps = (state) => ({
  value: getFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(resetFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
