import React from 'react';
import styles from './Services.module.css';
import icons from './icons.json';
import Icon from './Icon';

export default function Services() {
  return (
    <section className="container">
      <div className={styles.top__detail} />
      <div className={styles.wrapper}>
        {icons.map((icon) => {
          return <Icon key={icon.service} styles={styles} icon={icon} />;
        })}
      </div>
      <div className={styles.detail__bottom} />
    </section>
  );
}
