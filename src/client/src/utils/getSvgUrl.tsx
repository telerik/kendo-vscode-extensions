import * as React from "react";
import classnames from "classnames";
import { KENDOKAS } from "./constants";

import { ReactComponent as FullStack } from "../assets/fullstack.svg";
import { ReactComponent as MasterDetail } from "../assets/masterdetail.svg";
import { ReactComponent as BlankPage } from "../assets/blankpage.svg";
import { ReactComponent as ContentGrid } from "../assets/contentgrid.svg";
import { ReactComponent as List } from "../assets/list.svg";
import { ReactComponent as ChartPage } from "../assets/chartpage.svg";
import { ReactComponent as HelloPage } from "../assets/hellopage.svg";
import { ReactComponent as FormPage } from "../assets/formpage.svg";
import { ReactComponent as AppDrawerPage } from "../assets/appdrawerpage.svg";
import { ReactComponent as PlusIcon } from "../assets/plusicon.svg";
import { ReactComponent as MinusIcon } from "../assets/minusicon.svg";

import svgStyles from "./svgStyles.module.css";

import { WIZARD_CONTENT_INTERNAL_NAMES } from "./constants";
import react from "../assets/react.svg";
import angular from "../assets/angular.svg";
import vue from "../assets/vue.svg";
import node from "../assets/nodeJS.svg";
import flask from '../assets/flask.svg';
import azure from "../assets/azure.svg";
import azurefunctions from "../assets/azurefunctions.svg";
import cancel from "../assets/cancel.svg";
import cosmosdb from "../assets/cosmosdb.svg";
import warning from "../assets/warning.svg";
import greencheck from "../assets/checkgreen.svg";


import masterdetailscreenshot from "../assets/masterdetailscreenshot.svg";
import listscreenshot from "../assets/listscreenshot.svg";
import gridscreenshot from "../assets/gridscreenshot.svg";
import blankscreenshot from "../assets/blankscreenshot.svg";
import greenkendoka from "../assets/kendoka_green.svg";
import redkendoka from "../assets/kendoka_red.svg";
import orangekendoka from "../assets/kendoka_orange.svg";
import bluekendoka from "../assets/kendoka_blue.svg";
import blankpage from "../assets/blankpage.svg";
import chartpage from "../assets/chartpage.svg";
import formpage from "../assets/formpage.svg";
import hellopage from "../assets/hellopage.svg";
import appdrawerpage from "../assets/appdrawerpage.svg";


const KENDOKA_MAPPINGS = {
  [KENDOKAS.BLUE] : bluekendoka,
  [KENDOKAS.RED]: redkendoka,
  [KENDOKAS.ORANGE]: orangekendoka,
  [KENDOKAS.GREEN]: greenkendoka
}

const SVG_MAPPINGS = {
  [WIZARD_CONTENT_INTERNAL_NAMES.KENDO_REACT]: react,
  [WIZARD_CONTENT_INTERNAL_NAMES.KENDO_ANGULAR]: angular,
  [WIZARD_CONTENT_INTERNAL_NAMES.VUE]: vue,
  [WIZARD_CONTENT_INTERNAL_NAMES.NODE_JS]: node,
  [WIZARD_CONTENT_INTERNAL_NAMES.FLASK]: flask,
  [WIZARD_CONTENT_INTERNAL_NAMES.AZURE_FUNCTIONS]: azurefunctions,
  [WIZARD_CONTENT_INTERNAL_NAMES.AZURE]: azure,
  [WIZARD_CONTENT_INTERNAL_NAMES.COSMOS_DB]: cosmosdb
};

