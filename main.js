const { app, BrowserWindow } = require('electron')
const config = require('./config')

function createWindow() {
  const win = new BrowserWindow({
    width: config.width,
    height: config.height,
    alwaysOnTop: true,
    titleBarStyle: 'hidden',
    webPreferences: {
      nodeIntegration: true,
    },
  })

  win.loadURL(config.Url)
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
