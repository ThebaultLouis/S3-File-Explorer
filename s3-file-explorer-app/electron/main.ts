import { app, BrowserWindow, ipcMain } from 'electron';
import { listFiles } from './s3Service';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

ipcMain.handle('ping', () => 'pong')
ipcMain.handle('s3:list-files', listFiles);

app.whenReady().then(() => {
  new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, 'preload.ts'),
      nodeIntegration: true,
      contextIsolation: false,
    }
  }).loadURL(process.env.VITE_DEV_SERVER_URL)
})
