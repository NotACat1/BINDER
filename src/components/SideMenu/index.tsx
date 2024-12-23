import React, { useEffect } from 'react';
import { ReactComponent as CloseIcon } from '@assets/icons/close.svg';
import styles from './index.module.scss';

interface SideMenuProps {
  anchors: { id: string; label: string }[];
  activeAnchor: string;
  onClose: () => void;
}

const SideMenu: React.FC<SideMenuProps> = ({
  anchors,
  onClose,
  activeAnchor,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div
      className={`${styles.overlay} d-flex justify-content-end`}
      onClick={onClose}
    >
      <div
        className={`${styles.menu} d-flex`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={`btn p-2 ${styles.closeButton}`}
          onClick={onClose}
          aria-label="Close menu"
        >
          <CloseIcon />
        </button>
        <nav className={styles.navLinks}>
          {anchors.map((anchor) => (
            <a
              key={anchor.id}
              href={`#${anchor.id}`}
              className={`fs-4 px-4 py-2 ${styles.navLink} ${
                activeAnchor === anchor.id ? styles.navLink_active : ''
              }`}
              onClick={onClose}
            >
              {anchor.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default SideMenu;
