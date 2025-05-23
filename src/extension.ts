import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand('core-game-visualizer.visualizer', () => {
    const panel = vscode.window.createWebviewPanel(
      'visualizer', // Identifies the type of the webview. Used internally
      'CORE GAME Visualizer',       // Title of the panel displayed to the user
      vscode.ViewColumn.One,
      {
        enableScripts: true,
      }
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
  <title>CORE GAME Visualizer</title>
  <meta http-equiv="Content-Security-Policy" content="default-src 'none'; frame-src http://localhost;">
  <style>
    html, body {
      height: 100%;
      width: 100%;
      margin: 0;
      padding: 0;
      overflow: hidden;
    }
  </style>
</head>
<body>
  <iframe src="http://localhost/" style="
    position: absolute;
    top: 0;
    left: 0;
    border: none;
    width: 100vw;
    height: 100vh;
    transform: scale(2); 
    transform-origin: top left;
  "></iframe>
</body>
</html>
  `;
}


export function deactivate() {}
