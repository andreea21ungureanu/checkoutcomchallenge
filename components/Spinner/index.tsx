import styles from "../Spinner/Spinner.module.css";

export default function Spinner() {
  return <div aria-label={"Loading"} className={styles.loader}></div>;
}
