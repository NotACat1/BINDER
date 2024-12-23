import React, { useState } from 'react';
import { CONTACTS, SOCIALS_LINKS, MESSAGE } from '@utils/consts';
import formatPhoneNumber from '@utils/formatPhoneNumber';
import styles from './index.module.scss';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({ success: false, error: '' });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const FORMSPREE_URL = process.env.REACT_APP_FORMSPREE_URL || '';

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false }); // Сбрасываем ошибки при изменении
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, message } = formState;

    // Проверка полей на заполненность
    const newErrors = {
      name: !name,
      email: !email || !validateEmail(email),
      message: !message,
    };
    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error)) {
      setStatus({
        success: false,
        error: 'Пожалуйста, заполните все поля корректно.',
      });
      return;
    }

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setStatus({ success: true, error: '' });
        setFormState({ name: '', email: '', message: '' });
      } else {
        const errorData = await response.json();
        setStatus({
          success: false,
          error:
            errorData.error ||
            'Не удалось отправить сообщение. Попробуйте позже.',
        });
      }
    } catch (error) {
      setStatus({
        success: false,
        error: 'Произошла ошибка при отправке сообщения.',
      });
    }
  };

  return (
    <section className={`container p-5 ${styles.contactSection}`} id="contact">
      <div className="row">
        <div className={`col-12 col-md-6 mb-4 mb-md-0 ${styles.contactInfo}`}>
          <h2 className="mb-4 text-center text-md-start">Свяжитесь с нами</h2>
          <p className={`${styles.contact} mb-2 text-center text-md-start`}>
            <strong>Телефон:</strong>{' '}
            <a href={`tel:${formatPhoneNumber(CONTACTS.phone)}`}>
              {CONTACTS.phone}
            </a>
          </p>
          <p className={`${styles.contact} mb-2 text-center text-md-start`}>
            <strong>Email:</strong>{' '}
            <a
              href={`mailto:${CONTACTS.email}?subject=${encodeURIComponent('Вопрос')}&body=${MESSAGE}`}
            >
              {CONTACTS.email}
            </a>
          </p>
          <div className="d-flex justify-content-center justify-content-md-start">
            {SOCIALS_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.social} ms-2`}
                title={social.message}
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>
        <div className={`col-12 col-md-6 ${styles.contactForm}`}>
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-3">
              <label htmlFor="name" className="mb-1">
                Ваше имя
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Введите ваше имя"
                className={`form-control ${errors.name ? styles.errorInput : ''}`}
                value={formState.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="mb-1">
                Ваш Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Введите ваш email"
                className={`form-control ${errors.email ? styles.errorInput : ''}`}
                value={formState.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="mb-1">
                Сообщение
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Введите ваше сообщение"
                className={`form-control ${errors.message ? styles.errorInput : ''}`}
                rows={4}
                value={formState.message}
                onChange={handleInputChange}
              />
            </div>
            <button
              type="submit"
              className={`btn btn-primary px-2 py-2 ${styles.submitButton}`}
            >
              Отправить
            </button>
          </form>
          {status.error && (
            <p className={`mt-2 mb-0 ${styles.error}`}>{status.error}</p>
          )}
          {status.success && (
            <p className={`mt-2 mb-0 ${styles.success}`}>
              Сообщение успешно отправлено!
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
