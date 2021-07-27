import React, { Component } from "react";
import { connect } from "react-redux";
import Container from "../../Components/Container";
import ContactsList from "../../Components/ContactList";
import ContactForm from "../../Components/ContactForm";
import Filter from "../../Components/Filter";
import { contactFetch } from "../../redux/contacts/contacts-operations";
import { getLoading } from "../../redux/contacts/contacts-selectors";
import styles from "../ContactsView/ContactsView.module.css";
import CircularProgress from "@material-ui/core/CircularProgress";

class ContactsView extends Component {
  // state = {
  //     showModal: false,
  // }

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <Container>
        <div className={styles.barStyles}>
          <ContactForm />
          <Filter />
          <ContactsList />

          {this.props.isLoadingContacts && <CircularProgress />}
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoadingContacts: getLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchContacts: () => dispatch(contactFetch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
