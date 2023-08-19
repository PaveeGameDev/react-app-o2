import { ReactNode } from "react";
import styles from "./Button.module.css";

interface Props {
  children: ReactNode;
  type?: "primary" | "secondary" | "danger";
  onClicked: () => void;
}

function Button({ children, type = "primary", onClicked }: Props) {
  return (
    <button
      type="button"
      className={[styles.btn, styles["btn-" + type]].join(" ")}
      onClick={onClicked}
    >
      {children}
    </button>
  );
}

export default Button;
