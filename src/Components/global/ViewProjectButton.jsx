import styles from "./PrimaryButton.module.css";

function ViewProjectButton({ message, link }) {
  return (
    <button
      className={styles.primaryButton}
      onClick={() => window.open(link, "_blank")}
    >
      {message}
    </button>
  );
}

export default ViewProjectButton;
