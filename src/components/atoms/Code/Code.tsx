import React from "react";
import styles from "./Code.module.css";

type CodeProps = {
  inline?: boolean;
  children: string;
};

export const Code: React.FC<CodeProps> = ({ inline = false, children }) => {
  return (
    <span className={`${styles.Code} ${inline && "inline"}`}>{children}</span>
  );
};
