import React from 'react';
import { SERVICES } from '@utils/consts';
import styles from './index.module.scss';

const Services: React.FC = () => {
  return (
    <section className="container py-5 text-center" id="services">
      <h2 className="mb-4">Наши услуги</h2>
      <ul
        className="d-flex flex-wrap justify-content-center gap-4"
        style={{ paddingLeft: '0' }}
      >
        {SERVICES.map((service) => (
          <li
            className={`${styles.card} card p-4 border-0 d-flex flex-column`}
            key={service.title}
          >
            <service.icon className={`${styles.icon} mx-auto mb-3`} />
            <h3 className="text-primary mb-2">{service.title}</h3>
            <p className="text-muted flex-grow-1">{service.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Services;
