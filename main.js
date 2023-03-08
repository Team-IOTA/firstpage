const path =require('path');
const{app, BrowserWindow}=require('electron');

const isDev = process.env.NODE_ENV !== 'production';
const isMac = process.platform === 'darwin';

function createMainWindow(){
    const mainWindow =new BrowserWindow({
        title:'Classifie',
        width:isDev ? 1600 : 1200,
        height:800,
    });

    // Show devtools automatically if in development
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }
  mainWindow.loadFile(path.join(__dirname, './Main/index.html'));
}

app.whenReady().then(()=>{
    createMainWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
          createMainWindow();
        }
      })
});

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    if (!isMac) app.quit();
  });