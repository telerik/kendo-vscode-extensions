import * as React from "react";
import { connect } from "react-redux";
import styles from "./styles.module.css";
import { AppState } from "../../reducers";
import { ISelected } from "../../types/selected";
import { ITheme } from "../../reducers/wizardSelectionReducers/themeReducer";

interface IDispatchProps {
  openCosmosDbModal: () => any;
  openAzureFunctionsModal: () => any;
}


interface IStateProps {
  selectedFrontend: ISelected;
  projectName: string;
  pageCount: number;
  theme: ITheme
}

type Props = IStateProps;

const ProjectSummary = (props: Props) => {
  const {  selectedFrontend, projectName, pageCount, theme } = props;
  return (
    <div className={styles.container}>
      <h1>Your project details</h1>
      <table className={styles["info-table"]}>
        <tbody>
          <tr>
            <td><h4>App Name</h4></td>
            <td>{projectName}</td>
          </tr>
          <tr>
            <td><h4>Frontend Framework</h4></td>
            <td>{selectedFrontend.internalName.split(/(?=[A-Z])/).join(" ")}</td>
          </tr>
          <tr>
            <td><h4>Theme</h4></td>
            <td className={styles["capitalize"]}>{theme.name}</td>
          </tr>
          <tr>
            <td><h4>Pages</h4></td>
            <td>{pageCount}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state: AppState): IStateProps => {
  const { frontendFramework } = state.selection;

  return {
    selectedFrontend: frontendFramework,
    projectName: state.selection.projectNameObject.projectName,
    pageCount: state.selection.pages.length,
    theme: state.selection.theme
  };
};

export default connect(
  mapStateToProps
)(ProjectSummary);
