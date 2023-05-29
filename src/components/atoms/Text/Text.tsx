import React from "react";
import styles from "./Text.module.css";

type TagType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

type TextProps = {
  children: React.ReactNode;
  tag?: TagType;
  size?: string;
  className?: string;
};

export const Text: React.FC<TextProps> = ({
  tag = "article",
  children,
  ...props
}) => {
  return React.createElement(
    tag,
    { ...props, className: styles.Text },
    children
  );
};
