const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Создаём окно
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // Вывод файла index.html
  win.loadFile('index.html')
  win.webContents.openDevTools()
}

// Проверяем инициализацию electron
app.whenReady().then(createWindow)

// Проверка события закрытия окна
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// Отслеживание активации приложения
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
