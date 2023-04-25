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
      <header className="searchbar">
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

/* export function Searchbar({ onSubmit, onChange }) {
  return (
    <header className="searchbar">
      <form className="form" onSubmit={onSubmit}>
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
          onChange={onChange}
        />
      </form>
    </header>
  );
}
 */
