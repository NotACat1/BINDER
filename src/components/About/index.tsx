import React from 'react';
import Image2 from '@assets/projects/11.jpg';
import Image1 from '@assets/projects/13.jpg';
import styles from './index.module.scss';

const CompanySection: React.FC = () => {
  return (
    <section className="container py-5" id="about">
      <div className="row align-items-center">
        {/* Информация о компании */}
        <div className={`col-lg-6 align-self-start`}>
          <h2 className="mb-4 text-center text-md-start">О нашей компании</h2>
          <p className="mb-2 text-justify text-md-start">
            Наша строительно-ремонтная компания уже более 10 лет радует клиентов
            качественными услугами. Мы используем современные технологии и
            материалы, чтобы каждый проект был долговечным и эстетически
            привлекательным.
          </p>
          <ul className={`${styles.features} text-justify text-md-start`}>
            <li>Опыт работы – более 10 лет.</li>
            <li>Индивидуальный подход к каждому проекту.</li>
            <li>Использование качественных материалов и оборудования.</li>
            <li>Своевременное выполнение работ.</li>
            <li>Гарантия на все виды услуг.</li>
          </ul>
        </div>
        {/* Фотоколлаж */}
        <div className={`col-lg-6 ${styles.collage}`}>
          <div className={styles.photoContainer}>
            <img
              src={Image1}
              alt="Фото 1"
              className={`${styles.photo} ${styles.photo1}`}
            />
            <img
              src={Image2}
              alt="Фото 2"
              className={`${styles.photo} ${styles.photo2}`}
            />
            <div className={styles.dotMatrix}>
              {Array.from({ length: 9 }).map((_, rowIndex) => (
                <div key={rowIndex} className={styles.row}>
                  {Array.from({ length: 9 }).map((_, colIndex) => (
                    <div key={colIndex} className={styles.dot}></div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;
