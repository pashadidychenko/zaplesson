import styles from "../styles/Layout.module.css";

function checkStyles(urlBg, colorBg) {
  if (urlBg) {
    return {
      background: `url(${urlBg})`,
      backgroundSize: "cover",
    };
  }
  if (colorBg) {
    return { backgroundColor: colorBg };
  }
  return null;
}

function Layout({ title, descr, urlBg, colorBg, children }) {
  return (
    <section className={styles.root} style={checkStyles(urlBg, colorBg)}>
      <div className={styles.wrapper}>
        <article>
          <div className={styles.title}>
            {title && <h3>{title}</h3>}
            <span className={styles.separator}></span>
          </div>
          <div className={(styles.desc, styles.full)}>
            {descr && <p>{descr}</p>}
          </div>
        </article>
      </div>
      {children}
    </section>
  );
}

export default Layout;
