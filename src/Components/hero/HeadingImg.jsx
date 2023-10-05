import styles from "./HeadingImg.module.css";

function HeadingImg() {
  return (
    <div className={`container col-6 ${styles.imageContainer}`}>
      <img src="..\src\assets\Hero-Image.png" />
    </div>
  );
}

export default HeadingImg;
