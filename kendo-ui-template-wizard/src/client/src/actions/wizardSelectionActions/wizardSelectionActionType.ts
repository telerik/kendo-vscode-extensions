import { ISelectBackendAction } from "./selectBackEndFramework";
import { ISelectFrontendAction } from "./selectFrontEndFramework";
import {
  ISelectPagesAction,
  IUpdatePageCountAction,
  IResetPagesAction
} from "./selectPages";
import { ISelectProjectTypeAction } from "./selectWebApp";
import { IProjectPathValidationAction } from "./setProjectPathValidation";
import {
  IUpdateProjectNameActionType,
  IUpdateProjectPathActionType
} from "./updateProjectNameAndPath";
import { ISelectThemeAction } from "./selectTheme";

type WizardSelectionActionType =
  | ISelectBackendAction
  | ISelectFrontendAction
  | ISelectPagesAction
  | ISelectThemeAction
  | ISelectProjectTypeAction
  | IProjectPathValidationAction
  | IUpdatePageCountAction
  | IUpdateProjectNameActionType
  | IUpdateProjectPathActionType
  | IResetPagesAction;

export default WizardSelectionActionType;
