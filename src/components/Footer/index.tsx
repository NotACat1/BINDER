import React from 'react';
import { CONTACTS, SOCIALS_LINKS, MESSAGE } from '@utils/consts';
import formatPhoneNumber from '@utils/formatPhoneNumber';
import styles from './index.module.scss';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light py-4 mt-4">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Контакты */}
          <div className="col-md-6 mb-4">
            <h4 className="mb-3">Контакты</h4>
            <p className={`${styles.contact} mb-2`}>
              <strong>Телефон:</strong>{' '}
              <a href={`tel:${formatPhoneNumber(CONTACTS.phone)}`}>
                {CONTACTS.phone}
              </a>
            </p>
            <p className={`${styles.contact} mb-0`}>
              <strong>Email:</strong>{' '}
              <a
                href={`mailto:${CONTACTS.email}?subject=${encodeURIComponent('Вопрос')}&body=${MESSAGE}`}
              >
                {CONTACTS.email}
              </a>
            </p>
          </div>

          {/* Социальные сети */}
          <div className="col-md-6 mb-4 text-center text-md-end">
            <h4 className="mb-3">Социальные сети</h4>
            <div className="d-flex justify-content-center justify-content-md-end">
              {SOCIALS_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.socialIcon} ms-2`}
                  title={social.message}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <p className={`${styles.text} mb-0`}>
            © {currentYear} Строительная компания. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
