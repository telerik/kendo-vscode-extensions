import classnames from "classnames";
import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import { Link, withRouter } from "react-router-dom";

import buttonStyles from "../../css/buttonStyles.module.css";
import styles from "./styles.module.css";

import {
  ROUTES,
  EXTENSION_COMMANDS,
  EXTENSION_MODULES
} from "../../utils/constants";
import { validateName } from "../../utils/validateName";

import { IVSCodeObject } from "../../reducers/vscodeApiReducer";
import { rootSelector } from "../../selectors/generationSelector";
import {
  getCosmosDbSelectionSelector,
  isCosmosResourceCreatedSelector
} from "../../selectors/cosmosServiceSelector";
import {
  getAzureFunctionsOptionsSelector,
  isAzureFunctionsSelectedSelector,
  getAzureFunctionsNamesSelector
} from "../../selectors/azureFunctionsServiceSelector";

import { setVisitedWizardPageAction } from "../../actions/wizardInfoActions/setVisitedWizardPage";
import { openPostGenModalAction } from "../../actions/modalActions/modalActions";
import { getVSCodeApiSelector } from "../../selectors/vscodeApiSelector";

import {
  FormattedMessage,
  defineMessages,
  InjectedIntlProps,
  injectIntl
} from "react-intl";

import {
  getIsVisitedRoutesSelector,
  IVisitedPages
} from "../../selectors/wizardNavigationSelector";
import { isValidNameAndProjectPathSelector } from "../../selectors/wizardSelectionSelector";
import { AppState } from "../../reducers";
import { ThunkDispatch } from "redux-thunk";
import RootAction from "../../actions/ActionType";
import { IFunctionName } from "../AzureFunctionsSelection";

interface IDispatchProps {
  setRouteVisited: (route: string) => void;
  openPostGenModal: () => any;
}

interface IStateProps {
  vscode: IVSCodeObject;
  engine: any;
  selectedCosmos: boolean;
  cosmos: any;
  selectedFunctions: boolean;
  functions: any;
  isVisited: IVisitedPages;
  isValidNameAndProjectPath: boolean;
  functionNames?: IFunctionName[];
}

type Props = RouteComponentProps &
  IStateProps &
  IDispatchProps &
  InjectedIntlProps;

const pathsNext: any = {
  [ROUTES.NEW_PROJECT]: ROUTES.SELECT_FRAMEWORKS,
  [ROUTES.SELECT_FRAMEWORKS]: ROUTES.SELECT_PAGES,
  [ROUTES.SELECT_PAGES]: ROUTES.SELECT_THEME
};
const pathsBack: any = {
  [ROUTES.SELECT_FRAMEWORKS]: ROUTES.NEW_PROJECT,
  [ROUTES.SELECT_PAGES]: ROUTES.SELECT_FRAMEWORKS,
  [ROUTES.SELECT_THEME]: ROUTES.SELECT_PAGES
};

const messages = defineMessages({
  navAriaLabel: {
    id: "footer.navAriaLabel",
    defaultMessage: "Navigate between pages and generate templates"
  }
});

class Footer extends React.Component<Props> {
  public logMessageToVsCode = (e: React.MouseEvent<HTMLButtonElement>) => {
    const {
      engine,
      selectedCosmos,
      cosmos,
      selectedFunctions,
      functions,
      vscode,
      openPostGenModal
    } = this.props;
    e.preventDefault();
    // @ts-ignore
    vscode.postMessage({
      module: EXTENSION_MODULES.GENERATE,
      command: EXTENSION_COMMANDS.GENERATE,
      track: false,
      text: "Sending generation info...",
      payload: {
        engine,
        selectedCosmos,
        cosmos,
        selectedFunctions,
        functions
      }
    });
    const { pathname } = this.props.location;
    this.trackPageForTelemetry(pathname);
    openPostGenModal();
  };
  public isReviewAndGenerate = (): boolean => {
    return this.props.location.pathname === ROUTES.REVIEW_AND_GENERATE;
  };
  public isSelectTheme = (): boolean => {
    return this.props.location.pathname === ROUTES.SELECT_THEME;
  };

  public isNewProject = (): boolean => {
    return this.props.location.pathname === ROUTES.NEW_PROJECT;
  };

  public handleLinkClick = (event: React.SyntheticEvent, pathname: string) => {
    const { setRouteVisited } = this.props;
    this.trackPageForTelemetry(pathname);
    if (this.shouldDisableNextPage()) {
      event.preventDefault();
      return;
    }
    setRouteVisited(pathsNext[pathname]);
  };
  public trackPageForTelemetry = (pathname: string) => {
    this.props.vscode.postMessage({
      module: EXTENSION_MODULES.TELEMETRY,
      command: EXTENSION_COMMANDS.TRACK_PAGE_SWITCH,
      track: false,
      pageName: pathname
    });
  };

