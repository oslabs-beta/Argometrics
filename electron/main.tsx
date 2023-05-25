const { BrowserWindow, app } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
    backgroundColor: '#000314',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  });
  win.loadURL('http://localhost:8888'); 
}

app.whenReady().then(createWindow);