import { CATEGORIES } from "./constants";
import styles from "./Categories.module.scss";

import CategoryItem from "../CategoryItem";

export default function Categories() {
  return (
    <ul className={styles.categoriesContainer}>
      {CATEGORIES.map(({ title, id, text, imageUrl }) => (
        <CategoryItem key={id} title={title} text={text} imageUrl={imageUrl} />
      ))}
    </ul>
  );
}
