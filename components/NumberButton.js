import React, { useLayoutEffect, useRef } from "react";
import styles from "./NumberButton.module.css";

export default function NumberButton({ label, real, onClick, classes = [] }) {
  const classNames = [styles.button, ...classes.map((cls) => styles[cls])];

  return (
    <button
      onClick={() => onClick?.({ label, real })}
      className={classNames.join(" ")}
    >
      <span>{label}</span>
    </button>
  );
}
