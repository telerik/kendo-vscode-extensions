import fetch from "node-fetch";
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

  public async putSavedTextDocument(filePath: string) {
    const url = new URL(constants.API.Endpoints.SavedTextDocument, this.API);
    await  fetch(url.href, { method: constants.API.Methods.POST, body: filePath })
  };
}