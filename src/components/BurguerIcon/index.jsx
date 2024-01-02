import styles from './BurguerIcon.module.css';

export default function BurguerIcon() {
  return (
    <>
      <div data-test="menu-burguer" className={styles.hamburguer}>
        <div className={`${styles.burguer}`} />
        <div className={`${styles.burguer}`} />
        <div className={`${styles.burguer}`} />
      </div>
    </>
  );
}
