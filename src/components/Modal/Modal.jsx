import { useEffect } from 'react';
import css from './modal.module.css';
import PropTypes from 'prop-types';

export default function Modal({ onModalClose, image }) {
  useEffect(() => {
      const keyClose = e => {
    if (e.code === 'Escape') {
     onModalClose();
    }
  };

   document.addEventListener('keydown', keyClose);
    return () => {
      document.removeEventListener('keydown', keyClose);
    };
  }, [onModalClose]);

  const handleBackDropClick = e => {
    if (e.target === e.currentTarget) {
     onModalClose();
    }
  };

 
    return (
      <div className={css.overlay} onClick={handleBackDropClick}>
        <div className={css.modal}>
          <img src={image} alt="" />
        </div>
      </div>
    );
  }
  
Modal.propTypes = {
  image: PropTypes.string.isRequired,
  onModalClose: PropTypes.func.isRequired,
};

