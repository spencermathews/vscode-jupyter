import * as vscode from 'vscode';

export function isWeb(): boolean {
    return typeof navigator !== 'undefined' && vscode.env.uiKind === vscode.UIKind.Web;
}
