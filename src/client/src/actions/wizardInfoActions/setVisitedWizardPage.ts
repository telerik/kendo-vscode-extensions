import { WIZARD_INFO_TYPEKEYS } from "./typeKeys";

export interface ISetVisitedPage {
  type: WIZARD_INFO_TYPEKEYS.SET_VISITED_WIZARD_PAGE;
  payload: string;
}

export interface ISetPageAction {
  type: WIZARD_INFO_TYPEKEYS.SET_PAGE_WIZARD_PAGE;
  payload: string;
}

export interface IResetVisitedPageAction {
  type: WIZARD_INFO_TYPEKEYS.RESET_VISITED_WIZARD_PAGE;
}

export const setVisitedWizardPageAction = (route: string): ISetVisitedPage => ({
  type: WIZARD_INFO_TYPEKEYS.SET_VISITED_WIZARD_PAGE,
  payload: route
});

export const setPageWizardPageAction = (route: string): ISetPageAction => ({
  type: WIZARD_INFO_TYPEKEYS.SET_PAGE_WIZARD_PAGE,
  payload: route
});

export interface IResetWizardAction {
  type: WIZARD_INFO_TYPEKEYS.RESET_WIZARD;
}