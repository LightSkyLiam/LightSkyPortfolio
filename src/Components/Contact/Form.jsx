import styles from "./Form.module.css";
import { usePOST } from "../hooks/usePOST";
import { useEffect } from "react";
import PrimaryButton from "../Global/PrimaryButton";
import ErrorMessage from "../global/ErrorMessage";
import Spinner from "../global/Spinner";

const WEBHOOK = `https://hook.eu1.make.com/lmqdklvesb7m98i9img8kyekkgliki2k`;
function Form() {
  const [error, isLoading, sendData, success] = usePOST(WEBHOOK);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries([...new FormData(e.target)]);
    sendData(data);
  };
  useEffect(() => {
    if (success) window.location = `/thank-you`;
  }, [success]);
  return (
    <>
      {isLoading && <Spinner />}
      {error && <ErrorMessage message="There Was An Error, Please Try Again" />}
      {!isLoading && (
        <form
          onSubmit={handleSubmit}
          className={`${styles.form} p-3 d-flex flex-column  align-items-center`}
        >
          <input
            className={styles.input}
            placeholder="Name"
            required
            id="name"
            type="text"
            name="name"
          ></input>
          <input
            className={styles.input}
            placeholder="Email"
            required
            id="email"
            type="email"
            name="email"
          ></input>
          <input
            className={styles.input}
            placeholder="Phone"
            required
            id="phone"
            type="tel"
            name="phone"
          ></input>
          {!isLoading && <PrimaryButton type="submit" message="Let's Talk" />}
        </form>
      )}
    </>
  );
}

export default Form;
