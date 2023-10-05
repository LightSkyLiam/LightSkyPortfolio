import styles from "./ErrorMessage.module.css";
import PrimaryButton from "./PrimaryButton";

function Error({ message, onClick, tryAgain = false }) {
  return (
    <div className={styles.error}>
      <p>⚠️{message}</p>
      {tryAgain && <PrimaryButton message="Try Again" onClick={onClick} />}
    </div>
  );
}

export default Error;
