import { useEffect, useState } from "preact/hooks";
import styles from "~/Home.module.css";

export const Home = () => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    setTitle("Hello, world!");
  }, []);

  return (
    <div>
      <h1 className={styles.homeTitle}>{title}</h1>
    </div>
  );
};
