import * as vscode from "vscode";
import { Controller } from "./controller";
import { activateCallHomeTracking } from "./workspace/fileEvents"

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand(
      "kendoTemplateExtension.wizardLaunch",
      async () => {
        Controller.getInstance(context, Date.now());
      }
    )
  );

  activateCallHomeTracking(context);
}

export function deactivate() {
  Controller.dispose();
}
