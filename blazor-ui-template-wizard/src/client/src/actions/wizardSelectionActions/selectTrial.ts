import { WIZARD_SELECTION_TYPEKEYS } from "./typeKeys";

export interface ISelectTrialAction {
  type: WIZARD_SELECTION_TYPEKEYS.SELECT_TRIAL;
  payload: boolean;
}

const selectTrialAction = (isTrial: boolean): ISelectTrialAction => ({
  type: WIZARD_SELECTION_TYPEKEYS.SELECT_TRIAL,
  payload: isTrial
});

export { selectTrialAction };
