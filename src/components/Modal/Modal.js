import React from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

export function Modal({ imageURL, onClick }) {
  return (
    <div className={css.overlay} onClick={onClick}>
      <div className={css.modal}>
        <img src={imageURL} alt="Nice big pictures!" />
      </div>
    </div>
  );
}

Modal.propTypes = {
  imageURL: PropTypes.string.isRequired,
};
