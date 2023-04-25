import css from './Button.module.css';

export const Button = ({ onClickBtn }) => {
  return (
    <button type="button" onClick={onClickBtn} className={css.onClick}>
      Load more
    </button>
  );
};
