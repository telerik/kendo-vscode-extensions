import classnames from "classnames";
import * as React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Route, RouteComponentProps } from "react-router-dom";

import Steps from "./components/Steps";
import PageDetails from "./containers/PageDetails";
import SelectFrameworks from "./containers/SelectFrameworks";
import SelectPages from "./containers/SelectPages";
import NewProject from "./containers/NewProject";
import CosmosResourceModal from "./containers/CosmosResourceModal";
import Footer from "./containers/Footer";
import Header from "./containers/Header";
import ReviewAndGenerate from "./containers/ReviewAndGenerate";
import RightSidebar from "./containers/RightSidebar";
import PostGenerationModal from "./containers/PostGenerationModal";

import {
  EXTENSION_COMMANDS,
  EXTENSION_MODULES,
  ROUTES,
  DEVELOPMENT
} from "./utils/constants";

import { getVSCodeApi } from "./actions/vscodeApiActions/getVSCodeApi";
import { logIntoAzureAction } from "./actions/azureActions/logIntoAzure";
import { updateOutputPathAction } from "./actions/wizardSelectionActions/updateProjectNameAndPath";
import {
  setAccountAvailability,
  setAppNameAvailabilityAction,
  IAvailabilityFromExtension
} from "./actions/azureActions/setAccountAvailability";
import { getSubscriptionData } from "./actions/azureActions/subscriptionData";
import { setProjectPathValidation } from "./actions/wizardSelectionActions/setProjectPathValidation";
import {
  updateTemplateGenerationStatusMessageAction,
  updateTemplateGenerationStatusAction
} from "./actions/wizardInfoActions/updateGenStatusActions";
import { getVersionsDataAction } from "./actions/wizardInfoActions/getVersionData";
import {
  updateDependencyInfoAction,
  IDependencyInfo
} from "./actions/wizardInfoActions/updateDependencyInfo";

import appStyles from "./appStyles.module.css";
import { startLogOutAzure } from "./actions/azureActions/logOutAzure";
import { IVersions } from "./types/version";
import { getVSCodeApiSelector } from "./selectors/vscodeApiSelector";
import { IVSCodeObject } from "./reducers/vscodeApiReducer";
import { setAzureValidationStatusAction } from "./actions/azureActions/setAzureValidationStatusAction";
import { IServiceStatus } from "./reducers/generationStatus/genStatus";
import { resetPagesAction } from "./actions/wizardSelectionActions/selectPages";
import { selectFrontendFramework } from "./actions/wizardSelectionActions/selectFrontEndFramework";
import { ISelected } from "./types/selected";
import { AppState } from "./reducers";
import { IOption } from "./types/option";
import { setPreviewStatusAction } from "./actions/wizardContentActions/setPreviewStatus";
import { setPortAction } from "./actions/wizardContentActions/setPort";
import { ThunkDispatch } from "redux-thunk";
import RootAction from "./actions/ActionType";
import SelectTheme from "./containers/SelectTheme";
import { getProjectTypesSuccess } from "./actions/wizardContentActions/getProjectTypesSuccess";
import { IMetadata } from "./types/metadata";
import getSvgUrl from "./utils/getSvgUrl";

if (process.env.NODE_ENV === DEVELOPMENT) {
  require("./css/themes.css");
}

interface IDispatchProps {
  updateOutputPath: (outputPath: string) => any;
  getVSCodeApi: () => void;
  saveSubscriptionData: (subscriptionData: any) => void;
  setCosmosResourceAccountNameAvailability: (
    isAvailableObject: IAvailabilityFromExtension
  ) => any;
  setProjectPathValidation: (validation: any) => void;
  updateTemplateGenStatusMessage: (status: string) => any;
  updateTemplateGenStatus: (isGenerated: IServiceStatus) => any;
  getVersionsData: (versions: IVersions) => any;
  getProjectTypes: (items: any[]) => void;
  updateDependencyInfo: (dependencyInfo: IDependencyInfo) => any;
  resetPageSelection: () => any;
  selectFrontend: (frontendFramework: ISelected) => any;
  setPreviewStatus: (isPreview: boolean) => void;
  setPort: (port: number) => void;
}

interface IStateProps {
  vscode: IVSCodeObject;
  frontendOptions: IOption[];
}

type Props = IDispatchProps & IStateProps & RouteComponentProps;

class App extends React.Component<Props> {
  public static defaultProps = {
    getVSCodeApi: () => {},
    loadWizardContent: () => {},
    saveSubscriptionData: () => {},
    updateOutputPath: () => {},
    setCosmosResourceAccountNameAvailability: () => {},
    setProjectPathValidation: () => {},
    updateDependencyInfo: () => {},
    updateTemplateGenStatusMessage: () => {},
    updateTemplateGenStatus: () => {},
    getVersionsData: () => {},
    setPreviewStatus: () => {},
    setPort: () => {}
  };

