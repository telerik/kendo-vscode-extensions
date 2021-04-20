import classnames from "classnames";
import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import { InjectedIntlProps, injectIntl, defineMessages } from "react-intl";

import StepsLink from "../StepsLink";

import styles from "./styles.module.css";

import { ROUTES, ROUTES_ARRAY } from "../../utils/constants";
import { IRoutes } from "../../reducers/wizardRoutes/navigationReducer";
import { isValidNameAndProjectPathSelector } from "../../selectors/wizardSelectionSelector";

const messages = defineMessages({
  welcome: {
    id: "leftSidebar.newProject",
    defaultMessage: "New Project"
  },
  summary: {
    id: "leftSidebar.frameworks",
    defaultMessage: "Frameworks"
  },
  pages: {
    id: "leftSidebar.pages",
    defaultMessage: "Add Pages"
  },
  theme: {
    id: "leftSideBar.themes",
    defaultMessage: "Add Theme"
  }
});

interface IStateProps {
  isVisited: IRoutes;
  isValidNameAndProjectPath: boolean;
  selectedRoute : string;
}

type Props = RouteComponentProps & IStateProps & InjectedIntlProps;

const Steps = (props: Props) => {
  const { formatMessage } = props.intl;
  const leftSidebarData: string[] = Object.keys(messages).map(k =>
    formatMessage(messages[k])
  );

  const { selectedRoute } = props;
  const [currentPathIndex, setPathIndex] = React.useState(
    ROUTES_ARRAY.indexOf(selectedRoute)
  );
  React.useEffect(() => {
    setPathIndex(ROUTES_ARRAY.indexOf(selectedRoute));
  });
  const { isVisited, isValidNameAndProjectPath } = props;
  return (
    <React.Fragment>
      {selectedRoute !== ROUTES.PAGE_DETAILS && (
        <nav
          className={classnames(styles.leftView, styles.container)}
          aria-label="ARIA NAV LABEL"
        >
          <div className={styles.container}>
            {
              leftSidebarData.map((sidebartitle, idx) => {
                return (
                  <span
                    className={
                      classnames(
                        styles.itemBorder,
                        {
                          [styles.currentPath]: idx === currentPathIndex,
                          [styles.visitedPath]: isVisited[ROUTES_ARRAY[idx]] && isValidNameAndProjectPath
                        }
                      )
                    }
                    key={sidebartitle}
                  >
                    <StepsLink
                      disabled={
                        !isVisited[ROUTES_ARRAY[idx]] ||
                        !isValidNameAndProjectPath
                      }
                      path={ROUTES_ARRAY[idx]}
                      text={sidebartitle}
                      visitedCheck={
                        idx !== currentPathIndex && isVisited[ROUTES_ARRAY[idx]]
                      }
                      isSelected={idx === currentPathIndex}
                      stepIndex={idx}
                    />
                  </span>
              );
            })}
          </div>
        </nav>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = (state: any): IStateProps => ({
  isVisited: state.wizardRoutes.isVisited,
  isValidNameAndProjectPath: isValidNameAndProjectPathSelector(state),
  selectedRoute : state.wizardRoutes.selected
});

export default connect(mapStateToProps)(injectIntl(Steps));
