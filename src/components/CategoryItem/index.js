import styles from "./CategoryItem.module.scss";

export default function CategoryItem({ title, text, imageUrl }) {
  return (
    <li className={styles.categoryContainer}>
      <div
        className={styles.backgroundImage}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className={styles.categoryBodyContainer}>
        <h2> {title}</h2>
        <p>{text}</p>
      </div>
    </li>
  );
}
