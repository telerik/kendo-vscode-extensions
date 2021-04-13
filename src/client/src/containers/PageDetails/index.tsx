import * as React from "react";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router";
import FrameworkDetail from "../../components/FrameworkDetail";
import { IOption } from "../../types/option";
import { ISelected } from "../../types/selected";
import { ThunkDispatch } from "redux-thunk";
import RootAction from "../../actions/ActionType";
//import { getProjectTypesAction } from "../../actions/wizardContentActions/getProjectTypes";
import { getVSCodeApiSelector } from "../../selectors/vscodeApiSelector";
import styles from "./styles.module.css";
import { AppState } from "../../reducers";
import { Route } from "react-router-dom";
import {
  ROUTES, KENDOKAS, EXTENSION_COMMANDS, EXTENSION_MODULES
} from "../../utils/constants";
import SortablePageList from "../SortablePageList";
import ProjectSummary from "../../components/ProjectSummary";
import { IVSCodeObject } from "../../reducers/vscodeApiReducer";

interface IPageDetailsProps {
  detailsPageInfo: IOption;
  isIntlFormatted: boolean;
  frontEndFramwork: ISelected;
  vscode: IVSCodeObject;
  type: IOption[];
  mainFramework: IOption;
}

type Props =  IPageDetailsProps & RouteComponentProps & ISelected;

class PageDetails extends React.Component<Props> {
  public componentDidUpdate(prevProps: Props) {
    const { vscode } = this.props;
    if (vscode !== prevProps.vscode) {
      // vscode.postMessage({
      //   command: EXTENSION_COMMANDS.GET_USER_STATUS,
      //   module: EXTENSION_MODULES.AZURE,
      //   track: true
      // });
      console.log("lalala types 4");
      vscode.postMessage({
        command: EXTENSION_COMMANDS.GET_PROJECT_TYPES,
        module: "kendo-generator", //EXTENSION_MODULES.GENERATE,//
        track: true
      });
    }
  }

  public componentDidMount() {
    console.log("project types 4");
    console.log(this.props.vscode);
    // this.props.vscode.postMessage({
    //   command: EXTENSION_COMMANDS.GET_PROJECT_TYPES,
    //   module: EXTENSION_MODULES.AZURE,
    //   track: true
    // });

    window.addEventListener("message", event => {
      console.log("desperado 222222" + JSON.stringify(event.data));
    });
  }
  public render () { 
    return (
      <div className={styles.detailsContainer}>
          <Route path={ROUTES.NEW_PROJECT} exact={true} component={
            () =>
              <>{ this.props.mainFramework &&
                  <FrameworkDetail 
                  title={this.props.mainFramework.title as string} 
                  description={this.props.mainFramework.longDescription as string} 
                  name={this.props.mainFramework.internalName as string} />
              }</>
          }/>
          <Route path={ROUTES.SELECT_FRAMEWORKS} exact={true}  component={ 
            () =>
              <FrameworkDetail 
                title={this.props.frontEndFramwork.title as string} 
                description={this.props.frontEndFramwork.description as string} 
                name={this.props.frontEndFramwork.internalName as string}/>
          }/>

          <Route path={ROUTES.SELECT_PAGES} exact={true}  component={ 
            () =>
              <SortablePageList></SortablePageList>
          }/>

          <Route path={ROUTES.SELECT_THEME} exact={true}  component={ 
            () =>
              <ProjectSummary></ProjectSummary>
          }/>
      </div>
    );
  }
};

const mapStateToProps = (state: AppState): IPageDetailsProps => {
  const { serverPort } = state.wizardContent;
  return {
    detailsPageInfo: state.wizardContent.detailsPage.data,
    isIntlFormatted: state.wizardContent.detailsPage.isIntlFormatted,
    type: state.wizardContent.projectTypes,
    mainFramework: state.wizardContent.projectTypes[0],
    vscode: getVSCodeApiSelector(state),
    frontEndFramwork: state.selection.frontendFramework
  };
};

export default withRouter(
  connect(
    mapStateToProps
  )(PageDetails)
);
