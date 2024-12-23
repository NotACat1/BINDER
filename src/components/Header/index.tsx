import React, { useState, useEffect } from 'react';
import { ReactComponent as MenuIcon } from '@assets/icons/menu.svg';
import SideMenu from '@components/SideMenu';
import { ANCHORS } from '@utils/consts';
import styles from './index.module.scss';

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [activeAnchor, setActiveAnchor] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsVisible(currentScroll < lastScrollTop || currentScroll < 10);
      setLastScrollTop(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveAnchor(entry.target.id);
          }
        });
      },
      { threshold: 0.8 },
    );

    ANCHORS.forEach((anchor) => {
      const section = document.getElementById(anchor.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className={`${
          styles.header
        } ${isVisible ? styles.visible : styles.hidden} position-fixed top-0 w-100 bg-light shadow-sm`}
      >
        <div className="container d-flex justify-content-between align-items-center py-2">
          <a href="#home" className={styles.logo}>
            🏠 BINDER
          </a>
          <nav className="d-none d-md-flex gap-3">
            {ANCHORS.map((anchor) => (
              <a
                key={anchor.id}
                href={`#${anchor.id}`}
                className={`px-2 py-1 ${styles.navLink} ${
                  activeAnchor === anchor.id ? styles.active : ''
                }`}
              >
                {anchor.label}
              </a>
            ))}
          </nav>
          <button
            className={`d-md-none btn p-2 ${styles.menu}`}
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <MenuIcon />
          </button>
        </div>
      </header>
      {isMenuOpen && (
        <SideMenu
          anchors={ANCHORS}
          activeAnchor={activeAnchor}
          onClose={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;
