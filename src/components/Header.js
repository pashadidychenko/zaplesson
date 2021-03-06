import styles from "../styles/Header.module.css";

function Header({ title, descr }) {
  return (
    <header className={styles.root}>
      <div className={styles.forest}></div>
      <div className={styles.container}>
        {title && <h1>{title}</h1>}
        {descr && <p>{descr}</p>}
      </div>
    </header>
  );
}

export default Header;