const SVG_REACTCOMPONENT_MAPPINGS = {
  [WIZARD_CONTENT_INTERNAL_NAMES.FULL_STACK_APP]: (style: string) => (
    <FullStack className={classnames(style, svgStyles.icon)} />
  ),
  [WIZARD_CONTENT_INTERNAL_NAMES.REACT_MASTER_DETAIL]: (style: string) => (
    <MasterDetail className={classnames(style, svgStyles.icon)} />
  ),
  [WIZARD_CONTENT_INTERNAL_NAMES.REACT_BLANK_PAGE]: (style: string) => (
    <BlankPage className={classnames(style, svgStyles.icon)} />
  ),
  [WIZARD_CONTENT_INTERNAL_NAMES.KENDO_REACT_BLANK_PAGE]: (style: string) => (
    <BlankPage className={classnames(style, svgStyles.icon)} />
  ),
  [WIZARD_CONTENT_INTERNAL_NAMES.KENDO_REACT_CHART_PAGE]: (style: string) => (
    <ChartPage className={classnames(style, svgStyles.icon)} />
  ),
  [WIZARD_CONTENT_INTERNAL_NAMES.KENDO_REACT_FORM_PAGE]: (style: string) => (
    <FormPage className={classnames(style, svgStyles.icon)} />
  ),
  [WIZARD_CONTENT_INTERNAL_NAMES.KENDO_REACT_HELLO_PAGE]: (style: string) => (
    <HelloPage className={classnames(style, svgStyles.icon)} />
  ),
  [WIZARD_CONTENT_INTERNAL_NAMES.KENDO_REACT_APP_DRAWER_PAGE]: (style: string) => (
    <AppDrawerPage className={classnames(style, svgStyles.icon)} />
  ),
  [WIZARD_CONTENT_INTERNAL_NAMES.KENDO_ANGULAR_BLANK_PAGE]: (style: string) => (
    <BlankPage className={classnames(style, svgStyles.icon)} />
  ),
  [WIZARD_CONTENT_INTERNAL_NAMES.KENDO_ANGULAR_CHART_PAGE]: (style: string) => (
    <ChartPage className={classnames(style, svgStyles.icon)} />
  ),
  [WIZARD_CONTENT_INTERNAL_NAMES.KENDO_ANGULAR_FORM_PAGE]: (style: string) => (
    <FormPage className={classnames(style, svgStyles.icon)} />
  ),
  [WIZARD_CONTENT_INTERNAL_NAMES.KENDO_ANGULAR_HELLO_PAGE]: (style: string) => (
    <HelloPage className={classnames(style, svgStyles.icon)} />
  ),
  [WIZARD_CONTENT_INTERNAL_NAMES.KENDO_ANGULAR_APP_DRAWER_PAGE]: (style: string) => (
    <AppDrawerPage className={classnames(style, svgStyles.icon)} />
  ),
  [WIZARD_CONTENT_INTERNAL_NAMES.KENDO_PLUS_ICON]: (style: string) => (
    <PlusIcon className={classnames(style, svgStyles.icon)} />
  ),
  [WIZARD_CONTENT_INTERNAL_NAMES.KENDO_MINUS_ICON]: (style: string) => (
    <MinusIcon className={classnames(style, svgStyles.icon)} />
  ),
  [WIZARD_CONTENT_INTERNAL_NAMES.REACT_CONTENT_GRID]: (style: string) => (
    <ContentGrid className={classnames(style, svgStyles.icon)} />
  ),
  [WIZARD_CONTENT_INTERNAL_NAMES.REACT_LIST]: (style: string) => (
    <List className={classnames(style, svgStyles.icon)} />
  ),
  [WIZARD_CONTENT_INTERNAL_NAMES.ANGULAR_MASTER_DETAIL]: (style: string) => (
    <MasterDetail className={classnames(style, svgStyles.icon)} />
  ),
  [WIZARD_CONTENT_INTERNAL_NAMES.ANGULAR_BLANK_PAGE]: (style: string) => (
    <BlankPage className={classnames(style, svgStyles.icon)} />
  ),
  [WIZARD_CONTENT_INTERNAL_NAMES.ANGULAR_CONTENT_GRID]: (style: string) => (
    <ContentGrid className={classnames(style, svgStyles.icon)} />
  ),
  [WIZARD_CONTENT_INTERNAL_NAMES.ANGULAR_LIST]: (style: string) => (
    <List className={classnames(style, svgStyles.icon)} />
  ),
  [WIZARD_CONTENT_INTERNAL_NAMES.VUE_MASTER_DETAIL]: (style: string) => (
    <MasterDetail className={classnames(style, svgStyles.icon)} />
  ),
  [WIZARD_CONTENT_INTERNAL_NAMES.VUE_BLANK_PAGE]: (style: string) => (
    <BlankPage className={classnames(style, svgStyles.icon)} />
  ),
  [WIZARD_CONTENT_INTERNAL_NAMES.VUE_CONTENT_GRID]: (style: string) => (
    <ContentGrid className={classnames(style, svgStyles.icon)} />
  ),
  [WIZARD_CONTENT_INTERNAL_NAMES.VUE_LIST]: (style: string) => (
    <List className={classnames(style, svgStyles.icon)} />
  )
};

