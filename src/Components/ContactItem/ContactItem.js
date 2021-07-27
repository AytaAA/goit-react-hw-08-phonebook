import React from "react";
import style from "./ContactItem.module.css";
import Button from "@material-ui/core/Button";

const ContactItem = ({ id, name, number, deleteContact }) => (
  <li key={id} className={style.list_item}>
    <span className={style.new_item}>
      {name}: {number}
    </span>
    <Button
      variant="contained"
      color="primary"
      className={style.delete_btn}
      onClick={() => deleteContact(id)}
    >
      Delete
    </Button>
  </li>
);

export default ContactItem;
