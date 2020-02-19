import { WIZARD_SELECTION_TYPEKEYS } from "../../actions/wizardSelectionActions/typeKeys";
import WizardSelectionActionType from "../../actions/wizardSelectionActions/wizardSelectionActionType";

export interface ITheme {
  [key: string]: string;
}

const initialState = { name: "default" };

const themeReducer = (
  state: ITheme = initialState,
  action: WizardSelectionActionType
) => {
  switch (action.type) {
    case WIZARD_SELECTION_TYPEKEYS.SELECT_THEME:
      return {
        ...action.payload
      };
    default:
      return state;
  }
};

export default themeReducer;
