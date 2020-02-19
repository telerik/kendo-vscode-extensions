import { defineMessages } from "react-intl";

const PAGE_DETAILS = "/PageDetail";
const DEFAULT = "default";
const BOOTSTRAP = "bootstrap";
const MATERIAL = "material";
const SELECT_FRAMEWORKS = "/SelectFrameworks";
const SELECT_THEME = "/SelectTheme";
const SELECT_PAGES = "/SelectPages";
const AZURE_LOGIN = "/AzureLogin";
const REVIEW_AND_GENERATE = "/ReviewAndGenerate";
const NEW_PROJECT = "/";

const PRODUCTION = "production";
const DEVELOPMENT = "development";

const INTL_MESSAGES = defineMessages({
  EMPTY_FIELD: {
    id: "constants.emptyField",
    defaultMessage: "{fieldId} field cannot be empty"
  }
});

const MAX_PAGES_ALLOWED = 20;

const KENDOKAS = {
  ORANGE : "orange",
  BLUE: "blue",
  GREEN: "green",
  RED: "red"
}

const ROUTES = {
  PAGE_DETAILS,
  SELECT_FRAMEWORKS,
  SELECT_PAGES,
  SELECT_THEME,
  REVIEW_AND_GENERATE,
  NEW_PROJECT
};

const THEMES = [
  DEFAULT,
  BOOTSTRAP,
  MATERIAL,
];

const LICENSES = [
  "Paid",
  "Trial"
];

// Presents the routes in the order of the wizard
const ROUTES_ARRAY = [
  NEW_PROJECT,
  SELECT_FRAMEWORKS,
  SELECT_PAGES,
  SELECT_THEME,
  REVIEW_AND_GENERATE
];

const SERVICE_KEYS = {
  COSMOS_DB: "cosmosDB",
  AZURE_FUNCTIONS: "azureFunctions"
};

const COSMOS_APIS = {
  MONGO: "MongoDB",
  SQL: "SQL"
};

const WIZARD_CONTENT_INTERNAL_NAMES = {
  ANGULAR: "Angular",
  AZURE: "wts.Feature.Azure",
  AZURE_FUNCTIONS: "wts.Feature.Azure.AzureFunctions",
  REACT_BLANK_PAGE: "wts.Page.React.Blank",
  BLAZOR_SERVER_BLANK_PAGE: "wts.Page.Blazor.Server.Blank",
  BLAZOR_SERVER_HELLO_PAGE: "wts.Page.Blazor.Server.Hello",
  BLAZOR_SERVER_GRID_PAGE: "wts.Page.Blazor.Server.Grid",
  BLAZOR_SERVER_CHART_PAGE: "wts.Page.Blazor.Server.Chart",
  BLAZOR_SERVER_FORM_PAGE: "wts.Page.Blazor.Server.Form",
  BLAZOR_CLIENT_BLANK_PAGE: "wts.Page.Blazor.Client.Blank",
  BLAZOR_CLIENT_HELLO_PAGE: "wts.Page.Blazor.Client.Hello",
  BLAZOR_CLIENT_GRID_PAGE: "wts.Page.Blazor.Client.Grid",
  BLAZOR_CLIENT_CHART_PAGE: "wts.Page.Blazor.Client.Chart",
  BLAZOR_CLIENT_FORM_PAGE: "wts.Page.Blazor.Client.Form",
  KENDO_PLUS_ICON: "plusicon",
  KENDO_MINUS_ICON: "minusicon",
  KENDO_DEFAULT_THEME: "default",
  KENDO_BOOTSTRAP_THEME: "bootstrap",
  KENDO_MATERIAL_THEME: "material",
  REACT_CONTENT_GRID: "wts.Page.React.Grid",
  REACT_MASTER_DETAIL: "wts.Page.React.MasterDetail",
  REACT_LIST: "wts.Page.React.List",
  ANGULAR_BLANK_PAGE: "wts.Page.Angular.Blank",
  ANGULAR_CONTENT_GRID: "wts.Page.Angular.Grid",
  ANGULAR_MASTER_DETAIL: "wts.Page.Angular.MasterDetail",
  ANGULAR_LIST: "wts.Page.Angular.List",
  COSMOS_DB: "wts.Feature.Azure.Cosmos",
  COSMOS_DB_MONGO: "wts.Feature.Azure.Cosmos.Mongo",
  COSMOS_DB_SQL: "wts.Feature.Azure.Cosmos.SQL",
  FULL_STACK_APP: "BlazorWebApp",
  NODE_JS: "NodeJS",
  FLASK: "Flask",
  REACT_JS: "ReactJS",
  BLAZOR_SERVER: "BlazorServer",
  BLAZOR_CLIENT: "BlazorClient",
  KENDO_VUE: "KendoVue",
  REST_API: "RestAPI",
  VUE: "Vue",
  VUE_BLANK_PAGE: "wts.Page.Vue.Blank",
  VUE_CONTENT_GRID: "wts.Page.Vue.Grid",
  VUE_MASTER_DETAIL: "wts.Page.Vue.MasterDetail",
  VUE_LIST: "wts.Page.Vue.List"
};

const EXTENSION_MODULES = {
  AZURE: "Azure",
  GENERATE: "GenerateExperience",
  TELEMETRY: "Telemetry",
  VALIDATOR: "Validator",
  VSCODEUI: "VSCodeUI",
  DEPENDENCYCHECKER: "DependencyChecker",
  CORETS: "CoreTSModule",
  DEFAULTS: "Defaults"
};

// Define extension commands here that should be received from the extension
const EXTENSION_COMMANDS = {
  AZURE_LOGIN: "login",
  AZURE_LOGOUT: "logout",
  GENERATE: "generate",
  GET_OUTPUT_PATH: "get-output-path",
  GET_PROJECT_NAME: "get-project-name",
  GET_USER_STATUS: "get-user-status",
  NAME_COSMOS: "name-cosmos",
  NAME_FUNCTIONS: "name-functions",
  NAME_APP_SERVICE: "name-app-service",
  PROJECT_PATH_VALIDATION: "project-path-validation",
  SUBSCRIPTION_DATA_COSMOS: "subscription-data-for-cosmos",
  SUBSCRIPTION_DATA_FUNCTIONS: "subscription-data-for-functions",
  SUBSCRIPTION_DATA_APP_SERVICE: "subscription-data-for-app-service",
  TRACK_PAGE_SWITCH: "track-page-switch",
  GEN_STATUS_MESSAGE: "update-status-message",
  GEN_STATUS: "update-status",
  GET_PORT: "get-port",
  OPEN_PROJECT_IN_VSCODE: "open-project-vscode",
  GET_VERSIONS: "get-versions",
  CLOSE_WIZARD: "close-wizard",
  RESET_PAGES: "reset-pages",
  GET_PREVIEW_STATUS: "get-preview",
  GET_DEPENDENCY_INFO: "check-dependency",
  GET_FRAMEWORKS: "get-frameworks",
  GET_PAGES: "get-pages"
};

export {
  PRODUCTION,
  EXTENSION_MODULES,
  EXTENSION_COMMANDS,
  ROUTES,
  KENDOKAS,
  ROUTES_ARRAY,
  MAX_PAGES_ALLOWED,
  SERVICE_KEYS,
  WIZARD_CONTENT_INTERNAL_NAMES,
  INTL_MESSAGES,
  COSMOS_APIS,
  THEMES,
  LICENSES,
  DEVELOPMENT
};
