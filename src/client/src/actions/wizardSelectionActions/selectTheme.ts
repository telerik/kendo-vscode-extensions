import { WIZARD_SELECTION_TYPEKEYS } from "./typeKeys";
import { ITheme } from "../../reducers/wizardSelectionReducers/themeReducer";

export interface ISelectThemeAction {
  type: WIZARD_SELECTION_TYPEKEYS.SELECT_THEME;
  payload: ITheme;
}

const selectThemeAction = (theme: ITheme): ISelectThemeAction => ({
  type: WIZARD_SELECTION_TYPEKEYS.SELECT_THEME,
  payload: theme
});

export { selectThemeAction };
