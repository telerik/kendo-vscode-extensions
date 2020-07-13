import { combineReducers } from "redux";

import backendFramework from "./selectBackendFrameworkReducer";
import frontendFramework from "./selectFrontendFrameworkReducer";
import pages from "./selectPagesReducer";
import appType from "./selectWebAppReducer";
import projectNameObject from "./updateProjectName";
import outputPathObject from "./updateOutputPath";
import services from "./services";
import pageCount from "./pageCountReducer";
import theme from "./themeReducer";
import isValidatingName from "./validatingNameReducer";

const selectionStateReducer = combineReducers({
  appType,
  frontendFramework,
  backendFramework,
  pages,
  services,
  theme,
  outputPathObject,
  pageCount,
  isValidatingName,
  projectNameObject
});

export default selectionStateReducer;
export type SelectionState = ReturnType<typeof selectionStateReducer>;
