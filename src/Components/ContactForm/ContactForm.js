import React, { Component } from "react";
import style from "./ContactForm.module.css";
import { connect } from "react-redux";
import { addContact } from "../../redux/contacts/contacts-operations";
import { getItems } from "../../redux/contacts/contacts-selectors";
import styles from "./ContactForm.module.css";
import Button from "@material-ui/core/Button";

class ContactForm extends Component {
  static defaultProps = {
    name: "",
    number: "",
  };

  state = {
    name: this.props.name,
    number: this.props.number,
  };

  onInputChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  addNoRepeatContact = (state, contacts) => {
    const { name, number } = state;
    if (
      contacts.some(
        (contacts) => contacts.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }
    if (contacts.some((contacts) => contacts.number === number)) {
      alert(`${number} is already in contacts`);
      return;
    }

    this.props.onSubmit(state);
    this.reset();
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    const { contacts } = this.props;
    this.addNoRepeatContact(this.state, contacts);
  };

  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };
  render() {
    return (
      <div className={style.form_container}>
        <form onSubmit={this.onHandleSubmit} className={styles.form}>
          <h2 className={style.form_label}>Name</h2>
          <input
            className={style.input}
            onChange={this.onInputChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={this.state.name}
          />
          <h2 className={style.form_label}>Number</h2>
          <input
            className={style.input}
            onChange={this.onInputChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={this.state.number}
          />
          <br />
          <Button
            variant="contained"
            color="primary"
            className={styles.button}
            type="submit"
          >
            Add contact
          </Button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  contacts: getItems(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: ({ name, number }) => dispatch(addContact({ name, number })),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
