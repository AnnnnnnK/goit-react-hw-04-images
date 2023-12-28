import css from 'components/Button/Button.module.css';

const Button = ({ onLoadMore }) => {
  return (
    <button onClick={onLoadMore} className={css.btn}>
      Load more
    </button>
  );
};

export default Button;
