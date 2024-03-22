import styles from "./error.module.css";

export default function Error({ children }) {
  return (
    <p className={styles.text}>
      <b>{children}</b>
    </p>
  );
}
