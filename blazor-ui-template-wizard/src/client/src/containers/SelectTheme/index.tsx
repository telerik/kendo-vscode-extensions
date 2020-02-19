import * as React from "react";
import { connect } from "react-redux";
import styles from "./styles.module.css";
import {
  selectThemeAction
} from "../../actions/wizardSelectionActions/selectTheme";

import { getPageCount, getTheme } from "../../selectors/wizardSelectionSelector";
import { IPageCount } from "../../reducers/wizardSelectionReducers/pageCountReducer";
import { Dispatch } from "redux";
import classNames from "classnames";
import { AppState } from "../../reducers";
import { THEMES }  from "../../utils/constants";
import { ITheme } from "../../reducers/wizardSelectionReducers/themeReducer";
import { getSvg } from "../../utils/getSvgUrl";
import RootAction from "../../actions/ActionType";

interface ISelectThemeProps {
  pageCount: IPageCount;
  theme: string;
}

interface IDispatchProps {
  selectTheme: (theme: ITheme) => void;
}

type Props = ISelectThemeProps & IDispatchProps;

class SelectTheme extends React.Component<Props> {
  
  public isSelected = (currentTheme: string) => {
    return this.props.theme === currentTheme;
  };

  public onThemeClick(currentTheme: string): void {
    const { selectTheme } = this.props
    selectTheme({ name: currentTheme});
  }

  public render() {
    return (
      <>
      <div className={styles["theme-chooser-wrap"]}>
        <h1>Select theme for application</h1>
        <div className={styles["theme-chooser-inner"]}>
          <h4>Sass Themes</h4>
          <ul>
              { THEMES.map((currentTheme, idx) => {
                return (<li  key={JSON.stringify(`${currentTheme} + ${idx}`)} className={classNames({[styles.selected]: this.isSelected(currentTheme) })} onClick={ () => this.onThemeClick(currentTheme)} tabIndex={0} >
                            {getSvg(currentTheme, "icon-class")}
                            <span className={styles["radio-btn-wrap"]}>
                                <span className={styles["radio-btn"]}></span>
                                <span className={styles["theme-name"]}>{currentTheme}</span>
                            </span>
                        </li>);
              })}
          </ul>
        </div>
        <div className={styles["info-wrap"]}>
            <h4>Telerik UI for Blazor Themes</h4>
            <p>
              The appearance of the Telerik UI for Blazor components entirely depends on styles defined by the applied CSS classes.
            </p>
        </div>
      </div>
    </>);
  }
}

const mapStateToProps = (state: AppState): ISelectThemeProps => {
  return {
    theme: getTheme(state),
    pageCount: getPageCount(state)
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<RootAction>
): IDispatchProps => ({
 
  selectTheme: (theme: ITheme) => {
    dispatch(selectThemeAction(theme));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectTheme);
