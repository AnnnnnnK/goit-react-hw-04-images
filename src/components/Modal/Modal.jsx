import { useEffect } from 'react';
import css from 'components/Modal/Modal.module.css';

import React from 'react';

const Modal = ({ hideModal, largeImgUrl, tag }) => {
  useEffect(() => {
    const handleEsc = e => {
      if (e.code === 'Escape') hideModal();
    };

    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [hideModal]);

  const onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      hideModal();
    }
  };

  return (
    <div className={css.modal} onClick={onBackdropClick}>
      <div className={css.modal_content}>
        <img src={largeImgUrl} alt={tag} />
      </div>
    </div>
  );
};

export default Modal;
