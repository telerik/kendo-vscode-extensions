import * as React from "react";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router";
import Details from "../../components/Details";
import FrameworkDetail from "../../components/FrameworkDetail";
import { IOption } from "../../types/option";
import { screenShotMapping } from "../../utils/getSvgUrl";
import { ISelected } from "../../types/selected";
import { ThunkDispatch } from "redux-thunk";
import RootAction from "../../actions/ActionType";
import { getProjectTypesAction } from "../../actions/wizardContentActions/getProjectTypes";
import styles from "./styles.module.css";
import { AppState } from "../../reducers";
import SelectWebApp from "../SelectWebApp";
import {
  ROUTES, KENDOKAS
} from "../../utils/constants";
import { stat } from "fs";

interface IPageDetailsProps {
  detailsPageInfo: IOption;
  isIntlFormatted: boolean;
  frontEndFramwork: ISelected;
  type: IOption[];
  mainFramework: IOption;
  serverPort: number;
}

interface IStoreProps {
  serverPort: number;
}

interface IDispatchProps {
  getProjectTypes: (serverPort: number) => any;
}

type Props = IDispatchProps & IStoreProps & IPageDetailsProps & RouteComponentProps & ISelected;


class PageDetails extends React.Component<Props> {
  public componentDidMount() {
    const { history, detailsPageInfo, isIntlFormatted, location, getProjectTypes, serverPort } = this.props;
    if (getProjectTypes) {
      getProjectTypes(serverPort);
    }
  }
  public render () { 
    const { history, detailsPageInfo, isIntlFormatted, location } = this.props;
    return (
      <div className={styles.detailsContainer}>
        { location.pathname == ROUTES.NEW_PROJECT && this.props.type.length > 0? 
          (<FrameworkDetail framework={this.props.mainFramework} />) : 
          (<>
          
          <SelectWebApp />
          {/* <FrameworkDetail framework={this.props.frontEndFramwork} /> */}
          <Details
            handleBackClick={history.goBack}
            detailInfo={detailsPageInfo}
            formatteDetailInfo={isIntlFormatted ? detailsPageInfo : undefined}
          />
          <div className={styles.screenShotContainer}>
            {screenShotMapping(detailsPageInfo.internalName) && (
              <img
                className={styles.screenshot}
                src={screenShotMapping(this.props.detailsPageInfo.internalName)}
                alt="Screenshot preview of web page that will be generated"
              />
            )}
          </div>
          </>)
        }
      </div>
    );
  }
};

const mapStateToProps = (state: AppState, props): IPageDetailsProps => {
  const { serverPort } = state.wizardContent;
  return {
    detailsPageInfo: state.wizardContent.detailsPage.data,
    isIntlFormatted: state.wizardContent.detailsPage.isIntlFormatted,
    type: state.wizardContent.projectTypes,
    mainFramework: state.wizardContent.projectTypes[0],
    frontEndFramwork: state.selection.frontendFramework,
    serverPort
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, void, RootAction>
): IDispatchProps => ({
  getProjectTypes: (serverPort: number) => {
    dispatch(getProjectTypesAction(serverPort));
  }
});


export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PageDetails)
);