const KENDO_MAPPINGS = {
  [WIZARD_CONTENT_INTERNAL_NAMES.KENDO_REACT_BLANK_PAGE]: blankpage,
  [WIZARD_CONTENT_INTERNAL_NAMES.KENDO_ANGULAR_BLANK_PAGE]: blankpage,
  [WIZARD_CONTENT_INTERNAL_NAMES.KENDO_REACT_HELLO_PAGE]: hellopage,
  [WIZARD_CONTENT_INTERNAL_NAMES.KENDO_ANGULAR_HELLO_PAGE]: hellopage,
  [WIZARD_CONTENT_INTERNAL_NAMES.KENDO_REACT_APP_DRAWER_PAGE]: appdrawerpage,
  [WIZARD_CONTENT_INTERNAL_NAMES.KENDO_ANGULAR_APP_DRAWER_PAGE]: appdrawerpage,
  [WIZARD_CONTENT_INTERNAL_NAMES.KENDO_REACT_FORM_PAGE]: formpage,
  [WIZARD_CONTENT_INTERNAL_NAMES.KENDO_ANGULAR_FORM_PAGE]: formpage,
  [WIZARD_CONTENT_INTERNAL_NAMES.KENDO_REACT_CHART_PAGE]: chartpage,
  [WIZARD_CONTENT_INTERNAL_NAMES.KENDO_ANGULAR_CHART_PAGE]: chartpage
}

const SVG_SCREENSHOT_MAPPINGS = {
  [WIZARD_CONTENT_INTERNAL_NAMES.REACT_MASTER_DETAIL]: masterdetailscreenshot,
  [WIZARD_CONTENT_INTERNAL_NAMES.ANGULAR_MASTER_DETAIL]: masterdetailscreenshot,
  [WIZARD_CONTENT_INTERNAL_NAMES.VUE_MASTER_DETAIL]: masterdetailscreenshot,
  [WIZARD_CONTENT_INTERNAL_NAMES.REACT_CONTENT_GRID]: gridscreenshot,
  [WIZARD_CONTENT_INTERNAL_NAMES.ANGULAR_CONTENT_GRID]: gridscreenshot,
  [WIZARD_CONTENT_INTERNAL_NAMES.VUE_CONTENT_GRID]: gridscreenshot,
  [WIZARD_CONTENT_INTERNAL_NAMES.REACT_LIST]: listscreenshot,
  [WIZARD_CONTENT_INTERNAL_NAMES.ANGULAR_LIST]: listscreenshot,
  [WIZARD_CONTENT_INTERNAL_NAMES.VUE_LIST]: listscreenshot,
  [WIZARD_CONTENT_INTERNAL_NAMES.REACT_BLANK_PAGE]: blankscreenshot,
  [WIZARD_CONTENT_INTERNAL_NAMES.ANGULAR_BLANK_PAGE]: blankscreenshot,
  [WIZARD_CONTENT_INTERNAL_NAMES.VUE_BLANK_PAGE]: blankscreenshot
};

export const withLocalPath = (absolutePath: string): string => {
  return process.env.REACT_APP_RELATIVE_PATH + absolutePath;
};

export const screenShotMapping = (internalName: string): string | undefined => {
  if (SVG_SCREENSHOT_MAPPINGS[internalName] !== undefined) {
    return withLocalPath(SVG_SCREENSHOT_MAPPINGS[internalName]);
  }
};

export const getSvg = (internalName: string, style?: string) => {
  if (SVG_REACTCOMPONENT_MAPPINGS[internalName]) {
    return SVG_REACTCOMPONENT_MAPPINGS[internalName](style || "");
  }
};

export const getKendoka = (internalName: string) => {
  if (KENDOKA_MAPPINGS[internalName]) {
    return withLocalPath(KENDOKA_MAPPINGS[internalName]);
  }
};

export const getKendoIcon = (internalName: string) => {
  if (KENDO_MAPPINGS[internalName]) {
    return withLocalPath(KENDO_MAPPINGS[internalName]);
  }
};

export default (internalName: string): string | undefined => {
  if (SVG_MAPPINGS[internalName] !== undefined) {
    return withLocalPath(SVG_MAPPINGS[internalName]);
  }
};

export const getCancelSvg = (): string => withLocalPath(cancel);
export const getWarningSvg = (): string => withLocalPath(warning);
export const getGreenCheckSvg = (): string => withLocalPath(greencheck);
