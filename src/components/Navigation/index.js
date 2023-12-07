import { Link, Outlet } from "react-router-dom";

import styles from "./Navigation.module.scss";

import { ReactComponent as Logo } from "../../assets/086 crown.svg";

export default function Navigation() {
  return (
    <>
      <header className={styles.navigation}>
        <Link to="/" className={styles.logoContainer}>
          <Logo />
        </Link>

        <nav className={styles.navLinksContainer}>
          <Link className={styles.navLink} to="/shop">
            SHOP
          </Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
