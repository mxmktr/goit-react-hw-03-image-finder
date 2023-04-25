import React, { Component } from 'react';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  onChange = ({ target }) => this.setState({ inputValue: target.value });

  render() {
    const { inputValue } = this.state;
    const { onSubmit } = this.props;
    return (
      <header className={css.searchbar}>
        <form
          className="form"
          onSubmit={event => {
            event.preventDefault();
            onSubmit(inputValue);
          }}
        >
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>
          <input
            className="input"
            type="text"
            autoComplete="off"
            name="input"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onChange}
          />
        </form>
      </header>
    );
  }
}
