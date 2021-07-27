import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../../Components/AuthNav/AuthNav.module.css";

import Button from "@material-ui/core/Button";

const AuthNav = () => (
  <div>
    <NavLink to="/register" className={styles.link}>
      <Button variant="contained" color="primary" className={styles.button}>
        Register
      </Button>
    </NavLink>
    <NavLink to="/login" className={styles.link}>
      <Button variant="contained" color="primary" className={styles.button}>
        Login
      </Button>
    </NavLink>
  </div>
);

export default AuthNav;
