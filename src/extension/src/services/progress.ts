import * as vscode from "vscode";
import ProgressType from "./progressType";

export default class Progress implements vscode.Progress<ProgressType> {
    report(value: ProgressType): void {
    }
}