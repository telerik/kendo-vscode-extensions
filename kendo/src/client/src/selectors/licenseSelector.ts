import { createSelector } from "reselect";
import { ILicenseObject, License } from "../types/license";

const getSelection = (state: any) => state.selection;
const getFrameworkLicenses = (selection: any): string[] => {
  const licenses: any[] = [];
  licenses.push(selection.frontendFramework.licenses);
  licenses.push(selection.backendFramework.licenses);
  return licenses;
};
const getPageLicenses = (selection: any): ILicenseObject[] => {
  const licenses: ILicenseObject[] = [];
  const licenseSet = new Set();
  for (const page of selection.pages) {
    for (const license of page.licenses) {
      if (!licenseSet.has(license.text)) {
        licenses.push(license);
        licenseSet.add(license.text);
      }
    }
  }
  return licenses;
};

const getFrameworkLicensesSelector = createSelector(
  getSelection,
  getFrameworkLicenses
);

const getPageLicencesSelector = createSelector(
  getSelection,
  getPageLicenses
);

export { getFrameworkLicensesSelector, getPageLicencesSelector };
