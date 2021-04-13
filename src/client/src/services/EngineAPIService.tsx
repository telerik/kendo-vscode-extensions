import fetch, { Response } from "node-fetch";
import * as constants from "./constants";

export default class EngineAPIService {
  private API: string;

  constructor(port: number, url: string | undefined) {
    if (url === undefined) {
      this.API = "http://localhost:" + port;
    } else {
      this.API = url + ":" + port;
    }
  }

  public async getProjectTypes(): Promise<any> {
    const url = new URL(constants.API.Endpoints.ProjectType, this.API);
    console.log("getProjectTypes");
    return await fetch(url.href, { method: constants.API.Methods.GET })
      .then((response: Response) => {
        return response.json();
      })
      .catch((error: Error) => {
        throw Error(error.toString());
      });
  }

  public async getFrameworks(projectType: string): Promise<any> {
    const url = new URL(constants.API.Endpoints.Framework, this.API);
    url.searchParams.append(constants.API.QueryParams.ProjectType, projectType);
    console.log("getFrameworks");
    return await fetch(url.href, { method: constants.API.Methods.GET })
      .then((response: Response) => {
        return response.json();
      })
      .catch((error: Error) => {
        throw Error(error.toString());
      });
  }

  public async getFeatures(
    projectType: string,
    frontendFramework: string,
    backendFramework: string
  ): Promise<any> {
    const url = new URL(constants.API.Endpoints.Feature, this.API);
    url.searchParams.append(constants.API.QueryParams.ProjectType, projectType);
    url.searchParams.append(
      constants.API.QueryParams.FrontendFramework,
      frontendFramework
    );
    url.searchParams.append(
      constants.API.QueryParams.BackendFramework,
      backendFramework
    );
    console.log("getFeatures");
    return await fetch(url.href, { method: constants.API.Methods.GET })
      .then((response: Response) => {
        return response.json();
      })
      .catch((error: Error) => {
        throw Error(error.toString());
      });
  }

  public async getPages(
    projectType: string,
    frontendFramework: string,
    backendFramework: string
  ): Promise<any> {
    console.log("getPages");
    const url = new URL(constants.API.Endpoints.Page, this.API);
    url.searchParams.append(constants.API.QueryParams.ProjectType, projectType);
    url.searchParams.append(
      constants.API.QueryParams.FrontendFramework,
      frontendFramework
    );
    url.searchParams.append(
      constants.API.QueryParams.BackendFramework,
      backendFramework
    );

    return await fetch(url.href, { method: constants.API.Methods.GET })
      .then((response: Response) => {
        return response.json();
      })
      .catch((error: Error) => {
        throw Error(error.toString());
      });
  }
}
