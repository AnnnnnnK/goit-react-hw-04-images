import css from 'components/Searchbar/Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  return (
    <header className={css.header}>
      <form onSubmit={onSubmit} className={css.form}>
        <input
          className={css.input}
          name="search"
          type="text"
          placeholder="Search images and photos"
        />
        <button type="submit" className={css.btn}>
          <span>Search</span>
        </button>
      </form>
    </header>
  );
};

export default Searchbar;
