import React from "react";
import { connect } from "react-redux";
import { logOut } from "../../redux/auth/auth-operations";
import { getUsername } from "../../redux/auth/auth-selectors";
import Button from "@material-ui/core/Button";

import styles from "../UserMenu/UserMenu.module.css";

const UserMenu = ({ name, onLogout }) => (
  <div className={styles.container}>
    <span className={styles.name}>Welcome, {name}</span>
    <Button
      onClick={onLogout}
      variant="contained"
      color="primary"
      className={styles.logout}
    >
      Log Out
    </Button>
  </div>
);
const mapStateToProps = (state) => ({
  name: getUsername(state),
});

const mapDispatchToProps = {
  onLogout: logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
