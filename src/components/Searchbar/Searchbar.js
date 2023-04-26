import React, { Component } from 'react';

export class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  onChange = ({ target }) => this.setState({ inputValue: target.value });

  render() {
    const { inputValue } = this.state;
    const { onSubmit } = this.props;
    return (
      <header className="Searchbar">
        <form
          className="SearchForm"
          onSubmit={event => {
            event.preventDefault();
            onSubmit(inputValue);
          }}
        >
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>
          <input
            className="SearchForm-input"
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
