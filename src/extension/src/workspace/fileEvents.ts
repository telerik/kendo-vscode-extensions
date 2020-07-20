import * as vscode from "vscode";
import EngineAPIService from "../services/engineAPIService";
import Progress from "../services/progress";
import { CoreTemplateStudio } from "../coreTemplateStudio";
import { LaunchExperience } from "../launchExperience";


export async function activateCallHomeTracking(context: vscode.ExtensionContext) {

    var instance = await CoreTemplateStudio.GetInstance(context);
    var port = instance.getPort();

    var launchExperience = new LaunchExperience(new Progress());
    await launchExperience.launchApiSyncModule(context);

    var engineAPI = new EngineAPIService(port, undefined);
    vscode.workspace.onDidSaveTextDocument(async (e) => {
        await engineAPI.putSavedTextDocument(e.fileName);
      })
}