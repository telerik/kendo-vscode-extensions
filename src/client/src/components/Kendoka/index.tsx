import * as React from "react";
import styles from "./styles.module.css";

interface IProps {
  svgUrl?: string;
}

const Kendoka = ({
  svgUrl
}: IProps) => {
  return (
    <React.Fragment>
       <img className={styles.icon} src={svgUrl} alt="" />
    </React.Fragment>
  );
};

export default Kendoka;
