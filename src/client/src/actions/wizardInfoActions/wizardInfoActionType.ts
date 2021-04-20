import { IVersionData } from "./getVersionData";
import { ISetDetails } from "./setDetailsPage";
import { ISetVisitedPage, ISetPageAction, IResetVisitedPageAction } from "./setVisitedWizardPage";
import {
  IUpdateGenStatusMessage,
  IUpdateGenStatus
} from "./updateGenStatusActions";
import { IResetWizard } from "./resetWizardAction";
import { IUpdateDependencyInfo } from "./updateDependencyInfo";

type WizardInfoType =
  | IVersionData
  | ISetDetails
  | ISetVisitedPage
  | IUpdateGenStatus
  | ISetPageAction
  | IResetWizard
  | IUpdateGenStatusMessage
  | IResetVisitedPageAction
  | IUpdateDependencyInfo;

export default WizardInfoType;
