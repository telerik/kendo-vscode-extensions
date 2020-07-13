import classnames from "classnames";
import * as React from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";

const StepsLink = ({
  text,
  visitedCheck,
  path,
  disabled,
  isSelected,
  stepIndex
}: {
  text: string;
  visitedCheck: boolean;
  path: string;
  disabled: boolean;
  isSelected: boolean;
  stepIndex;
}) => {
  return (
    <span
      className={styles.container}
    >
      <span className={classnames(
                        styles.step,
                        {
                          [styles.selected]: isSelected
                        }
                      )}>{stepIndex + 1}</span>
      <span
        className={classnames(styles.text, {
          [styles.textSelected]: isSelected
        })}
      >
        {text}
      </span>
    </span>
  );
};

export default StepsLink;
