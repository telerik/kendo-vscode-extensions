import * as vscode from "vscode";
import EngineAPIService from "../services/engineAPIService";
import { CoreTemplateStudio } from "../coreTemplateStudio";


export async function activateCallHomeTracking(context: vscode.ExtensionContext) {

    var instance = await CoreTemplateStudio.GetInstance(context);
    var port = instance.getPort();

    await instance.sync(
        {
            port: instance.getPort(),
            payload: { path: "" },
            liveMessageHandler: (message: string) => {}
          }
    )

    var engineAPI = new EngineAPIService(port, undefined);
    vscode.workspace.onDidSaveTextDocument(async (e) => {
        await engineAPI.putSavedTextDocument(e.fileName);
      })
}