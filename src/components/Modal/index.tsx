import React, { useEffect } from 'react';
import { ReactComponent as CloseIcon } from '@assets/icons/close.svg';
import styles from './index.module.scss';

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const Modal: React.FC<IModalProps> = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={`${styles.modalOverlay} d-flex justify-content-center align-items-center`}
      onClick={onClose}
      role="presentation"
    >
      <div
        className={`${styles.modalContent} p-4 d-flex`}
        onClick={(e) => e.stopPropagation()}
        role="presentation"
      >
        <button
          className={`btn p-2 ${styles.closeButton}`}
          onClick={onClose}
          aria-label="Close modal"
        >
          <CloseIcon />
        </button>
        {title && <h2 className={styles.modalTitle}>{title}</h2>}
        <div className={styles.modalBody}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
