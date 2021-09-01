import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('vscode-open-config-file.test', () => {
        vscode.commands.executeCommand('workbench.action.openWorkspaceConfigFile');
    });

    context.subscriptions.push(disposable);
}

export function deactivate() { }
