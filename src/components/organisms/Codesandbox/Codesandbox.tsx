import React from "react";
import styles from "./Codesandbox.module.css";

type CodesandboxProps = {
  embedHash: string;
};

const CODESANDBOX_CONFIG = {
  title: "",
  allow:
    "accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",
  sandbox:
    "allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts",
};

export const Codesandbox: React.FC<CodesandboxProps> = ({ embedHash }) => {
  return (
    <iframe
      src={`https://codesandbox.io/embed/${embedHash}?fontsize=14&hidenavigation=1&theme=dark`}
      className={styles.Codesandbox}
      {...CODESANDBOX_CONFIG}
    ></iframe>
  );
};
