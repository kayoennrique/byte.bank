import React from 'react';

export default function Icon({ icon, styles }) {
  return (
    <div className={styles.services}>
      <img src={icon.imagem} alt={icon.service} />
      <h5>{icon.service}</h5>
    </div>
  );
}
