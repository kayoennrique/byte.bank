import React from 'react';

export default function Icon({ icon, styles }) {
  return (
    <div className={styles.services}>
      <img src={icon.image} alt={icon.service} />
      <h5>{icon.service}</h5>
    </div>
  );
}
