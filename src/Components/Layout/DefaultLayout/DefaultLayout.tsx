import styles from "./DefaultLayout.module.scss";
import classNames from "classnames/bind";
import type { ReactNode } from "react";

const cx = classNames.bind(styles);

interface DefaultLayoutProps {
  children: ReactNode;
}

function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("content")}>{children}</div>
        <div className={cx("bellow-content")}>
          <h2 style={{ color: "#fff", textAlign: "center", paddingTop: "10px" }}>Marvel Heroes</h2>
          <p style={{ color: "#fff", textAlign: "center", paddingTop: "10px" }}>
            Meet the earth protectors. They are the ones who save the world from evil forces and protect humanity from threats. Each hero has unique abilities and stories, making them beloved by fans around the world.
          </p>
          <a href="google.com" style={{ color: "#fff", textAlign: "center", paddingTop: "10px", display: "block" }}>Learn more</a>
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
