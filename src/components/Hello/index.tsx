import React from 'react';
import backgroundImage from '@assets/projects/8.jpg';
import styles from './index.module.scss';

const Hello: React.FC = () => {
  return (
    <section
      id="home"
      className={`${styles.parallax} d-flex justify-content-center align-items-center`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.overlay}></div>
      <div className={`${styles.text} text-center col-12 col-md-6`}>
        <h1 className="mb-4">
          Добро пожаловать в мир качественного строительства и ремонта!
        </h1>
        <p className="mb-0">
          Мы создаем комфорт и уют в вашем доме. Наша миссия – воплотить ваши
          идеи в жизнь с гарантией высокого качества и профессионального
          подхода.
        </p>
      </div>
    </section>
  );
};

export default Hello;