  public componentDidMount() {
    this.props.getVSCodeApi();
    // listens for a login event from VSCode
    // this.props.vscode.window.addEventListener("message", event => {
    //   const message = event.data;
    //   console.log("recieved project types" + JSON.stringify(message));
    // });
    window.addEventListener("message", event => {
      const message = event.data;
      console.log("recieved project types" + JSON.stringify(message));
      switch (message.command) {
        case EXTENSION_COMMANDS.GET_DEPENDENCY_INFO:
          this.props.updateDependencyInfo(message.payload);
          break;
        case EXTENSION_COMMANDS.GET_OUTPUT_PATH:
          if (message.payload != null && message.payload.outputPath != null) {
            this.props.updateOutputPath(message.payload.outputPath);
          }
          break;
        case EXTENSION_COMMANDS.GET_USER_STATUS:
        case EXTENSION_COMMANDS.SUBSCRIPTION_DATA_FUNCTIONS:
        case EXTENSION_COMMANDS.GET_PROJECT_TYPES:
          console.log("recieved project types" + JSON.stringify(message));
        this.props.getProjectTypes(
          message.payload
        );
        break;
        case EXTENSION_COMMANDS.PROJECT_PATH_VALIDATION:
          this.props.setProjectPathValidation(
            message.payload.projectPathValidation
          );
          break;
        case EXTENSION_COMMANDS.GEN_STATUS_MESSAGE:
          this.props.updateTemplateGenStatusMessage(message.payload.status);
          break;
        case EXTENSION_COMMANDS.GEN_STATUS:
          this.props.updateTemplateGenStatus(message.payload);
          break;
        case EXTENSION_COMMANDS.GET_VERSIONS:
          this.props.getVersionsData(message.payload);
          break;
        case EXTENSION_COMMANDS.RESET_PAGES:
          if (message.payload.resetPages) {
            this.props.frontendOptions.map((frontend: IOption) => {
              if (frontend.internalName === message.payload.internalName) {
                const {
                  title,
                  internalName,
                  version,
                  author,
                  licenses
                } = frontend;
                this.props.selectFrontend({
                  title: title as string,
                  internalName,
                  version,
                  author,
                  licenses
                });
              }
            });
            this.props.resetPageSelection();
            this.props.history.push(ROUTES.SELECT_PAGES);
          }
          break;
        case EXTENSION_COMMANDS.GET_PREVIEW_STATUS:
          this.props.setPreviewStatus(message.payload.preview);
          break;
        case EXTENSION_COMMANDS.GET_PORT:
          this.props.setPort(message.payload.port);
          break;
      }
    });
  }

  public componentDidUpdate(prevProps: Props) {
    const { vscode } = this.props;
      if (vscode !== prevProps.vscode) {
        window.addEventListener("message", event => {
          console.log("desperado" + JSON.stringify(event.data));
        });
      }
  }

  public render() {
    const { pathname } = this.props.location;
    return (
      <React.Fragment>
        <div className={appStyles.layout}>
          <Header />
          <div className={classnames(appStyles.container, appStyles.mainContent)}>
            <PostGenerationModal />
            <main
              className={classnames(appStyles.centerView, {
                [appStyles.centerViewMaxHeight]: pathname === ROUTES.PAGE_DETAILS
              })}
            >
              <Route
                path={ROUTES.REVIEW_AND_GENERATE}
                component={ReviewAndGenerate}
              />
              <Route
                path={ROUTES.SELECT_FRAMEWORKS}
                component={SelectFrameworks}
              />
              <Route path={ROUTES.SELECT_PAGES} component={SelectPages} />

              <Route path={ROUTES.SELECT_THEME} component={SelectTheme} />
              
              <Route
                exact={true}
                path={ROUTES.NEW_PROJECT}
                component={NewProject}
              />
            </main>
            <hr />
            <PageDetails />
          </div>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, void, RootAction>
): IDispatchProps => ({
  getVSCodeApi: () => {
    dispatch(getVSCodeApi());
  },
  saveSubscriptionData: (subscriptionData: any) => {
    dispatch(getSubscriptionData(subscriptionData));
  },
  updateOutputPath: (outputPath: string) => {
    dispatch(updateOutputPathAction(outputPath));
  },
  setCosmosResourceAccountNameAvailability: (isAvailableObject: any) => {
    dispatch(setAccountAvailability(isAvailableObject));
  },
  setProjectPathValidation: (validation: any) => {
    dispatch(setProjectPathValidation(validation));
  },
  updateTemplateGenStatusMessage: (status: string) => {
    dispatch(updateTemplateGenerationStatusMessageAction(status));
  },
  updateTemplateGenStatus: (isGenerated: IServiceStatus) => {
    dispatch(updateTemplateGenerationStatusAction(isGenerated));
  },
  updateDependencyInfo: (dependencyInfo: IDependencyInfo) => {
    dispatch(updateDependencyInfoAction(dependencyInfo));
  },
  getVersionsData: (versions: IVersions) => {
    dispatch(getVersionsDataAction(versions));
  },
  resetPageSelection: () => {
    dispatch(resetPagesAction());
  },
  getProjectTypes: (items: any[]) => {
    dispatch(
      getProjectTypesSuccess(
        getOptionalFromMetadata(getMetadataFromJson(items))
      )
    )
  },
  selectFrontend: (frontendFramework: ISelected) => {
    dispatch(selectFrontendFramework(frontendFramework));
  },
  setPreviewStatus: (isPreview: boolean) => {
    dispatch(setPreviewStatusAction(isPreview));
  },
  setPort: (port: number) => {
    dispatch(setPortAction(port));
  }
});

const mapStateToProps = (state: AppState): IStateProps => ({
  vscode: getVSCodeApiSelector(state),
  frontendOptions: state.wizardContent.frontendOptions
});

function getMetadataFromJson(items: any[]): IMetadata[] {
  return items.map<IMetadata>(val => ({
    name: val.name,
    displayName: val.displayName,
    summary: val.summary,
    longDescription: val.description,
    position: val.order,
    licenses: val.licenses,
    svgUrl: val.icon,
    tags: val.tags,
    selected: false,
    author: val.author
  }));
}

function getOptionalFromMetadata(items: IMetadata[]): IOption[] {
  return items.map<IOption>(val => ({
    title: val.displayName,
    internalName: val.name,
    body: val.summary,
    longDescription: val.longDescription,
    position: val.position,
    svgUrl: getSvgUrl(val.name),
    selected: val.selected,
    licenses: val.licenses
  }));
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
