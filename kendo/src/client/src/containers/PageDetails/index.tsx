import * as React from "react";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router";
import FrameworkDetail from "../../components/FrameworkDetail";
import { IOption } from "../../types/option";
import { ISelected } from "../../types/selected";
import { ThunkDispatch } from "redux-thunk";
import RootAction from "../../actions/ActionType";
import { getProjectTypesAction } from "../../actions/wizardContentActions/getProjectTypes";
import styles from "./styles.module.css";
import { AppState } from "../../reducers";
import { Route } from "react-router-dom";
import {
  ROUTES, KENDOKAS
} from "../../utils/constants";
import SortablePageList from "../SortablePageList";
import ProjectSummary from "../../components/ProjectSummary";

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
    const { getProjectTypes, serverPort } = this.props;
    if (getProjectTypes) {
      getProjectTypes(serverPort);
    }
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
