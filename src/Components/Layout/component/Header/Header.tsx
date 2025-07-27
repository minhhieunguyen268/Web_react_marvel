import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import logo from "~/assets/images/logo.png";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("navbar")}>
      <div className={cx("navbar__container")}>
        {/* Logo */}
        <div className={cx("navbar__logo")}>
          <img
            src={logo}
            alt="Marvel Logo"
            className={cx("navbar__logo-img")}
          />
          <span className={cx("navbar__logo-text")}>MARVEL HEROES</span>
        </div>

        

        {/* Search */}
        <div className={cx("navbar__search")}>
          <input
            type="text"
            placeholder="Search heroes..."
            className={cx("navbar__search-input")}
          />
        </div>

        {/* Menu */}
        <nav className={cx("navbar__menu")}>
          <a href="#heroes" className={cx("navbar__menu-item")}>
            Heroes
          </a>
          <a href="#gallery" className={cx("navbar__menu-item")}>
            Gallery
          </a>
          <a href="#universe" className={cx("navbar__menu-item")}>
            Universe
          </a>
          <a href="#contact" className={cx("navbar__menu-item")}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
export default Header;