  public shouldDisableNextPage = () => {
    const { location, isValidNameAndProjectPath } = this.props;
    const { pathname } = location;

    if (pathname === ROUTES.NEW_PROJECT) {
      return !isValidNameAndProjectPath;
    } else if (pathname === ROUTES.SELECT_PAGES) {
      return !(this.props.engine.pages && this.props.engine.pages.length > 0);
    }
    return false;
  };

  public render() {
    // Validate the page names and do not generate if they are invalid or if there are duplicates
    const pageNames = new Set();
    const functionNames = new Set();
    let areValidNames = true;
    for (const page of this.props.engine.pages) {
      const pageName = page.name;
      areValidNames = validateName(pageName, "page").isValid;
      if (pageNames.has(pageName)) {
        areValidNames = false;
      } else {
        pageNames.add(pageName);
      }
      if (!areValidNames) {
        break;
      }
    }
    if (areValidNames && this.props.functionNames) {
      for (const functionName of this.props.functionNames) {
        areValidNames = functionName.isValidTitle;
        if (functionNames.has(functionName)) {
          areValidNames = false;
        } else {
          functionNames.add(functionName);
        }
        if (!areValidNames) {
          break;
        }
      }
    }

    const { location, isVisited, intl } = this.props;
    const { pathname } = location;
    return (
      <nav aria-label={intl.formatMessage(messages.navAriaLabel)}>
        {pathname !== ROUTES.PAGE_DETAILS && (
          <div className={styles.footer}>
            <div>
            </div>
            <div className={styles.buttonContainer}>
              { !this.isNewProject() &&
              <Link
                tabIndex={pathname === ROUTES.NEW_PROJECT ? -1 : 0}
                className={classnames(buttonStyles.buttonDark, styles.button, {
                  [styles.disabledOverlay]: pathname === ROUTES.NEW_PROJECT
                })}
                onClick={event => {
                  this.handleLinkClick(event, pathname);
                }}
                to={
                  pathsBack[pathname] === undefined
                    ? ROUTES.NEW_PROJECT
                    : pathsBack[pathname]
                }
              >
                <FormattedMessage id="footer.back" defaultMessage="Previous" />
              </Link>
              }
              { !this.isSelectTheme() &&
              <Link
                tabIndex={
                  this.shouldDisableNextPage()
                    ? -1
                    : 0
                }
                className={classnames(styles.button, {
                  [buttonStyles.buttonDark]:
                  this.shouldDisableNextPage(),
                  [buttonStyles.buttonHighlightedBorder]: !this.shouldDisableNextPage(),
                  [styles.disabledOverlay]: this.shouldDisableNextPage()
                })}
                onClick={event => {
                  this.handleLinkClick(event, pathname);
                }}
                to={
                  pathname === ROUTES.SELECT_THEME
                    ? ROUTES.SELECT_THEME
                    : pathsNext[pathname]
                }
              >
                <FormattedMessage id="footer.next" defaultMessage="Next" />
              </Link>
              }
              { this.isSelectTheme() &&
              <button
                disabled={
                  pathname !== ROUTES.SELECT_THEME || !areValidNames
                }
                className={classnames(styles.button, {
                  [buttonStyles.buttonDark]:
                    !this.isSelectTheme() || !areValidNames,
                  [buttonStyles.buttonHighlightedBorder]:
                    this.isSelectTheme() && areValidNames,
                  [styles.disabledOverlay]:
                    !this.isSelectTheme() || !areValidNames
                })}
                onClick={this.logMessageToVsCode}
              >
                <FormattedMessage
                  id="footer.generate"
                  defaultMessage="Create"
                />
              </button>
              }
            </div>
          </div>
        )}
      </nav>
    );
  }
}

const mapStateToProps = (state: AppState): IStateProps => ({
  vscode: getVSCodeApiSelector(state),
  engine: rootSelector(state),
  selectedCosmos: isCosmosResourceCreatedSelector(state),
  cosmos: getCosmosDbSelectionSelector(state),
  selectedFunctions: isAzureFunctionsSelectedSelector(state),
  functionNames: getAzureFunctionsNamesSelector(state),
  functions: getAzureFunctionsOptionsSelector(state),
  isVisited: getIsVisitedRoutesSelector(state),
  isValidNameAndProjectPath: isValidNameAndProjectPathSelector(state)
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, void, RootAction>
): IDispatchProps => ({
  setRouteVisited: (route: string) => {
    dispatch(setVisitedWizardPageAction(route));
  },
  openPostGenModal: () => {
    dispatch(openPostGenModalAction());
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(injectIntl(Footer))
);
