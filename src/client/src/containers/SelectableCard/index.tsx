import classNames from "classnames";
import * as React from "react";
import { connect } from "react-redux";

import CardBody from "../../components/CardBody";
import CardTitle from "../../components/CardTitle";
import DependencyInfo from "../DependencyInfo";
import { ReactComponent as Check } from "../../assets/check.svg";
import selector from "../../assets/selector.svg";

import grid from "../../css/grid.module.css";
import styles from "./styles.module.css";

// import Check from "../../assets/check.svg";

import { IOption } from "../../types/option";
import { FormattedMessage } from "react-intl";
import { ROUTES } from "../../utils/constants";
import { getSvg } from "../../utils/getSvgUrl";

import { AppState } from "../../reducers";

const SelectableCard = ({
  iconPath,
  iconStyles,
  title,
  body,
  selected,
  cardNumber,
  onCardClick,
  option,
  onDetailsClick,
  clickCount,
  disabled,
  isFrameworkSelection,
  isPreview
}: {
  iconPath: string | undefined;
  iconStyles: string;
  title: string;
  body: string;
  selected: boolean;
  option: IOption;
  cardNumber: number;
  onCardClick: (idx: number) => void;
  onDetailsClick: (detailPageInfo: IOption) => void;
  clickCount?: number;
  disabled: boolean | undefined;
  isFrameworkSelection: boolean;
  isPreview: boolean;
}) => {
  function detailsClickWrapper(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    event.stopPropagation();
    onDetailsClick(option);
  }

  const keyDownHandler = (event: any) => {
    if (event.keyCode === 13 || event.keyCode === 32) {
      onCardClick(cardNumber);
    }
  };

  const getIconClass = (framework = "") =>  {
    const matches = framework.match(/[A-Z][a-z]+/g);
    if (matches) {
      if (matches[0].indexOf("Page") > -1) {
        return "icon-class";
      }
      return matches.join("-").toLocaleLowerCase();
    }

    return framework;
  };

  const getText = (framework = "") =>  {
    const matches = framework.match(/[A-Z][a-z]+/g);

    if (matches) {
      let text: string = matches.pop() as string;
      if (text.toLocaleLowerCase() == "drawer") {
         text = matches.pop() + text; 
      }
      
      return text;
    }

    return framework;
  };

  return (
    <><div
      onKeyDown={keyDownHandler} 
      className={classNames(styles.container, styles.boundingBox, {
        [styles.unselectable]: disabled
      })}
    >
        <div className={styles["card-holder"]}>
          <div
            role="button"
            tabIndex={0}
            onClick={() => {
              onCardClick(cardNumber);
            }}
            className={classNames(styles["image-container"], {
            [styles.selected]: selected
          })}>
            {getSvg(option.internalName, "icon-class") ||
              (iconPath && (
                <img src={iconPath} className={styles[getIconClass(option.internalName)]} alt="" />
              ))}
          </div>
          <p className={styles["text-holder"]}>{getText(option.internalName)}</p>
        </div>
    </div>
    </>
  );
};

const mapStateToProps = (state: AppState): any => {
  const { previewStatus } = state.wizardContent;
  return {
    isPreview: previewStatus
  };
};

export default connect(mapStateToProps)(SelectableCard);
