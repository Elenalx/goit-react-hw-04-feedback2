import { useState } from 'react';

import PropTypes from 'prop-types';
import css from './search-bar.module.css';

export default function Searchbar({ handleSearch }) {
  const [value, setValue] = useState('');
  

  const handleChange = e => {
    setValue(e.currentTarget.value);
  }
  

  const handleSubmit = e => {
    e.preventDefault();
    handleSearch(value);
    reset();
  };

 const reset = () => {
    setValue('');
  };

  return (
      <header className={css.searchbar}>
        <form className={css.saerchForm} onSubmit={handleSubmit}>
          <button type="submit" className={css.buttonValue}>
            <span style={{marginRight:8, width:"20", height:"20"}}>Search</span>
          </button>

          <input className={css.inputValue}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={value}
            onChange={handleChange}
          />
        </form>
      </header>
    );
}
Searchbar.propTypes = {
  handleSearch:PropTypes.func.isRequired,
}
