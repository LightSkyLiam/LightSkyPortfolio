import styles from "./Logo.module.css";

function Logo() {
  return (
    <a href="/" className={styles.logo}>
      <strong>Liam</strong> Lasry
    </a>
  );
}

export default Logo;
