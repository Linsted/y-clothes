import { CATEGORIES } from "./constants";
import styles from "./Categories.module.scss";

export default function Categories() {
  return (
    <div className={styles.categoriesContainer}>
      {CATEGORIES.map(({ title, id, text }) => (
        <div key={id}>
          <div className={styles.categoryContainer}>
            <div>
              <h2> {title}</h2>
              <p>{text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
