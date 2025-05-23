import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand('core-game-visualizer.visualizer', () => {
    const panel = vscode.window.createWebviewPanel(
      'visualizer', // Identifies the type of the webview. Used internally
      'CORE GAME Visualizer',       // Title of the panel displayed to the user
      vscode.ViewColumn.One, // Editor column to show the new webview panel in
      {} // Webview options. More on these later.
    );

    // Set the webview's HTML content
    panel.webview.html = getWebviewContent();
  });

  context.subscriptions.push(disposable);
}

function getWebviewContent() {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Hello World</title>
    </head>
    <body>
      <h1>Hello World</h1>
    </body>
    </html>
  `;
}

export function deactivate() {}
