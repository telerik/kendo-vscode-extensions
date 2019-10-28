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
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();
  };
  return (
    <Link
      tabIndex={-1}
      to={path}
      onClick={handleClick}
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
    </Link>
  );
};

export default StepsLink;
