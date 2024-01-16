import React, { Component } from 'react';
import s from './ContactForm.module.css';
export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.handleAddContact(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={s.Form}>
        <p className={s.NameImput}>Name</p>
        <input
          type="text"
          required
          onChange={this.handleChange}
          name="name"
          value={this.state.name}
          className={s.Input}
          placeholder="Enter your first and last name"
        />

        <p className={s.NameImput}>Number</p>
        <input
          type="tel"
          name="number"
          required
          onChange={this.handleChange}
          value={this.state.number}
          className={s.Input}
          placeholder="Enter your phone number"
        />
        <button type="submit" className={s.BtnSend}>
          Add contact
        </button>
      </form>
    );
  }
}
