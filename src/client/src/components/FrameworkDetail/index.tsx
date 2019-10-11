import * as React from "react";
import styles from "./styles.module.css";
import { getKendoka } from "../../utils/getSvgUrl";
import Kendoka from "../../components/Kendoka";
import { IOption } from "../../types/option";
import {
  KENDOKAS
} from "../../utils/constants";

interface IProps {
  framework: IOption;
}

const FrameworkDetail = ({ framework }: IProps) => {
  const findKendoka = (
    name: string = ""
  ) => {
    switch(name.toLocaleLowerCase()) {
      case "angular":
        return KENDOKAS.RED;
      case "react":
        return KENDOKAS.BLUE;
      case "vue":
        return KENDOKAS.GREEN;
      default:
        return KENDOKAS.ORANGE;
    }
  };
  
  return (
    <React.Fragment>
      <div className={styles['details-wrap']}>
       <h1 className={styles['details-header']}>{framework.title}</h1>
       <p className={styles['framework-description']}>{framework.longDescription}</p>
       <div className={styles['details-spacer']} />
       <Kendoka svgUrl={getKendoka(findKendoka(framework.internalName))} />
      </div>
    </React.Fragment>
  );
};

export default FrameworkDetail;
