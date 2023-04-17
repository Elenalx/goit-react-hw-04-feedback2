import React from 'react';
import PropTypes from 'prop-types';
import css from './button.module.css';

export const Button = ({ onLoadMore }) => {
    return (
      <div className={css.button}>
         <button type="button" className={css.buttonLoader} onClick={onLoadMore}>Load more</button>
     </div>
  );
};


Button.propTypes = {
  onClick:PropTypes.func.isRequired,
}