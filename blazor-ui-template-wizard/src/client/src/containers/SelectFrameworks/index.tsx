import * as React from "react";
import { connect } from "react-redux";

import styles from "./styles.module.css";

import SelectBackEndFramework from "../SelectBackendFramework";
import SelectFrontEndFramework from "../SelectFrontEndFramework";
import { getVSCodeApiSelector } from "../../selectors/vscodeApiSelector";

import { AppState } from "../../reducers";
import { IVSCodeObject } from "../../reducers/vscodeApiReducer";

interface ISelectFrameworksProps {
  vscode: IVSCodeObject;
  isPreview: boolean;
}

type Props = ISelectFrameworksProps;

class SelectFrameworks extends React.Component<Props> {
  render() {
    return (
      <div className={styles.container}>
        <SelectFrontEndFramework />
        <SelectBackEndFramework />
      </div>
    );
  }
}

interface IStateProps {
  isPreview: boolean;
  vscode: IVSCodeObject;
}

const mapStateToProps = (state: AppState): IStateProps => {
  const { previewStatus } = state.wizardContent;
  return {
    isPreview: previewStatus,
    vscode: getVSCodeApiSelector(state)
  };
};

export default connect(mapStateToProps)(SelectFrameworks);
