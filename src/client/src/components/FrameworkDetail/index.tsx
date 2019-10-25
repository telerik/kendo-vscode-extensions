import * as React from "react";
import styles from "./styles.module.css";
import { getKendoka } from "../../utils/getSvgUrl";
import Kendoka from "../../components/Kendoka";
import { IOption } from "../../types/option";
import {
  KENDOKAS
} from "../../utils/constants";

interface IProps {
  name: string;
  title: string;
  description: string;
}

const FrameworkDetail = ({ name, title, description }: IProps) => {
  const findKendoka = (
    name: string = ""
  ) => {
    switch(name.toLocaleLowerCase()) {
      case "kendoangular":
        return KENDOKAS.RED;
      case "kendoreact":
        return KENDOKAS.BLUE;
      case "kendovue":
        return KENDOKAS.GREEN;
      default:
        return KENDOKAS.ORANGE;
    }
  };
  
  return (
    <React.Fragment>
      <div className={styles['details-wrap']}>
       <h2 className={styles['details-header']}>{title}</h2>
       <p className={styles['framework-description']}>{description}</p>
       <div className={styles['details-spacer']} />
       <Kendoka svgUrl={getKendoka(findKendoka(name))} />
      </div>
    </React.Fragment>
  );
};

export default FrameworkDetail;
