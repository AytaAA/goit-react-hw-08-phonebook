import React from "react";
import { connect } from "react-redux";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import { getIsAuthenticated } from "../../redux/auth/auth-selectors";
import styles from "../AppBar/AppBar.module.css";
import AppBarBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const AppBar = ({ isAuthenticated }) => (
  <header className={styles.header}>
    <AppBarBar position="static">
      <Toolbar className={styles.appbar}>
        <Navigation />
        {isAuthenticated ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </AppBarBar>
  </header>
);

const mapStateToProps = (state) => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
